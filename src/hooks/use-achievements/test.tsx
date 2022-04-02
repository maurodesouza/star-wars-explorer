import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'context';

import { events } from 'app';
import { getImageUrl } from 'utils';

import { Entities, Entity } from 'types';
import { useAchievements } from '.';

describe('Hooks', () => {
  describe('use achievements hook', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should add an achievements on receive add achievements event', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      const entity = Entities.CHARACTERS;

      const eventPayload = {
        entity: entity,
        id: '2',
        title: 'some',
        image: getImageUrl(entity, '2'),
      };

      const { result } = renderHook(() => useAchievements(), {
        wrapper,
      });

      {
        const { achievements } = result.current;

        expect(achievements[entity].length).toBe(0);
      }

      act(() => {
        events.achievements.add(eventPayload);
      });

      const expected = eventPayload;

      Reflect.deleteProperty(expected, 'image');
      Reflect.deleteProperty(expected, 'entity');

      {
        const { achievements } = result.current;

        const achievement = achievements[entity][0];

        expect(achievements[entity].length).toBe(1);
        expect(achievement).toStrictEqual(expected);
      }
    });

    it('should avoid duplicate on receive add achievements event that already saved', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      const entity = Entities.CHARACTERS;

      const eventPayload = {
        entity: entity,
        id: '2',
        title: 'some',
        image: getImageUrl(entity, '2'),
      };

      const { result } = renderHook(() => useAchievements(), {
        wrapper,
      });

      act(() => {
        events.achievements.add(eventPayload);
        events.achievements.add(eventPayload);
      });

      const { achievements } = result.current;

      expect(achievements[entity].length).toBe(1);
    });

    it('should do nothing if no pass values', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => {
        return <Provider>{children}</Provider>;
      };

      const entity = Entities.CHARACTERS;

      const { result } = renderHook(() => useAchievements(), {
        wrapper,
      });

      act(() => {
        events.achievements.add({} as Entity);
      });

      const { achievements } = result.current;

      expect(achievements[entity].length).toBe(0);
    });
  });
});
