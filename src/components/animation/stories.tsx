import { Meta, Story } from '@storybook/react/types-6-0';

import { Animation, AnimationProps } from '.';

export default {
  title: 'Animation',
  component: Animation,
  args: {
    animation: 'loading',
  },
} as Meta<AnimationProps>;

export const Basic: Story<AnimationProps> = args => (
  <div
    style={{
      marginInline: 'auto',
      width: 'min(400px, 100%)',
      height: 'min(400px, 100%)',
    }}
  >
    <Animation {...args} />
  </div>
);
