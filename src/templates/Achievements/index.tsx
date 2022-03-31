import { BaseTemplate } from 'templates';
import { Heading, RelationsList } from 'components';

import { config } from 'app';
import { useAchievements } from 'hooks';

import { Entities, Entity } from 'types';
import { getImageUrl } from 'utils';

import * as S from './styles';

const AchievementsTemplate = () => {
  const { achievements } = useAchievements();

  const relations = Object.values(Entities).reduce((arr, entity) => {
    const totalCount = config.entities[entity].count;
    const savedItems = achievements[entity];

    const items = Array(totalCount)
      .fill('')
      .map((_, index) => {
        const id = String(index + 1);
        const finded = savedItems.find(item => item.id === id);

        if (!!finded)
          return {
            ...finded,
            entity,
            image: getImageUrl(entity, finded.id),
          };

        return { empty: true, id, entity } as unknown as Entity;
      });

    return [...arr, ...items];
  }, [] as Entity[]);

  return (
    <BaseTemplate>
      <Heading>Progress of your exploration</Heading>

      <S.Container>
        <RelationsList relations={relations} />
      </S.Container>
    </BaseTemplate>
  );
};

export { AchievementsTemplate };
