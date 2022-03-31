import { CardList, CardListProps } from 'components/card-list';
import { Entities, Entity } from 'types';

import * as S from './styles';

export type RelationsListProps = {
  relations: CardListProps['items'];
};

const RelationsList = ({ relations = [] }: RelationsListProps) => {
  const entities = relations.reduce((obj, item) => {
    const key = item.entity;
    const entities = obj[key] || [];

    obj[key] = [...entities, item];

    return obj;
  }, {} as Record<Entities, (Entity & { empty?: boolean })[]>);

  return (
    <S.Container>
      {Object.entries(entities).map(([key, items]) => {
        const total = items.length;
        const emptyCount = items.filter(item => !!item.empty).length;

        const hasEmpty = !!emptyCount;
        const finded = items.length - emptyCount;

        const label = `${key} (${
          hasEmpty && finded ? `${finded}/` : ''
        }${total})`;

        return (
          <S.Wrapper key={key}>
            <S.Label>{label}</S.Label>
            <CardList items={items} />
          </S.Wrapper>
        );
      })}
    </S.Container>
  );
};

export { RelationsList };
