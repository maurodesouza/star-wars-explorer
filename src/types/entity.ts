import { Entities } from '.';

export type Entity = {
  id: string;
  title: string;
  entity: Entities;
  image: string;
  relations?: Entity[];
};
