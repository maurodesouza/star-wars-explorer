import { RelationsList, EntityDetails } from 'components';
import { Entity } from 'types';

import * as S from './styles';

type EntityInfoProps = Entity;

const EntityInfo = (data: EntityInfoProps) => {
  return (
    <S.Container>
      <EntityDetails {...data} />

      <S.Title>Associated</S.Title>

      <RelationsList relations={data.relations || []} />
    </S.Container>
  );
};

export { EntityInfo };
