import { Meta, Story } from '@storybook/react/types-6-0';

import { Menu } from '.';

export default {
  title: 'Layout/Menu',
  component: Menu,

  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story = args => <Menu {...args} />;
