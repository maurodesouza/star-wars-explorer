import { useEffect, useState, useMemo } from 'react';

import { CardList, CardListProps } from 'components';
import { events } from 'app';

import { Entities, Entity, Events } from 'types';
import * as S from './styles';
import { RelationsListFilter } from 'components/relations-list-filter';

export type RelationsListProps = {
  relations: CardListProps['items'];
  filter?: boolean;
};

const RelationsList = ({
  relations = [],
  filter = true,
}: RelationsListProps) => {
  const [filterBy, setFilterBy] = useState('');

  const entities = useMemo(() => {
    return relations.reduce((obj, item) => {
      const key = item.entity;

      const entities = obj[key] || [];

      obj[key] = [...entities, item];

      return obj;
    }, {} as Record<Entities, (Entity & { empty?: boolean })[]>);
  }, []);

  const handleFilter = (event: CustomEvent<string>) =>
    setFilterBy(event.detail);

  useEffect(() => {
    events.on(Events.RELATIONS_FILTER, handleFilter);

    return () => {
      events.off(Events.RELATIONS_FILTER, handleFilter);
    };
  }, []);

  useEffect(() => {
    events.relations['set.options'](Object.keys(entities));
  }, [entities]);

  return (
    <S.Container>
      {filter && <RelationsListFilter />}

      <S.Wrapper>
        {Object.entries(entities).map(([key, items]) => {
          if (!!filterBy && key !== filterBy) return null;

          const total = items.length;
          const emptyCount = items.filter(item => !!item.empty).length;

          const hasEmpty = !!emptyCount;
          const finded = items.length - emptyCount;

          const label = `${key} (${
            hasEmpty && finded ? `${finded}/` : ''
          }${total})`;

          return (
            <S.Box key={key}>
              <S.Label>{label}</S.Label>
              <CardList items={items} />
            </S.Box>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export { RelationsList };
