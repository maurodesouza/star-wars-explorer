import { CardList } from 'components/card-list';
import { Entities, Entity } from 'types';
import * as S from './styles';

type RelationsListProps = {
  relations: Entity[];
};

const RelationsList = ({ relations }: RelationsListProps) => {
  const entities = relations.reduce((obj, item) => {
    const key = item.entity;
    const entities = obj[key] || [];

    obj[key] = [...entities, item];

    return obj;
  }, {} as Record<Entities, Entity[]>);

  return (
    <S.Container>
      {Object.entries(entities).map(([key, items]) => (
        <S.Wrapper key={key}>
          <S.Label>{key}</S.Label>
          <CardList items={items} />
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export { RelationsList };
