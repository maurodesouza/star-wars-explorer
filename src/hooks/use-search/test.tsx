import { act, renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';

import axios, { AxiosError } from 'axios';
import { Provider } from 'context';

import { events } from 'app';
import { Entities } from 'types';

import { useSearch } from '.';

const axiosSpy = jest.spyOn(axios, 'get');
const searchErrorEvent = jest.spyOn(events.search, 'error');

describe('Hooks', () => {
  describe('use search hook', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should make a request when receive search make event', async () => {
      const response = 'test';

      axiosSpy.mockResolvedValue({ data: 'test' });

      const search = 'text';

      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      const { result } = renderHook(() => useSearch(), {
        wrapper,
      });

      act(() => {
        events.search.make({ search });
      });

      await waitFor(async () => {
        expect(axiosSpy).toBeCalledTimes(1);
        expect(axiosSpy).toHaveBeenCalledWith(
          '/api/data',
          expect.objectContaining({
            params: {
              entity: Entities.CHARACTERS,
              search,
            },
          })
        );
      });

      expect(result.current.data).toStrictEqual(response);
    });

    it('should return cache data if exist', async () => {
      const response = 'test';

      axiosSpy.mockResolvedValue({ data: 'test' });

      const search = 'text';

      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      const { result } = renderHook(() => useSearch(), {
        wrapper,
      });

      act(() => {
        events.search.make({ search });
      });

      await waitFor(async () => {
        expect(axiosSpy).toBeCalledTimes(1);
        expect(axiosSpy).toHaveBeenCalledWith(
          '/api/data',
          expect.objectContaining({
            params: {
              entity: Entities.CHARACTERS,
              search,
            },
          })
        );
      });

      expect(result.current.data).toStrictEqual(response);

      act(() => {
        events.search.make({ search });
      });

      expect(axiosSpy).toBeCalledTimes(1);
    });

    it('should do nothing if no search send', async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      renderHook(() => useSearch(), { wrapper });

      act(() => {
        events.search.make({ search: '' });
      });

      expect(axiosSpy).toBeCalledTimes(0);
    });

    it('should save the search and entity values for the next request', async () => {
      axiosSpy.mockResolvedValue({});

      const search = 'text';
      const entity = Entities.PLANETS;

      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      renderHook(() => useSearch(), { wrapper });

      act(() => {
        events.search.make({ search });
      });

      await waitFor(async () => {
        expect(axiosSpy).toBeCalledTimes(1);
        expect(axiosSpy).toHaveBeenCalledWith(
          '/api/data',
          expect.objectContaining({
            params: {
              entity: Entities.CHARACTERS,
              search,
            },
          })
        );
      });

      act(() => {
        events.search.make({ entity });
      });

      await waitFor(async () => {
        expect(axiosSpy).toBeCalledTimes(2);
        expect(axiosSpy).toHaveBeenCalledWith(
          '/api/data',
          expect.objectContaining({
            params: {
              entity,
              search,
            },
          })
        );
      });
    });

    it('should send search error event on error with default error message', async () => {
      const errorMessage = 'An error has occurred, try again or come back soon';
      const search = 'text';

      axiosSpy.mockRejectedValue({});

      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      renderHook(() => useSearch(), { wrapper });

      act(() => {
        events.search.make({ search });
      });

      await waitFor(async () => {
        expect(axiosSpy).toBeCalledTimes(1);

        expect(searchErrorEvent).toBeCalledTimes(1);
        expect(searchErrorEvent).toBeCalledWith(errorMessage);
      });
    });

    it('should send search error event on error with axios error', async () => {
      const errorMessage = 'foo';
      const search = 'text';

      const axiosError: AxiosError = {
        config: {},
        message: errorMessage,
        name: errorMessage,
        isAxiosError: true,
        response: {
          data: {
            error: errorMessage,
          },
          config: {},
          headers: {},
          status: 400,
          statusText: '',
        },
        toJSON: () => ({}),
      };

      axiosSpy.mockRejectedValue(axiosError);

      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      renderHook(() => useSearch(), { wrapper });

      act(() => {
        events.search.make({ search });
      });

      await waitFor(async () => {
        expect(axiosSpy).toBeCalledTimes(1);

        expect(searchErrorEvent).toBeCalledTimes(1);
        expect(searchErrorEvent).toBeCalledWith(errorMessage);
      });
    });

    it('should abort request if a receive a new search make event', async () => {
      const abortSpy = jest.spyOn(AbortController.prototype, 'abort');

      axiosSpy
        .mockRejectedValueOnce({ constructor: { name: 'Cancel' } })
        .mockResolvedValueOnce({});

      const search = 'text';

      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      renderHook(() => useSearch(), {
        wrapper,
      });

      act(() => {
        events.search.make({ search });
        events.search.make({ search });
      });

      await waitFor(async () => {
        expect(abortSpy).toBeCalledTimes(1);
        expect(searchErrorEvent).not.toBeCalled();
      });
    });
  });
});
