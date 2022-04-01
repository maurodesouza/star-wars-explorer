import { Meta, Story } from '@storybook/react/types-6-0';

import { mock } from './mock';
import { RelationsList, RelationsListProps } from '.';

export default {
  title: 'Entity/Relations list',
  component: RelationsList,

  argTypes: {
    relations: { control: { disable: true } },
  },

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    filter: true,
    relations: mock.relations,
  },
} as Meta<RelationsListProps>;

export const Basic: Story<RelationsListProps> = args => (
  <div style={{ width: '100%', maxWidth: '840px', marginInline: 'auto' }}>
    <RelationsList {...args} />
  </div>
);
