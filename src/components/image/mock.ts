import { Entities } from 'types';
import { getImageUrl } from 'utils';

const mock = {
  image: getImageUrl(Entities.CHARACTERS, '2'),
  alt: 'any text',
};

export { mock };
