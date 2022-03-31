import { Meta, Story } from '@storybook/react/types-6-0';

import { Entities } from 'types';
import { createArray } from 'utils';

import { CardList, CardListProps } from '.';

type CardListStoryProps = CardListProps & {
  renderCards: number;
};

const props = {
  id: '1',
  title: 'C-3PO',
  image:
    'https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/2.jpg',
  entity: Entities.CHARACTERS,
};

export default {
  title: 'Card/List',
  component: CardList,

  argTypes: {
    items: { table: { disable: true } },
  },

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    renderCards: 4,
  },
} as Meta<CardListStoryProps>;

export const Basic: Story<CardListStoryProps> = args => {
  const { renderCards, ...rest } = args;

  const items = createArray(renderCards).map((_, index) => ({
    ...props,
    id: String(index),
  }));

  return (
    <div style={{ width: '100%', maxWidth: '840px', marginInline: 'auto' }}>
      <CardList items={items} {...rest} />
    </div>
  );
};
