import { Card, EmptyCard } from 'components';
import { Entity } from 'types';

import * as S from './styles';

type Item = Entity & {
  empty?: boolean;
};

export type CardListProps = {
  items?: Item[];
};

const CardList = ({ items = [] }: CardListProps) => {
  const minCountToFill = 4;

  const lackForFill = items.length - minCountToFill;
  const needFill = lackForFill < 0;

  return (
    <S.Container data-cy="card list">
      {items.map(item => {
        const Item = item.empty ? EmptyCard : Card;

        return <Item key={item.id} {...item} />;
      })}

      {needFill &&
        Array(Math.abs(lackForFill))
          .fill('')
          .map((_, index) => <S.Fill key={index} />)}
    </S.Container>
  );
};

export { CardList };
