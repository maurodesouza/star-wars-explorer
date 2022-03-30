import { Card, CardProps } from 'components';

import * as S from './styles';

export type CardListProps = {
  items?: CardProps[];
};

const CardList = ({ items = [] }: CardListProps) => {
  const minCountToFill = 4;

  const lackForFill = items.length - minCountToFill;
  const needFill = lackForFill < 0;

  return (
    <S.Container>
      {items.map(item => (
        <Card key={item.id} {...item} />
      ))}

      {needFill &&
        Array(Math.abs(lackForFill))
          .fill('')
          .map((_, index) => <S.Fill key={index} />)}
    </S.Container>
  );
};

export { CardList };
