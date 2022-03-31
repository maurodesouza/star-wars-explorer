import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import EntityInfo from '.';

describe('<EntityInfo />', () => {
  it('should render the heading', () => {
    renderWithProviders(<EntityInfo />);

    expect(screen.getByRole('heading', { name: /EntityInfo/i })).toBeInTheDocument();
  });
});
