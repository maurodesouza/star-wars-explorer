import { createArray } from '.';

describe('Utils', () => {
  describe('createArray', () => {
    it('should create an array with the same length of passed arg', () => {
      const lengths = [2, 5, 9];

      lengths.map(length => {
        const result = createArray(length);

        expect(result.length).toBe(length);
      });
    });
  });
});
