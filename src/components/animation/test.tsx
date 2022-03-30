import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Animation, AnimationProps } from '.';

jest.mock('react-lottie', () => ({
  __esModule: true,
  default: function Mock() {
    return <svg data-testid="lottie" />;
  },
}));

const dataMock: AnimationProps = {
  animation: 'loading',
  label: 'foo',
};

describe('<Animation />', () => {
  it('should render the animation styles correct', () => {
    const { container } = renderWithProviders(<Animation {...dataMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the animation component correct', () => {
    renderWithProviders(<Animation {...dataMock} />);

    const label = screen.getByText(dataMock.label!);
    const lottie = screen.getByTestId('lottie');

    expect(label).toBeInTheDocument();
    expect(lottie).toBeInTheDocument();
  });
});
