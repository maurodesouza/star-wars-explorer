import { renderHook, act } from '@testing-library/react-hooks';
import { useForceUpdate } from '.';

const mockSetState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [0, mockSetState],
}));

describe('Hooks', () => {
  describe('use force update', () => {
    it('should change state on call', () => {
      const { result } = renderHook(() => useForceUpdate());

      act(() => {
        result.current();
      });

      expect(mockSetState).toBeCalledTimes(1);
      expect(mockSetState).toBeCalledWith(1);
    });
  });
});
