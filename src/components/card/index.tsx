import { useRouter } from 'next/router';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoteBorderIcon,
} from '@styled-icons/material';

import { Image } from 'components';
import { slugfy } from 'utils';

import { useFavorites } from 'hooks';
import { events } from 'app';

import { Entities, Entity, Partials } from 'types';
import * as S from './styles';

export type CardProps = Omit<Partials<Entity, 'entity'>, 'relations'>;

const Card = ({
  entity = Entities.CHARACTERS,
  image,
  title,
  id,
}: CardProps) => {
  const router = useRouter();
  const { favorites } = useFavorites();

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();

    events.favorites.add({ id, title, entity, image });
  };

  const handleRemoveFromFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();

    events.favorites.remove(id);
  };

  const handleRedirect = async (e: React.MouseEvent) => {
    e.preventDefault();

    router.push(href);
  };

  const href = `/universe/${entity}/${slugfy(title)}`;
  const isFavorite = favorites.find(item => item.id === id);

  return (
    <S.Container role="link" onClick={handleRedirect}>
      <Image image={image} alt={title} />

      <S.Content>
        <S.Label>{title}</S.Label>

        {isFavorite ? (
          <S.IconWrapper onClick={handleRemoveFromFavorites}>
            <FavoriteIcon aria-label="Remove hero to favorites" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={handleAddToFavorites}>
            <FavoteBorderIcon aria-label="Add hero to favorites" />
          </S.IconWrapper>
        )}
      </S.Content>
    </S.Container>
  );
};

export { Card };
