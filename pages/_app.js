// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
       <Head>
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Other global head elements */}
=======
        {/* <link rel="icon" href="/sdcnew.png" /> */}
        {/* <link rel="canonical" href="https://selfdrivecarshyderabad.com/"/> */}
>>>>>>> parent of b8cc898 (added images and farmproduct page)
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
