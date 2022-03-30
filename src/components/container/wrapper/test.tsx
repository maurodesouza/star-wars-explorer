import { renderWithProviders } from 'utils/test/helpers';
import { Wrapper } from '.';

describe('components/container', () => {
  describe('<Wrapper />', () => {
    it('should render the wrapper styles correct', () => {
      const { container } = renderWithProviders(<Wrapper />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
