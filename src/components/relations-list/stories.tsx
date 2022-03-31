import { Meta, Story } from '@storybook/react/types-6-0';

import { RelationsList, RelationsListProps } from '.';

export default {
  title: 'RelationsList',
  component: RelationsList,
} as Meta<RelationsListProps>;

export const Basic: Story<RelationsListProps> = args => (
  <RelationsList {...args} />
);
