import { Meta, Story } from '@storybook/react/types-6-0';

import EmptyCard from '.';

export default {
  title: 'Card/Empty',
  component: EmptyCard,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ width: '100%', maxWidth: '19rem' }}>
    <EmptyCard {...args} />
  </div>
);
