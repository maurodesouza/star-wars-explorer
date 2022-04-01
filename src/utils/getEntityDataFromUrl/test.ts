import { getEntityDataFromUrl } from '.';

describe('Utils', () => {
  describe('getEntityDataFromUrl', () => {
    it('should return correct data from swapi url request', () => {
      const urls = [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/species/20/',
      ];

      const expected = [
        {
          id: '1',
          entity: 'characters',
        },
        {
          id: '20',
          entity: 'species',
        },
      ];

      urls.forEach((urls, index) => {
        const result = getEntityDataFromUrl(urls);

        expect(result).toStrictEqual(expected[index]);
      });
    });
  });
});
