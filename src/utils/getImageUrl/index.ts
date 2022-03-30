import { Entities } from 'types';

const baseUrl =
  'https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img';

const getImageUrl = (entity: Entities, id: string) => {
  return `${baseUrl}/${entity}/${id}.jpg`;
};

export { getImageUrl };
