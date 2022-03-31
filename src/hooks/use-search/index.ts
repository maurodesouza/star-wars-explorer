import { useContext } from 'react';
import { SearchContext } from 'context';

const useSearch = () => useContext(SearchContext);

export { useSearch };
