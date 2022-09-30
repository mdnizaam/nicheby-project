import Head from 'next/head'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Nicheby_white.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
