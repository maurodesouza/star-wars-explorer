import { renderWithProviders } from 'utils/test/helpers';
import { Background } from '.';

describe('components/container', () => {
  describe('<Background />', () => {
    it('should render the background styles correct', () => {
      const { container } = renderWithProviders(<Background />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
