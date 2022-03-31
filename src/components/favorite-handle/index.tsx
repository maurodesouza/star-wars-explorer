import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoteBorderIcon,
} from '@styled-icons/material';

import { events } from 'app';
import { useFavorites } from 'hooks';

import { Entity } from 'types';
import * as S from './styles';

export type FavoriteHandleProps = Entity;

const FavoriteHandle = (data: FavoriteHandleProps) => {
  const { favorites } = useFavorites();

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();

    events.favorites.add(data);
  };

  const handleRemoveFromFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();

    events.favorites.remove(data.id);
  };

  const isFavorite = favorites.find(item => item.id === data.id);

  return (
    <>
      {isFavorite ? (
        <S.Container onClick={handleRemoveFromFavorites}>
          <FavoriteIcon aria-label="Remove hero to favorites" />
        </S.Container>
      ) : (
        <S.Container onClick={handleAddToFavorites}>
          <FavoteBorderIcon aria-label="Add hero to favorites" />
        </S.Container>
      )}
    </>
  );
};

export { FavoriteHandle };
