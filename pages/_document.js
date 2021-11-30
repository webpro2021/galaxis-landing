import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import theme from '../lib/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/logo.ico" />
          <link rel="canonical" href="https://galaxis.co"/>
          {/* <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Delivering the future of e-commerce within one content network. Win-win-win for creators, companies and fans" />
          <meta name="og:title" property="og:title" content="Galaxis is a content platform" key="ogtitle"/>
          <meta name="og:description" property="og:description" content="Delivering the future of e-commerce within one content network. Win-win-win for creators, companies and fans"  key="ogdesc"/>
          <meta property="og:image" content="https://galaxis.co/images/metagx.png" key="ogimage"/>
          <meta property='og:url' content='https://galaxis.co/' key="ogurl"/>
          <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
