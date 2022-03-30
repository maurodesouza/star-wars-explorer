import { Meta, Story } from '@storybook/react/types-6-0';
import { events } from 'app';

import { Search, SearchProps } from '.';

type StorySearchProps = SearchProps & {
  error: string;
};

export default {
  title: 'Inputs/Search',
  component: Search,
  args: {
    label: 'Explore by',
    placeholder: 'Ex: Luke',
    error: '',
  },
} as Meta<StorySearchProps>;

export const Basic: Story<StorySearchProps> = ({ error, ...rest }) => {
  events.search.error(error);

  return <Search {...rest} />;
};
