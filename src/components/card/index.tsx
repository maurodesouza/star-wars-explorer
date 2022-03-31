import { useRouter } from 'next/router';

import { Image, FavoriteHandle } from 'components';
import { slugfy } from 'utils';

import { Entities, Entity, Partials } from 'types';
import * as S from './styles';

export type CardProps = Omit<
  Partials<Entity, 'entity'>,
  'relations' | 'extras'
>;

const Card = (data: CardProps) => {
  const { entity = Entities.CHARACTERS, image, title } = data;
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

        <S.Wrapper>
          <FavoriteHandle {...data} entity={entity} />
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};

export { Card };
