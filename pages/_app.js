import "@/styles/globals.css";
import Head from "next/head";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from './components/Layout/Layout';
import PageLoader from "./components/PageLoader";
import BackToTop from "./components/BackToTop";
import Script from 'next/script';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Only the weights you need
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Dozzy App - Private Luxury Farmhouse Rental",
              "description": "Top Rated Farmhouses in Hyderabad for Weddings, Haldhi, Mehndi, Parties and More. Enjoy Scenic Venues with Beautiful Setups for your Special Celebrations.",
              "url": "https://www.dozzy.com/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "bestRating": "5",
                "ratingValue": "4.8",
                "ratingCount": "465"
              }
            }),
          }}
        />
        <meta name="google-site-verification" content="7lpApp275PFg7S1vZxuxGDs3MLGucSpRlRpULCyYLbQ" />
      </Head>

      {/* Google Analytics and Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-04YJBDK2VX"
        async
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-04YJBDK2VX');
            gtag('config', 'AW-16698821101');
          `,
        }}
      />

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-NFJZZ34X"
        async
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16698821101/AchICOTCyOsZEO2Tz5o-',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
              });
              return false;
            }
          `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '951887287035030');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=951887287035030&ev=PageView&noscript=1"
        />
      </noscript>

      {loading && <PageLoader />}
      {/* <Component {...pageProps} /> */}
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
      <BackToTop />
    </Layout>
  );
}

export default MyApp;
