import { Meta, Story } from '@storybook/react/types-6-0';

import { RelationsListFilter } from '.';

export default {
  title: 'RelationsListFilter',
  component: RelationsListFilter,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story = args => <RelationsListFilter {...args} />;
