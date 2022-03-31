import { Meta, Story } from '@storybook/react/types-6-0';

import EntityInfo from '.';

export default {
  title: 'EntityInfo',
  component: EntityInfo,
} as Meta;

export const Basic: Story = args => <EntityInfo {...args} />;
