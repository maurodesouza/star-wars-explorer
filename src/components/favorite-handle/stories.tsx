import { Meta, Story } from '@storybook/react/types-6-0';

import { FavoriteHandle, FavoriteHandleProps } from '.';

export default {
  title: 'Entity/Favorite button',
  component: FavoriteHandle,

  argTypes: {
    id: { control: { disable: true } },
    title: { control: { disable: true } },
    entity: { control: { disable: true } },
    image: { control: { disable: true } },
    extras: { table: { disable: true } },
    relations: { table: { disable: true } },
  },
} as Meta<FavoriteHandleProps>;

export const Basic: Story<FavoriteHandleProps> = args => (
  <FavoriteHandle {...args} />
);
