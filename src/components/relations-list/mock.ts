import { Entities } from 'types';
import { getImageUrl } from 'utils';

const mock = {
  relations: [
    {
      id: '1',
      title: 'C-3PO',
      image: getImageUrl(Entities.CHARACTERS, '2'),
      entity: Entities.CHARACTERS,
    },
    {
      id: '1',
      title: 'Star wars',
      image: getImageUrl(Entities.FILMS, '2'),
      entity: Entities.FILMS,
    },
  ],
};

export { mock };
