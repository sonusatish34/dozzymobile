import Head from "next/head";
import dynamic from 'next/dynamic';
const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
const FarmStarts = dynamic(() => import('./components/FarmStarts/FarmStarts'));
const FarmProductLPage = dynamic(() => import('./components/FarmProductLPage/FarmProductLPage'));
const CareGuests = dynamic(() => import('./components/CareGuests/CareGuests'));

export default function Home({ canonicalUrl, approvedProperties }) {
  return (
    <div className="text-black font-poppins">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Private Farmhouse for Rent in Hyderabad</title>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="farmhouses in Hyderabad, cheapest farmhouse rentals, farmhouses near me, farmhouse rentals, top farmhouses in Hyderabad, private farmhouses for rent, rent a farmhouse, farmhouses for celebrations" />
        <meta name="description" content="Top Rated Farmhouses in Hyderabad for Weddings, Haldhi, Mehndi, Parties and More. Enjoy Scenic Venues with Beautiful Setups for your Special Celebrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Private Farmhouse for Rent in Hyderabad" />
        <meta name="og:description" content="Top Rated Farmhouses in Hyderabad for Weddings, Haldhi, Mehndi, Parties and More. Enjoy Scenic Venues with Beautiful Setups for your Special Celebrations." />
        <link rel="canonical" href={canonicalUrl} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-04YJBDK2VX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                         window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                         gtag('config', 'G-04YJBDK2VX');
                        `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16698821101"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16698821101');
                      `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16698821101"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16698821101');
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
                w[l]=w[l]||[]; 
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NFJZZ34X');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config', 'AW-16797121033/PPdfCKqh7_AZEIn0vsk-', {
                         'phone_conversion_number': '9111-9111-62'
                         });`,
          }}
        />
        <script
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
      </Head>
      <HomeBanner />
      <FarmProductLPage FHList={approvedProperties?.data.results} />
      <FarmStarts />
      <CareGuests />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.dozzy.in'
    : 'https://www.dozzy.com';
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    // Fetching the approved properties data
    const response = await fetch("https://api.dozzy.com/customer/approved_properties?lat=0.0&long=0.0&program_id=1&property_capacity=1000", requestOptions);
    const result = await response.json();

    // Return both data objects as props
    return {
      props: {
        approvedProperties: result,
        canonicalUrl: canonicalUrl
      }
    };
  } catch (error) {
    console.error(error);
    // Handle the error if the fetches fail, return an empty array or appropriate fallback
    return {
      props: {
        approvedProperties: null,
      }
    };
  }
}
