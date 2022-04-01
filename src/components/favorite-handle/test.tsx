import { createEvent, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Entities } from 'types';
import { getImageUrl } from 'utils';

import { FavoriteHandle, FavoriteHandleProps } from '.';
import { events } from 'app';

const addFavotireEvent = jest.spyOn(events.favorites, 'add');

const removeFavoriteEvent = jest.spyOn(events.favorites, 'remove');

const dataMock: FavoriteHandleProps = {
  id: '2',
  entity: Entities.CHARACTERS,
  image: getImageUrl(Entities.CHARACTERS, '2'),
  title: 'text',
};

describe('<FavoriteHandle />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the favorites handle styles correct', () => {
    const { container } = renderWithProviders(<FavoriteHandle {...dataMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the favorites handle component correct', () => {
    renderWithProviders(<FavoriteHandle {...dataMock} />);

    const addToFavoriteBtn = screen.getByLabelText(/add to favorites/i);

    expect(addToFavoriteBtn).toBeInTheDocument();
  });

  it('should alter icon between add/remove favorite', () => {
    renderWithProviders(<FavoriteHandle {...dataMock} />);

    let addToFavoriteBtn = screen.getByLabelText(/add to favorites/i);

    expect(addToFavoriteBtn).toBeInTheDocument();
    fireEvent.click(addToFavoriteBtn);

    const removeFromFavoriteBtn = screen.getByLabelText(/remove to favorites/i);

    expect(removeFromFavoriteBtn).toBeInTheDocument();
    expect(addToFavoriteBtn).not.toBeInTheDocument();

    fireEvent.click(removeFromFavoriteBtn);

    addToFavoriteBtn = screen.getByLabelText(/add to favorites/i);

    expect(removeFromFavoriteBtn).not.toBeInTheDocument();
    expect(addToFavoriteBtn).toBeInTheDocument();
  });

  it('should call favotires events handle on add/remove favorite', () => {
    renderWithProviders(<FavoriteHandle {...dataMock} />);

    const addToFavoriteBtn = screen.getByLabelText(/add to favorites/i);

    fireEvent.click(addToFavoriteBtn);

    expect(addFavotireEvent).toBeCalledTimes(1);
    expect(addFavotireEvent).toBeCalledWith(dataMock);

    const removeFromFavoriteBtn = screen.getByLabelText(/remove to favorites/i);

    fireEvent.click(removeFromFavoriteBtn);

    expect(removeFavoriteEvent).toBeCalledTimes(1);
    expect(removeFavoriteEvent).toBeCalledWith(dataMock.id);
  });

  it('should stop propagation on mouse up event', () => {
    renderWithProviders(<FavoriteHandle {...dataMock} />);

    const addToFavoriteBtn = screen.getByLabelText(/add to favorites/i);

    const event = createEvent.mouseUp(addToFavoriteBtn);

    event.stopPropagation = jest.fn();

    fireEvent(addToFavoriteBtn, event);
    expect(event.stopPropagation).toBeCalled();
  });
});
