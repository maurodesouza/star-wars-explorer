import { Question as QuestionIcon } from '@styled-icons/fa-solid';
import { Entity } from 'types';
import * as S from './styles';

type EmptyCardProps = Pick<Entity, 'id'>;

const EmptyCard = ({ id }: EmptyCardProps) => {
  return (
    <S.Container>
      <QuestionIcon size={40} />

      <S.Label>{id}#</S.Label>
    </S.Container>
  );
};

export default EmptyCard;
