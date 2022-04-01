import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import { Provider } from 'context';
import { theme } from 'styles';

export const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
