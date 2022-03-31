export type Partials<T, K extends keyof T = never> = Omit<T, K> &
  Partial<Pick<T, K>>;
