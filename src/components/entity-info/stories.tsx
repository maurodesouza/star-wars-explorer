import { Meta, Story } from '@storybook/react/types-6-0';

import { mock as relationsMock } from 'components/relations-list/mock';
import { mock as detaisMock } from 'components/entity-details/mock';

import { EntityInfo, EntityInfoProps } from '.';

export default {
  title: 'Entity/Info',
  component: EntityInfo,

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    id: { control: { disable: true } },
    title: { control: { disable: true } },
    entity: { control: { disable: true } },
  },

  args: {
    ...relationsMock,
    ...detaisMock,
  },
} as Meta<EntityInfoProps>;

export const Basic: Story<EntityInfoProps> = args => (
  <div style={{ width: '100%', maxWidth: '840px', marginInline: 'auto' }}>
    <EntityInfo {...args} />
  </div>
);
