import { useEffect, createContext } from 'react';

import { events } from 'app';
import { usePersistedState } from 'hooks';

import { Entities, Entity, Events } from 'types';

type AchievementPayload = Pick<Entity, 'id' | 'title'>[];
type Achievements = Record<Entities, AchievementPayload>;

type AchievementsContextData = {
  achievements: Achievements;
};

type AchievementsProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE = Object.values(Entities).reduce((obj, entity) => {
  obj[entity] = [];

  return obj;
}, {} as Record<Entities, AchievementPayload>);

const AchievementsContext = createContext<AchievementsContextData>(
  {} as AchievementsContextData
);

const AchievementsProvider = ({ children }: AchievementsProviderProps) => {
  const [achievements, setAchievements] = usePersistedState<Achievements>(
    'achievements',
    INITIAL_STATE
  );

  const handleAdd = (event: CustomEvent<Entity>) => {
    const { entity, id, title } = event.detail;

    if (!entity || !id || !title) return;

    setAchievements(state => {
      const achievements = state[entity];

      const areadyHave = achievements.find(item => item.id === id);

      if (areadyHave) return state;

      return {
        ...state,
        [entity]: [...state[entity], { id, title }],
      };
    });
  };

  useEffect(() => {
    events.on(Events.ADD_ACHIEVEMENT, handleAdd);

    return () => {
      events.off(Events.ADD_ACHIEVEMENT, handleAdd);
    };
  }, []);

  return (
    <AchievementsContext.Provider value={{ achievements }}>
      {children}
    </AchievementsContext.Provider>
  );
};

export { AchievementsProvider, AchievementsContext };
