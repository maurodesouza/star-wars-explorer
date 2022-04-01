import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { EmptyCard } from '.';

const dataMock = {
  id: 'test',
};

describe('<EmptyCard />', () => {
  it('should render the empty card styles correct', () => {
    const { container } = renderWithProviders(<EmptyCard {...dataMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the empty card component correct', () => {
    renderWithProviders(<EmptyCard {...dataMock} />);

    const label = screen.getByText(`${dataMock.id}#`);

    expect(label).toBeInTheDocument();
  });
});
