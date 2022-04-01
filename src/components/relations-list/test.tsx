import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { events } from 'app';

import { mock } from './mock';
import { RelationsList } from '.';
import { act } from '@testing-library/react-hooks';

jest.mock('components', () => ({
  __esModule: true,

  RelationsListFilter: function Mock() {
    return <div data-testid="relations list filter" />;
  },

  CardList: function Mock() {
    return <div data-testid="card list" />;
  },
}));

const dataMock = {
  ...mock,
};

describe('<RelationsList />', () => {
  it('should render the empty card styles correct', () => {
    const { container } = renderWithProviders(<RelationsList {...dataMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should send relations set options event on render', () => {
    const senOptionEvent = jest.spyOn(events.relations, 'set.options');

    renderWithProviders(<RelationsList {...dataMock} />);

    const entities = dataMock.relations.map(entity => entity.entity);

    expect(senOptionEvent).toBeCalledTimes(1);
    expect(senOptionEvent).toBeCalledWith(entities);
  });

  it('should filter list when receive relation filter event', () => {
    renderWithProviders(<RelationsList {...dataMock} />);

    let cards = screen.getAllByTestId('card list');

    const entityOne = dataMock.relations[0].entity;
    const entityTwo = dataMock.relations[1].entity;

    let labelOne = screen.queryByText(`${entityOne} (1)`);
    let labelTwo = screen.queryByText(`${entityTwo} (1)`);

    expect(cards.length).toBe(2);

    expect(labelOne).toBeInTheDocument();
    expect(labelTwo).toBeInTheDocument();

    act(() => {
      events.relations.filter(entityOne);
    });

    cards = screen.getAllByTestId('card list');

    labelOne = screen.queryByText(`${entityOne} (1)`);
    labelTwo = screen.queryByText(`${entityTwo} (1)`);

    expect(labelOne).toBeInTheDocument();
    expect(labelTwo).not.toBeInTheDocument();

    expect(cards.length).toBe(1);
  });

  it('should not render if no one realtions', () => {
    const { container } = renderWithProviders(<RelationsList />);

    expect(container.children.length).toBe(0);
  });

  it('should render corret count of finded cards case has empty card in relations', () => {
    const emptyCount = 2;

    const normalItem = dataMock.relations[0];
    const entityOne = normalItem.entity;

    const empties = Array(emptyCount)
      .fill('')
      .map((_, index) => ({
        id: index,
        entity: entityOne,
        empty: true,
      }));

    const relations = [normalItem, ...empties] as any[];

    renderWithProviders(<RelationsList relations={relations} />);

    const total = relations.length;
    const finded = total - emptyCount;

    const label = screen.queryByText(`${entityOne} (${finded}/${total})`);

    expect(label).toBeInTheDocument();
  });
});
