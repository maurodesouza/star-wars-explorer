import { useRouter } from 'next/router';

import { Image } from 'components';
import { slugfy } from 'utils';

import { Entities, Entity, Partials } from 'types';
import * as S from './styles';

export type CardProps = Omit<Partials<Entity, 'entity'>, 'relations'>;

const Card = ({ entity = Entities.CHARACTERS, image, title }: CardProps) => {
  const router = useRouter();

  const handleRedirect = async (e: React.MouseEvent) => {
    e.preventDefault();

    router.push(href);
  };

  const href = `/universe/${entity}/${slugfy(title)}`;

  return (
    <S.Container role="link" onClick={handleRedirect}>
      <Image image={image} alt={title} />

      <S.Content>
        <S.Label>{title}</S.Label>
      </S.Content>
    </S.Container>
  );
};

export { Card };
