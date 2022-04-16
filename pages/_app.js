import '../styles/globals.css'
import Head from 'next/head';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Diverse Ether Calculator</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
