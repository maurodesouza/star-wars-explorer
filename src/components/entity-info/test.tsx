import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Entities } from 'types';
import { getImageUrl } from 'utils';

import { EntityInfo } from '.';

jest.mock('components', () => ({
  __esModule: true,
  EntityDetails: function Mock() {
    return <div data-testid="entity details" />;
  },

  RelationsList: function Mock() {
    return <div data-testid="relations list" />;
  },
}));

const dataMock = {
  id: '2',
  entity: Entities.CHARACTERS,
  image: getImageUrl(Entities.CHARACTERS, '2'),
  title: 'text',
};

describe('<EntityInfo />', () => {
  it('should render the entity info styles correct', () => {
    const { container } = renderWithProviders(<EntityInfo {...dataMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the entity info component correct', () => {
    renderWithProviders(<EntityInfo {...dataMock} />);

    const heading = screen.getByRole('heading', { name: /associated/i });
    const entityDetails = screen.getByTestId('entity details');
    const relationsList = screen.getByTestId('relations list');

    expect(heading).toBeInTheDocument();
    expect(entityDetails).toBeInTheDocument();
    expect(relationsList).toBeInTheDocument();
  });
});
