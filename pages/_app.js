import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Head>
        <title>Galaxis</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp