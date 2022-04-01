import { Entities } from 'types';
import { getImageUrl } from 'utils';

const mock = {
  extras: {
    key: 'value',
    other: 'foo',
    bar: 'bla',
    foo: 'here',
  },

  image: getImageUrl(Entities.CHARACTERS, '2'),
};

export { mock };
