import { renderWithProviders } from 'utils/test/helpers';
import { Gap } from '.';

describe('components/container', () => {
  describe('<Gap />', () => {
    it('should render the gap styles correct', () => {
      const { container } = renderWithProviders(<Gap />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
