import { Meta, Story } from '@storybook/react/types-6-0';

import { Footer } from '.';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as Meta;

export const Basic: Story = args => <Footer {...args} />;
