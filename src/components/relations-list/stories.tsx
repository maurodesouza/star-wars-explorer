import { Meta, Story } from '@storybook/react/types-6-0';

import RelationsList from '.';

export default {
  title: 'RelationsList',
  component: RelationsList,
} as Meta;

export const Basic: Story = args => <RelationsList {...args} />;
