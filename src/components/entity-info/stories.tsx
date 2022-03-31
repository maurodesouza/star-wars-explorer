import { Meta, Story } from '@storybook/react/types-6-0';

import { EntityInfo, EntityInfoProps } from '.';

export default {
  title: 'EntityInfo',
  component: EntityInfo,
} as Meta<EntityInfoProps>;

export const Basic: Story<EntityInfoProps> = args => <EntityInfo {...args} />;
