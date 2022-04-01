import { act, fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/test/helpers';

import { events } from 'app';
import { Entities } from 'types';

import { Select } from '.';

jest.useFakeTimers();

describe('<Select />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should render the select styles correct', () => {
    const { container } = renderWithProviders(<Select />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should open dropdown select on input click and hide on blur', () => {
    const { container } = renderWithProviders(<Select />);

    const input = screen.getByLabelText(/open drop down select/i);

    const dropdown = container.children[0].children[2];

    expect(dropdown.getAttribute('aria-hidden')).toBe('true');

    act(() => {
      fireEvent.click(input);
    });

    expect(dropdown.getAttribute('aria-hidden')).toBe('false');

    act(() => {
      fireEvent.blur(input);
    });

    expect(dropdown.getAttribute('aria-hidden')).toBe('true');
  });

  it('should close dropdown after select some option', () => {
    const { container } = renderWithProviders(<Select />);

    const input = screen.getByLabelText(/open drop down select/i);

    const dropdown = container.children[0].children[2];

    act(() => {
      fireEvent.click(input);
    });

    act(() => {
      fireEvent.click(dropdown.children[0]);
    });

    expect(dropdown.getAttribute('aria-hidden')).toBe('true');
  });

  it('should send search make event on select some option', async () => {
    const searchMakeSpy = jest.spyOn(events.search, 'make');
    renderWithProviders(<Select />);

    const input = screen.getByLabelText(/open drop down select/i);

    act(() => {
      fireEvent.click(input);
    });

    const option = screen.getByText(Entities.PLANETS);

    act(() => {
      fireEvent.click(option);
    });

    expect(searchMakeSpy).toBeCalledTimes(1);
    expect(searchMakeSpy).toBeCalledWith({ entity: Entities.PLANETS });
  });
});
