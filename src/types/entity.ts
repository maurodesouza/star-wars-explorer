import { Entities } from '.';

export type Entity = {
  id: string;
  title: string;
  entity: Entities;
  image: string;
  extras?: Record<string, string | string[]>;
  relations?: Entity[];
};
