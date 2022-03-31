import { Meta, Story } from '@storybook/react/types-6-0';

import { FavoriteHandle, FavoriteHandleProps } from '.';

export default {
  title: 'FavoriteHandle',
  component: FavoriteHandle,
} as Meta<FavoriteHandleProps>;

export const Basic: Story<FavoriteHandleProps> = args => (
  <FavoriteHandle {...args} />
);
