import { Image } from 'components';
import { FavoriteHandle } from 'components/favorite-handle';
import { Entity } from 'types';

import * as S from './styles';

type EntityDetailsProps = Entity;

const EntityDetails = (data: EntityDetailsProps) => {
  const { image, title, extras = {} } = data;

  return (
    <S.Container>
      <S.Box>
        <Image image={image!} alt={title!} />

        <S.Wrapper>
          <FavoriteHandle {...data} />
        </S.Wrapper>
      </S.Box>

      <S.Content>
        {Object.entries(extras).map(([key, value]) => (
          <S.Field key={key}>
            <S.Key>{key.replace('_', ' ')}:</S.Key>
            <S.Value>{value}</S.Value>
          </S.Field>
        ))}
      </S.Content>
    </S.Container>
  );
};

export { EntityDetails };
