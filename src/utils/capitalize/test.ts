import { capitalize } from '.';

describe('Utils', () => {
  describe('capitalize', () => {
    it('should capitalize string', () => {
      const strings = ['text', 'other text'];
      const expected = ['Text', 'Other text'];

      strings.forEach((string, index) => {
        const result = capitalize(string);

        expect(result).toBe(expected[index]);
      });
    });
  });
});
