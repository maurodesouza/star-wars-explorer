import { BaseTemplate } from '../Base';
import { Animation, CardList, Heading } from 'components';

import { useFavorites } from 'hooks';
import * as S from './styles';

const FavoritesTemplate = () => {
  const { favorites } = useFavorites();

  return (
    <BaseTemplate>
      <Heading>My favorites</Heading>

      <S.Results>
        {favorites.length ? (
          <CardList items={favorites} />
        ) : (
          <S.Wrapper>
            <Animation
              animation="no-result"
              label="You don't have any favorite yet"
            />
          </S.Wrapper>
        )}
      </S.Results>
    </BaseTemplate>
  );
};

export { FavoritesTemplate };
