import { useEffect, useRef, useState, createContext } from 'react';
import axios from 'axios';

import { events } from 'app';
import { Entities, Entity, Events } from 'types';

type Cache<T = any> = {
  [key: string]: T;
};

type MakeSearch = {
  entity: Entities;
  search: string;
};

type FetchDataArgs = CustomEvent<MakeSearch>;

type SearchContextData = {
  data: Entity[];
  isFetching: boolean;
};

type SearchProviderProps = {
  children: React.ReactNode;
};

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider = ({ children }: SearchProviderProps) => {
  const cacheRef = useRef<Cache>({});
  const abortRef = useRef<AbortController>();

  const entityRef = useRef<Entities>(Entities.CHARACTERS);
  const searchRef = useRef('');

  const [data, setData] = useState<Entity[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async (event: FetchDataArgs) => {
    const saveEntity = entityRef.current;
    const saveSearch = searchRef.current;

    const { entity = saveEntity, search = saveSearch } = event.detail;

    entityRef.current = entity;
    searchRef.current = search;

    if (!search) return;

    abortRef.current?.abort();

    const cache = cacheRef.current;
    const key = `${entity}-${search}`;

    const result = cache[key];

    if (result) {
      setData(result);
      return;
    }

    try {
      setIsFetching(true);

      const abortController = new AbortController();

      abortRef.current = abortController;

      const { data } = await axios.get<Entity[]>('/api/data', {
        params: { entity, search },
        signal: abortController.signal,
      });

      cacheRef.current[key] = data;

      setData(data);
    } catch (err) {
      console.error(err);

      const wasCanceled =
        err instanceof Object && err.constructor.name === 'Cancel';

      if (wasCanceled) return;

      const defaultErrorMessage =
        'An error has occurred, try again or come back soon';

      const error = axios.isAxiosError(err)
        ? err.response?.data.error
        : defaultErrorMessage;

      setData([]);
      events.search.error(error);
    } finally {
      setIsFetching(false);

      abortRef.current = undefined;
    }
  };

  const handleFillSearchFields = () => {
    const entity = entityRef.current;
    const search = searchRef.current;

    events.search.fill({ entity, search });
  };

  useEffect(() => {
    events.on(Events.MAKE_SEARCH, fetchData);
    events.on(Events.VISIT_EXPLORER_PAGE, handleFillSearchFields);

    return () => {
      events.off(Events.MAKE_SEARCH, fetchData);
      events.off(Events.VISIT_EXPLORER_PAGE, handleFillSearchFields);
    };
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  return (
    <SearchContext.Provider value={{ data, isFetching }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
