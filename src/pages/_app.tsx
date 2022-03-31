import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'context';

import { GlobalStyles, theme } from 'styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Start Wars Explorer</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Explore the Star Wars Universe with this awesome app"
        />
      </Head>
      <GlobalStyles />

      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
