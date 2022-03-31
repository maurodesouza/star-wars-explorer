import { useContext } from 'react';
import { FavoritesContext } from 'context';

const useFavorites = () => useContext(FavoritesContext);

export { useFavorites };
