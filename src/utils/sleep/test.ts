import { sleep } from '.';

jest.spyOn(global, 'setTimeout');

describe('Utils', () => {
  describe('sleep', () => {
    it('should await 300ms by default', async () => {
      await sleep();

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
  });
});
