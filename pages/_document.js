import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/  -touch-icon.png" />
        <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="keyphrases" content="Affordable farmhouse rentals with swimming pools and gardens,Luxury and budget-friendly farmhouse stays for a relaxing escape,Private farmhouses for rent with scenic views and modern amenities,Top-rated farmhouses in Hyderabad for luxury stays" />
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

      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                _linkedin_partner_id = "8006865";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);})(window.lintrk);
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8006865&fmt=gif"
          />
        </noscript>
      </body>
    </Html>
  );
}
