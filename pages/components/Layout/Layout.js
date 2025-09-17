import React from 'react';
import { useRouter } from 'next/router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Only the weights you need
  display: "swap",
});

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  // Define routes where header/footer should be hidden
  const noHeaderFooterRoutes = [
    '/blog',
    '/blog/[slug]',
    // Add more routes or patterns here as needed
  ];

  const hideHeaderFooter = path.includes('blog');

  return (
    <div className={`flex flex-col min-h-screen ${poppins.className}`}>
      {!hideHeaderFooter && <Header />}
      <main className="lg:px-16">{children}</main>
      {!hideHeaderFooter && <div ><Footer /></div>}
    </div>
  );
};

export default Layout;
