import { Meta, Story } from '@storybook/react/types-6-0';

import { mock } from './mock';

import { Image, ImageProps } from '.';

export default {
  title: 'Image',
  component: Image,
  args: mock,
} as Meta<ImageProps>;

export const Basic: Story<ImageProps> = args => (
  <div
    style={{
      width: '100%',
      maxWidth: '840px',
      marginInline: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 40,
    }}
  >
    <div style={{ width: 200, height: 300, position: 'relative' }}>
      <Image {...args} alt={args.alt} />
    </div>

    <div
      style={{
        width: 200,
        height: 300,
        position: 'relative',
        background: 'white',
      }}
    >
      <Image image="" alt={args.alt} />
    </div>
  </div>
);
