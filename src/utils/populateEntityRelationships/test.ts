import axios from 'axios';

import { Entities } from 'types';
import { getImageUrl } from 'utils';

import { populateEntityRelationships } from '.';

describe('Utils', () => {
  describe('populateEntityRelationships', () => {
    it('should return correct data from swapi url request', async () => {
      const axiosSpy = jest.spyOn(axios, 'get');

      const urls = [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/species/20/',
      ];

      const expected = [
        {
          id: '1',
          entity: Entities.CHARACTERS,
          title: 'title 1',
          image: getImageUrl(Entities.CHARACTERS, '1'),
        },
        {
          id: '20',
          entity: Entities.SPECIES,
          title: 'title 2',
          image: getImageUrl(Entities.SPECIES, '20'),
        },
      ];

      const resolves = [
        {
          name: 'title 1',
        },
        {
          title: 'title 2',
        },
      ];

      axiosSpy
        .mockResolvedValueOnce({ data: resolves[0] })
        .mockResolvedValueOnce({ data: resolves[1] });

      const result = await populateEntityRelationships(urls);

      expect(result).toStrictEqual(expected);
    });
  });
});
