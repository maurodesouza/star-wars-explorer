import './next-image.mock'

import { ThemeProvider } from 'styled-components';
import { RouterContext } from "next/dist/shared/lib/router-context";
import { GlobalStyles, theme } from 'styles';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
