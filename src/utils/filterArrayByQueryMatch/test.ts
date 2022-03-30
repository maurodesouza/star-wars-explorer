import { filterArrayByQueryMatch } from '.';

describe('Utils', () => {
  describe('filterArrayByQueryMatch', () => {
    const stringOptions = ['f', 'fi', 'fil', 'filt', 'filte', 'filter'];
    const objectOptions = [
      { value: 'f' },
      { value: 'fi' },
      { value: 'fil' },
      { value: 'filt' },
      { value: 'filte' },
      { value: 'filter' },
    ];

    it('should filter string array by query', () => {
      stringOptions.forEach((query, index) => {
        const arrayClone = JSON.parse(
          JSON.stringify(stringOptions)
        ) as string[];

        const result = filterArrayByQueryMatch(query, stringOptions);
        const expected = arrayClone.splice(index);

        expect(result).toStrictEqual(expected);
      });
    });

    it('should filter object array by query', () => {
      objectOptions.forEach((item, index) => {
        const arrayClone = JSON.parse(
          JSON.stringify(objectOptions)
        ) as string[];

        const result = filterArrayByQueryMatch(item.value, objectOptions, [
          'value',
        ]);
        const expected = arrayClone.splice(index);

        expect(result).toStrictEqual(expected);
      });
    });

    it('should return an empty array case no one options was passed', () => {
      const result = filterArrayByQueryMatch('foo');

      expect(result).toStrictEqual([]);
    });
  });
});
