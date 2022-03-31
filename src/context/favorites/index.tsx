import { useEffect, createContext } from 'react';

import { events } from 'app';
import { usePersistedState } from 'hooks';

import { Entity, Events } from 'types';

type FavoritesContextData = {
  favorites: Entity[];
};

type FavoritesProviderProps = {
  children: React.ReactNode;
};

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = usePersistedState<Entity[]>(
    'favorites',
    []
  );

  const handleAdd = (event: CustomEvent<Entity>) => {
    setFavorites(state => [...state, event.detail]);
  };

  const handleRemove = (event: CustomEvent<{ id: string }>) => {
    setFavorites(state => state.filter(item => item.id !== event.detail.id));
  };

  useEffect(() => {
    events.on(Events.ADD_FAVORITE, handleAdd);
    events.on(Events.REMOVE_FAVORITE, handleRemove);

    return () => {
      events.off(Events.ADD_FAVORITE, handleAdd);
      events.off(Events.REMOVE_FAVORITE, handleRemove);
    };
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };
