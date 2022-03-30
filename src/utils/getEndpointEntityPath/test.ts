import { Entities } from 'types';
import { getEndpointEntityPath } from '.';

describe('Utils', () => {
  describe('getEndpointEntityPath', () => {
    it('should return the correct entity endpoint path', () => {
      const entities = Object.values(Entities);

      const expected = entities.map(entity => {
        if (entity === Entities.CHARACTERS) return 'people';

        return entity;
      });

      entities.map((entity, index) => {
        const result = getEndpointEntityPath(entity);

        expect(result).toBe(expected[index]);
      });
    });
  });
});
