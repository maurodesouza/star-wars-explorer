import '../.jest/next-image.mock'

import { ThemeProvider } from 'styled-components';
import { RouterContext } from "next/dist/shared/lib/router-context";

import { Gap } from 'components';
import { Provider } from 'context';

import { GlobalStyles, theme } from 'styles';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },

  layout: 'centered',

  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: theme.colors.bg
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Provider>
        <div style={{ height: '100%', paddingBlock: theme.grid.gutter }}>
          <Gap>
            <Story />
          </Gap>
        </div>
      </Provider>

      <GlobalStyles />
    </ThemeProvider>
  ),
];
