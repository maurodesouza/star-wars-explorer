import { Entities } from 'types';

const getEntityDataFromUrl = (url: string) => {
  const formatedUrl = url.replace(/\/$/, '');
  const {
    length,
    [length - 1]: id,
    [length - 2]: entity,
  } = formatedUrl.split('/');

  const correctEntity = (
    entity === 'people' ? Entities.CHARACTERS : entity
  ) as Entities;

  return { id, entity: correctEntity };
};

export { getEntityDataFromUrl };
