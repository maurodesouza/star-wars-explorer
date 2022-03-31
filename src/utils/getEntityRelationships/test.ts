import { Entities } from 'types';
import { getEntityRelationships } from '.';

describe('Utils', () => {
  describe('getEntityRelationships', () => {
    it('should return the corret entity relationships', () => {
      const expected = [
        [
          Entities.FILMS,
          Entities.VEHICLES,
          Entities.SPECIES,
          Entities.STARSHIPS,
          'homeworld',
        ],

        [
          Entities.CHARACTERS,
          Entities.PLANETS,
          Entities.VEHICLES,
          Entities.SPECIES,
          Entities.STARSHIPS,
        ],

        [Entities.FILMS, 'people', 'homeworld'],

        [Entities.FILMS, 'pilots'],

        [Entities.FILMS, 'pilots'],

        [Entities.FILMS, 'residents'],
      ];

      Object.values(Entities).forEach((entity, index) => {
        const result = getEntityRelationships(entity);

        expect(result).toStrictEqual(expected[index]);
      });
    });
  });
});
