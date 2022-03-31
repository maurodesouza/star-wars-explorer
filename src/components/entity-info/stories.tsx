import { Meta, Story } from '@storybook/react/types-6-0';

import EntityDetails from '.';

export default {
  title: 'EntityDetails',
  component: EntityDetails,
} as Meta;

export const Basic: Story = args => <EntityDetails {...args} />;
