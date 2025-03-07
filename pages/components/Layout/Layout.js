import React from 'react';
import { useRouter } from 'next/router';
import Header from '../Header/Header'; // Adjust path if needed
import Footer from '../Footer/Footer'; // Adjust path if needed
import Script from 'next/script';
const Layout = ({ children }) => {
    const router = useRouter();

    // Define routes to exclude the layout
    const excludedRoutes = ['/blog'];

    // Check if the current route is excluded
    if (router.pathname.startsWith('/blog')) {
        return <>{children}</>;
    }

    return (
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NFJZZ34X"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow bg-white">{children}</main>
                <Footer />
            </div>
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(l) {
              if (!l) { 
                window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) }; 
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `,
                }}
            />

            <noscript>
                <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=8006865&fmt=gif" />
            </noscript>
        </>
    );
};

export default Layout;
