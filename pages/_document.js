import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name='application-name' content='Diverse EthCalculator' />
        <meta name='description' content='Diverse Eth Calculator' />

        {/* <meta name='apple-mobile-web-app-capable' content='yes' /> */}
        {/* <meta name='apple-mobile-web-app-status-bar-style' content='default' /> */}
        {/* <meta name='apple-mobile-web-app-title' content='Diverse EthCalculator' /> */}

        {/* <meta name='format-detection' content='telephone=no' /> */}
        {/* <meta name='mobile-web-app-capable' content='yes' /> */}
        {/* <meta name='msapplication-config' content='/icons/browserconfig.xml' /> */}
        {/* <meta name='msapplication-TileColor' content='#2B5797' /> */}
        {/* <meta name='msapplication-tap-highlight' content='no' /> */}
        {/* <meta name='theme-color' content='#000000' /> */}

        {/* <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' /> */}
        {/* <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' /> */}
        {/* <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' /> */}
        {/* <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' /> */}

        {/* <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' /> */}
        {/* <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' /> */}
        {/* <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' /> */}
        {/* <link rel='shortcut icon' href='/favicon.ico' /> */}

        <link rel='manifest' href='/manifest.json' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://ethcalculator.dsolutions.mn/' />
        <meta name='twitter:title' content='Diverse' />
        <meta name='twitter:description' content='Diverse Eth Calculator' />
        <meta name='twitter:image' content='https://ethcalculator.dsolutions.mn/android/android-launchericon-192-192.png' />
        <meta name='twitter:creator' content='@0xMnkhod' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Diverse EthCalc' />
        <meta property='og:description' content='Diverse Eth Calculator' />
        <meta property='og:site_name' content='Diverse EthCalc' />
        <meta property='og:url' content='https://ethcalculator.dsolutions.mn/' />
        <meta property='og:image' content='https://ethcalculator.dsolutions.mn/icons/apple-touch-icon.png' />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
