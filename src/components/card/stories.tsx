import { Meta, Story } from '@storybook/react/types-6-0';

import { Card, CardProps } from '.';

export default {
  title: 'Card/Item',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    id: {
      control: { disable: true },
    },
    entity: {
      control: { disable: true },
    },
  },

  args: {
    id: '1',
    title: 'C-3PO',
    image:
      'https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/2.jpg',
  },
} as Meta<CardProps>;

export const Basic: Story<CardProps> = args => (
  <div
    style={{
      width: '100%',
      maxWidth: '840px',
      marginInline: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 40,
    }}
  >
    <div style={{ width: '100%', maxWidth: '19rem' }}>
      <Card {...args} />
    </div>

    <div style={{ width: '100%', maxWidth: '19rem' }}>
      <Card {...args} image="" />
    </div>
  </div>
);
