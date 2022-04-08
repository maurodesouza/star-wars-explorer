import { slugfy } from '.';

describe('Utils', () => {
  describe('slugfy', () => {
    it('should format string in slug format', async () => {
      const strings = [
        'Text',
        'Other Text',
        'Came-case Here',
        'FOO',
        'B r',
        'text/here',
        'á é í ó ú',
      ];

      const expected = [
        'text',
        'other-text',
        'came-case-here',
        'foo',
        'b-r',
        'text-here',
        'a-e-i-o-u',
      ];

      strings.forEach((string, index) => {
        const result = slugfy(string);

        expect(result).toStrictEqual(expected[index]);
      });
    });
  });
});
