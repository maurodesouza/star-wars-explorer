import { useContext } from 'react';
import { AchievementsContext } from 'context';

const useAchievements = () => useContext(AchievementsContext);

export { useAchievements };
