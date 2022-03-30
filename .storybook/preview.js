import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme/default';


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
