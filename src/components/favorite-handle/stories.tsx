import { Meta, Story } from '@storybook/react/types-6-0';

import FavoriteHandle from '.';

export default {
  title: 'FavoriteHandle',
  component: FavoriteHandle,
} as Meta;

export const Basic: Story = args => <FavoriteHandle {...args} />;
