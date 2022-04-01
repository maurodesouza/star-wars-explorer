import { Meta, Story } from '@storybook/react/types-6-0';

import { events } from 'app';
import { Entities } from 'types';

import { RelationsListFilter } from '.';

type StoryRelationsListFilter = {
  options: Entities[];
};

export default {
  title: 'Inputs/Relations filter',
  component: RelationsListFilter,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    options: {
      options: Entities,
      control: {
        type: 'inline-check',
      },
    },
  },

  args: {
    options: [],
  },
} as Meta<StoryRelationsListFilter>;

export const Basic: Story<StoryRelationsListFilter> = args => {
  console.log(args.options);

  events.relations['set.options'](args.options);

  return <RelationsListFilter />;
};
