import React from 'react';
import { useRouter } from 'next/router';
import Header from '../Header/Header'; // Adjust path if needed
import Footer from '../Footer/Footer'; // Adjust path if needed

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
        </>
    );
};

export default Layout;
