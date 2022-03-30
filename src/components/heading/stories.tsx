import { Meta, Story } from '@storybook/react/types-6-0';

import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Just a text to test',
  },
} as Meta;

export const Basic: Story<HeadingProps> = args => <Heading {...args} />;
