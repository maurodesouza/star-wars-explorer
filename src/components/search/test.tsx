import { act, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { events } from 'app';
import { Search, SearchProps } from '.';

jest.useFakeTimers();

jest.mock('./select', () => ({
  __esModule: true,
  Select: function Mock() {
    return <div data-testid="search select" />;
  },
}));

const searchProps: Required<SearchProps> = {
  label: 'label',
  placeholder: 'placeholder',
};

describe('<Search />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should render the search correct', () => {
    renderWithProviders(<Search {...searchProps} />);

    const input = screen.getByPlaceholderText(searchProps.placeholder);
    const label = screen.getByLabelText(searchProps.label);
    const select = screen.getByTestId(/search select/i);

    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('should render the search styles correct', () => {
    const { container } = renderWithProviders(<Search />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render error', () => {
    const errorText = 'some error';

    renderWithProviders(<Search />);

    act(() => {
      events.search.error(errorText);
    });

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('should send search event with corret values after type', async () => {
    const searchMakeEventFn = jest.spyOn(events.search, 'make');
    const text = 'some value';

    searchMakeEventFn.mockImplementation(() => null);

    renderWithProviders(<Search {...searchProps} />);

    const input = screen.getByPlaceholderText(
      searchProps.placeholder
    ) as HTMLInputElement;

    input.value = text;

    act(() => {
      fireEvent.input(input);
    });

    jest.runAllTimers();

    expect(searchMakeEventFn).toBeCalledWith({ search: text });
    expect(searchMakeEventFn).toBeCalledTimes(1);
  });

  it('should send search event with corret values after submit form with Enter', async () => {
    const searchMakeEventFn = jest.spyOn(events.search, 'make');

    renderWithProviders(<Search {...searchProps} />);

    const form = screen.getByRole('form');

    act(() => {
      fireEvent.submit(form);
    });

    expect(searchMakeEventFn).toBeCalledWith({ search: '' });
    expect(searchMakeEventFn).toBeCalledTimes(1);
  });
});
