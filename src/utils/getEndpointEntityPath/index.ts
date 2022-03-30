import { Entities } from 'types';

const getEndpointEntityPath = (entity: Entities) => {
  if (entity === Entities.CHARACTERS) return 'people';

  return entity;
};

export { getEndpointEntityPath };
