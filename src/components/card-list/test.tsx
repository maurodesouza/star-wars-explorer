import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Entities } from 'types';
import { createArray } from 'utils';

import { CardList } from '.';

jest.mock('components', () => ({
  __esModule: true,
  Card: function Mock() {
    return <div data-testid="card" />;
  },
}));

const itemMock = {
  id: '1',
  title: 'C-3PO',
  image: 'image',
  entity: Entities.CHARACTERS,
};

describe('<CardList />', () => {
  describe('styles', () => {
    beforeAll(() => {
      jest.resetAllMocks();
    });

    it('should render the card list styles correct', () => {
      const { container } = renderWithProviders(<CardList />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render the items card correct', () => {
    const counts = [4, 8];

    counts.forEach(count => {
      const items = createArray(count).map((_, index) => ({
        ...itemMock,
        id: String(index),
      }));

      const render = renderWithProviders(<CardList items={items} />);
      const findedItems = render.getAllByTestId(/card/i);

      expect(findedItems.length).toBe(count);

      cleanup();
    });
  });

  it('should render the fills correct', () => {
    const minCountToFill = 4;
    const counts = [1, 3, 4, 6];

    counts.forEach(count => {
      const result = count - minCountToFill;
      const lackForFill = result <= 0 ? Math.abs(result) : 0;

      const items = createArray(count).map((_, index) => ({
        ...itemMock,
        id: String(index),
      }));

      const { container } = renderWithProviders(<CardList items={items} />);
      const findedItems = container.firstElementChild!.querySelectorAll(
        'div:not([data-testId]'
      );

      expect(findedItems.length).toBe(lackForFill);
      cleanup();
    });
  });
});
