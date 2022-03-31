import { useEffect } from 'react';

import { events } from 'app';
import { usePersistedState } from 'hooks';

import { Entity, Events } from 'types';

const useFavorites = () => {
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

  return { favorites };
};

export { useFavorites };
