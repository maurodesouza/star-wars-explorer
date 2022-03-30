import './next-image.mock'

import { ThemeProvider } from 'styled-components';
import { RouterContext } from "next/dist/shared/lib/router-context";

import { GlobalStyles, theme } from 'styles';
import { Gap } from 'components';

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
        <div style={{ height: '100%', paddingBlock: theme.grid.gutter }}>
          <Gap>
            <Story />
          </Gap>
        </div>
      <GlobalStyles />
    </ThemeProvider>
  ),
];
