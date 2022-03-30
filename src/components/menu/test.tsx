import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Menu } from '.';

describe('<Menu />', () => {
  it('should render the menu correct', () => {
    renderWithProviders(<Menu />);

    expect(screen.getByRole('img', { name: /star wars/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();

    const exploreLinks = screen.getAllByText(/explore/i);

    expect(exploreLinks).toHaveLength(2);

    exploreLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/');
    });
  });

  it('should open/close full menu', () => {
    renderWithProviders(<Menu />);

    const openMenuElement = screen.getByLabelText(/open menu/i);
    const closeMenuElement = screen.getByLabelText(/close menu/i);

    const fullMenuElement = closeMenuElement.parentElement!.parentElement!;

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(openMenuElement);

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(closeMenuElement);

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should render the menu styles correct', () => {
    const { container } = renderWithProviders(<Menu />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
