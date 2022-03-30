import { FormEvent, useEffect, useRef, useState } from 'react';

import { events } from 'app';
import { Events } from 'types';

import { Select } from './select';
import * as S from './styles';
import { debounce } from 'utils';

export type SearchProps = {
  label?: string;
  placeholder?: string;
};

const Search = ({
  label = 'Explore by',
  placeholder = 'Ex: Luke',
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');

  const handleSearch = () => {
    const { value } = inputRef.current!;

    setError('');

    events.search.make({ search: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSearch();
  };

  const handleError = (event: CustomEvent<string>) => setError(event.detail);

  useEffect(() => {
    events.on(Events.SEARCH_ERROR, handleError);

    return () => {
      events.off(Events.SEARCH_ERROR, handleError);
    };
  }, []);

  return (
    <S.Container onSubmit={handleSubmit} aria-label="form">
      {!!error && <S.Error>{error}</S.Error>}

      <S.Label htmlFor="search">
        {label}

        <S.InputWrapper>
          <Select />
          <S.Input
            id="search"
            ref={inputRef}
            placeholder={placeholder}
            onInput={debounce(handleSearch)}
          />
        </S.InputWrapper>
      </S.Label>
    </S.Container>
  );
};

export { Search };
