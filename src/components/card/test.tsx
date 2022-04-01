/* eslint-disable @typescript-eslint/no-var-requires */

import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { toast } from 'react-toastify';

import { Entities } from 'types';
import { getImageUrl, slugfy } from 'utils';

import { Card } from '.';
import { events } from 'app';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock() {
    return <div />;
  },
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  prefetch: () => ({ catch: () => true }),
}));

const mockData = {
  id: '1',
  title: 'C-3PO',
  image: getImageUrl(Entities.CHARACTERS, '2'),
};

describe('<Card />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should render the card correct', () => {
    renderWithProviders(<Card {...mockData} />);

    expect(
      screen.getByRole('img', { name: mockData.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: mockData.title })
    ).toBeInTheDocument();
  });

  it('should render the card styles correct', () => {
    const { container } = renderWithProviders(<Card {...mockData} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should navigate to entity page on click', async () => {
    const { container } = renderWithProviders(<Card {...mockData} />);

    act(() => {
      fireEvent.mouseUp(container.firstChild!);
    });

    expect(push).toBeCalledTimes(1);
    expect(push).toBeCalledWith(
      `/universe/${Entities.CHARACTERS}/${slugfy(mockData.title)}`
    );
  });

  it('should navigate to entity page on dubble touch', async () => {
    const { container } = renderWithProviders(<Card {...mockData} />);

    act(() => {
      fireEvent.touchEnd(container.firstChild!);
    });

    expect(push).toBeCalledTimes(0);

    act(() => {
      fireEvent.touchEnd(container.firstChild!);
    });

    expect(push).toBeCalledWith(
      `/universe/${Entities.CHARACTERS}/${slugfy(mockData.title)}`
    );
  });

  it('should remove focus when touch outside card', async () => {
    const eventOffSpy = jest.spyOn(events, 'off');
    const { container } = renderWithProviders(
      <>
        <Card {...mockData} />
        <div></div>
      </>
    );

    const card = container.children[0];
    const div = container.children[1];

    act(() => {
      fireEvent.touchEnd(card);
    });

    expect(push).toBeCalledTimes(0);

    act(() => {
      fireEvent.touchEnd(div);
    });

    expect(eventOffSpy).toBeCalledWith('touchend', expect.any(Function));

    act(() => {
      fireEvent.touchEnd(card);
    });

    expect(push).toBeCalledTimes(0);
  });

  it('should call toast after 2s after doing navigation', async () => {
    const toastLoadingSpy = jest.spyOn(toast, 'loading');
    const { container } = renderWithProviders(<Card {...mockData} />);

    toastLoadingSpy.mockImplementation(() => '');

    act(() => {
      fireEvent.mouseUp(container.firstChild!);
    });

    expect(push).toBeCalledTimes(1);

    expect(toastLoadingSpy).toBeCalledTimes(0);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    jest.runOnlyPendingTimers();

    expect(toastLoadingSpy).toBeCalledTimes(1);
    expect(toastLoadingSpy).toBeCalledWith(
      'We are setting up the page for you, wait!'
    );
  });
});
