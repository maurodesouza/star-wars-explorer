import { Meta, Story } from '@storybook/react/types-6-0';

import { EntityDetails, EntityDetailsProps } from '.';

export default {
  title: 'EntityDetails',
  component: EntityDetails,
} as Meta<EntityDetailsProps>;

export const Basic: Story<EntityDetailsProps> = args => (
  <EntityDetails {...args} />
);
