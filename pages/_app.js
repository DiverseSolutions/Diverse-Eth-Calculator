import '../styles/globals.css'
import Head from 'next/head';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Diverse Ether Calculator</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
