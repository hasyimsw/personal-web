import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />  
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
