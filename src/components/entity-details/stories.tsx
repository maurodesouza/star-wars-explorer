import { Meta, Story } from '@storybook/react/types-6-0';

import { mock } from './mock';
import { EntityDetails, EntityDetailsProps } from '.';

export default {
  title: 'Entity/Details',
  component: EntityDetails,

  argTypes: {
    id: { control: { disable: true } },
    title: { control: { disable: true } },
    entity: { control: { disable: true } },
    relations: { table: { disable: true } },
  },

  args: mock,
} as Meta<EntityDetailsProps>;

export const Basic: Story<EntityDetailsProps> = args => (
  <EntityDetails {...args} />
);
