import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import EntityDetails from '.';

describe('<EntityDetails />', () => {
  it('should render the heading', () => {
    renderWithProviders(<EntityDetails />);

    expect(screen.getByRole('heading', { name: /EntityDetails/i })).toBeInTheDocument();
  });
});
