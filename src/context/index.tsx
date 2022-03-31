import { FavoritesProvider, FavoritesContext } from './favorites';
import { AchievementsProvider, AchievementsContext } from './achievements';
import { SearchProvider, SearchContext } from './search';

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => (
  <AchievementsProvider>
    <FavoritesProvider>
      <SearchProvider>{children}</SearchProvider>
    </FavoritesProvider>
  </AchievementsProvider>
);

export { Provider, SearchContext, AchievementsContext, FavoritesContext };
