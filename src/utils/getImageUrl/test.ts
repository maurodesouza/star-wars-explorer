import { Entities } from 'types';
import { getImageUrl } from '.';

const baseUrl =
  'https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img';

describe('Utils', () => {
  describe('getImageUrl', () => {
    it('should mont the image url correct', () => {
      const items = [
        {
          entity: Entities.CHARACTERS,
          id: '1',
        },
        {
          entity: Entities.CHARACTERS,
          id: '2',
        },
        {
          entity: Entities.CHARACTERS,
          id: '3',
        },
      ];

      items.map(item => {
        const result = getImageUrl(item.entity, item.id);

        const expected = `${baseUrl}/${item.entity}/${item.id}.jpg`;

        expect(result).toBe(expected);
      });
    });
  });
});
