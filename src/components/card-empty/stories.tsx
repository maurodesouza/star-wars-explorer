import { Meta, Story } from '@storybook/react/types-6-0';

import { EmptyCard, EmptyCardProps } from '.';

export default {
  title: 'Card/Empty',
  component: EmptyCard,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<EmptyCardProps>;

export const Basic: Story<EmptyCardProps> = args => (
  <div style={{ width: '100%', maxWidth: '19rem' }}>
    <EmptyCard {...args} />
  </div>
);
