import { useRef, useState, MouseEvent, FocusEvent } from 'react';

import { events } from 'app';
import { useForceUpdate } from 'hooks';

import { debounce, filterArrayByQueryMatch } from 'utils';

import { Entities } from 'types';
import * as S from './styles';

const OPTIONS = Object.values(Entities) as unknown as Entities[];

const Select = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const forceUpdate = useForceUpdate();

  const [selectedOption, setSelectedOption] = useState<Entities>(
    Entities.CHARACTERS
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clearInputValue = () =>
    !!inputRef.current && (inputRef.current.value = '');

  const handleSelect = (option: Entities) => (e: MouseEvent) => {
    e.stopPropagation();

    setSelectedOption(option);
    setIsDropdownOpen(false);

    events.search.make({ entity: option });
    setTimeout(() => clearInputValue(), 200);
  };

  const handleBlur = (event: FocusEvent) => {
    if (dropdownRef.current?.contains(event.relatedTarget as Node)) return;

    setIsDropdownOpen(false);
    clearInputValue();
  };

  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);

    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterArrayByQueryMatch<Entities>(value, OPTIONS);

  return (
    <S.Container onClick={handleOpenDropdown}>
      <S.Input
        ref={inputRef}
        isSelected={!!selectedOption}
        placeholder={selectedOption}
        onInput={debounce(forceUpdate, 200)}
        onFocus={handleOpenDropdown}
        onBlur={handleBlur}
        aria-label="Open drop down select"
      />

      <S.ChevronRightIcon />

      <S.Dropdown
        ref={dropdownRef}
        open={isDropdownOpen}
        aria-hidden={!isDropdownOpen}
        aria-label="drop down select"
      >
        {!!filteredOptions.length ? (
          filteredOptions.map(option => (
            <S.Option key={option} onClick={handleSelect(option)}>
              {option}
            </S.Option>
          ))
        ) : (
          <S.Option>No result for &quot;{value}&quot;</S.Option>
        )}
      </S.Dropdown>
    </S.Container>
  );
};

export { Select };
