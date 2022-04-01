import { events } from 'app';
import { useEffect, useState } from 'react';
import { Events } from 'types';
import * as S from './styles';

const RelationsListFilter = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => () => {
    const value = option === selected ? '' : option;

    events.relations.filter(value);
  };

  const handleSetOptions = (event: CustomEvent<string[]>) =>
    setOptions(event.detail);

  const handleSetSeleted = (event: CustomEvent<string>) =>
    setSelected(event.detail);

  useEffect(() => {
    events.on(Events.RELATIONS_FILTER_OPTIONS, handleSetOptions);
    events.on(Events.RELATIONS_FILTER, handleSetSeleted);

    return () => {
      events.off(Events.RELATIONS_FILTER_OPTIONS, handleSetOptions);
      events.off(Events.RELATIONS_FILTER, handleSetSeleted);
    };
  }, []);

  return options.length ? (
    <S.Container>
      <S.Label>Filter by</S.Label>

      <S.Content>
        {options.map(option => (
          <S.Option
            selected={option === selected}
            onClick={handleSelect(option)}
            key={option}
          >
            {option}
          </S.Option>
        ))}
      </S.Content>
    </S.Container>
  ) : null;
};

export { RelationsListFilter };
