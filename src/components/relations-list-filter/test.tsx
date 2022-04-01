import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { events } from 'app';
import { RelationsListFilter } from '.';

describe('<RelationsListFilter />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the entity details styles correct', () => {
    const { container } = renderWithProviders(<RelationsListFilter />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should no render case no has no one option', () => {
    const { container } = renderWithProviders(<RelationsListFilter />);

    expect(container.children.length).toBe(0);
  });

  it('should render option on receive relation set option event', () => {
    renderWithProviders(<RelationsListFilter />);

    const options = ['foo', 'bla'];

    act(() => {
      events.relations['set.options'](options);
    });

    const optionOne = screen.getByText(options[0]);
    const optionTwo = screen.getByText(options[1]);

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
  });

  it('should send relation filter event on click in some option', () => {
    const relationFilterEventSpy = jest.spyOn(events.relations, 'filter');
    renderWithProviders(<RelationsListFilter />);

    const options = ['foo', 'bla'];

    act(() => {
      events.relations['set.options'](options);
    });

    const optionOne = screen.getByText(options[0]);
    const optionTwo = screen.getByText(options[1]);

    act(() => {
      fireEvent.click(optionOne);
    });

    expect(relationFilterEventSpy).toBeCalledTimes(1);
    expect(relationFilterEventSpy).toBeCalledWith(options[0]);

    act(() => {
      fireEvent.click(optionTwo);
    });

    expect(relationFilterEventSpy).toBeCalledTimes(2);
    expect(relationFilterEventSpy).toBeCalledWith(options[1]);
  });

  it('should send empty relation filter event on click in some option already selected', () => {
    const relationFilterEventSpy = jest.spyOn(events.relations, 'filter');
    renderWithProviders(<RelationsListFilter />);

    const options = ['foo'];

    act(() => {
      events.relations['set.options'](options);
    });

    const optionOne = screen.getByText(options[0]);

    act(() => {
      fireEvent.click(optionOne);
    });

    expect(relationFilterEventSpy).toBeCalledTimes(1);
    expect(relationFilterEventSpy).toBeCalledWith(options[0]);

    act(() => {
      fireEvent.click(optionOne);
    });

    expect(relationFilterEventSpy).toBeCalledTimes(2);
    expect(relationFilterEventSpy).toBeCalledWith('');
  });
});
