import { Entities } from 'types';
import { envs } from './envs';

const config = {
  envs,

  entities: {
    [Entities.CHARACTERS]: {
      count: 82,
    },

    [Entities.FILMS]: {
      count: 6,
    },

    [Entities.PLANETS]: {
      count: 82,
    },

    [Entities.SPECIES]: {
      count: 37,
    },

    [Entities.STARSHIPS]: {
      count: 36,
    },

    [Entities.VEHICLES]: {
      count: 60,
    },
  },
};

export { config };
