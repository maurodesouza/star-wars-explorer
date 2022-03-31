import { Entities } from 'types';

const getEntityRelationships = (entity: Entities) => {
  const relationships = {
    [Entities.CHARACTERS]: [
      Entities.FILMS,
      Entities.VEHICLES,
      Entities.SPECIES,
      Entities.STARSHIPS,
      'homeworld',
    ],

    [Entities.FILMS]: [
      Entities.CHARACTERS,
      Entities.PLANETS,
      Entities.VEHICLES,
      Entities.SPECIES,
      Entities.STARSHIPS,
    ],

    [Entities.PLANETS]: [Entities.FILMS, 'residents'],

    [Entities.SPECIES]: [Entities.FILMS, 'people', 'homeworld'],

    [Entities.STARSHIPS]: [Entities.FILMS, 'pilots'],

    [Entities.VEHICLES]: [Entities.FILMS, 'pilots'],
  };

  return relationships[entity];
};

export { getEntityRelationships };
