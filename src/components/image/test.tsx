import { fireEvent, screen, act } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { mock } from './mock';
import { Image } from '.';

describe('<Image />', () => {
  it('should render the image styles correct', () => {
    const { container } = renderWithProviders(
      <Image {...mock} alt={mock.alt} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the image component correct', () => {
    renderWithProviders(<Image {...mock} alt={mock.alt} />);

    const image = screen.getByRole('img', { name: mock.alt });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mock.image);
  });

  it("should render the no image found element when can't load image url", async () => {
    renderWithProviders(<Image {...mock} alt={mock.alt} />);

    const image = screen.getByRole('img', { name: mock.alt });

    act(() => {
      fireEvent.error(image);
    });

    const noImageFoundElement = screen.getByText(/no found/i);

    expect(noImageFoundElement).toBeInTheDocument();
  });
});
