/* eslint-disable @typescript-eslint/no-var-requires */

import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Entities } from 'types';
import { slugfy } from 'utils';

import { Card } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
}));

const mockData = {
  id: '1',
  title: 'C-3PO',
  image:
    'https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/2.jpg',
};

describe('<Card />', () => {
  it('should render the card correct', () => {
    renderWithProviders(<Card {...mockData} />);

    expect(
      screen.getByRole('img', { name: mockData.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: mockData.title })
    ).toBeInTheDocument();
  });

  it("should render the no image found element when can't load image url", async () => {
    renderWithProviders(<Card {...mockData} />);

    const image = screen.getByRole('img', { name: mockData.title });

    act(() => {
      fireEvent.error(image);
    });

    const noImageFoundElement = screen.getByText(/no found/i);

    expect(noImageFoundElement).toBeInTheDocument();
  });

  it('should render the card styles correct', () => {
    const { container } = renderWithProviders(<Card {...mockData} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should navigate to entity page', () => {
    const { container } = renderWithProviders(<Card {...mockData} />);

    fireEvent.click(container.firstChild!);

    expect(push).toBeCalledTimes(1);
    expect(push).toBeCalledWith(
      `/universe/${Entities.CHARACTERS}/${slugfy(mockData.title)}`
    );
  });
});
