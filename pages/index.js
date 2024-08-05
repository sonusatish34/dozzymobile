import { Inter } from "next/font/google";
// import HomeBanner from "./components/HomeBanner.js/HomeBanner";
// import FarmStarts from "./components/FarmStarts/FarmStarts";
// import FarmProductLPage from "./components/FarmProductLPage/FarmProductLPage";
// import CareGuests from "./components/CareGuests/CareGuests";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import dynamic from 'next/dynamic';

const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
const FarmStarts = dynamic(() => import('./components/FarmStarts/FarmStarts'));
const FarmProductLPage = dynamic(() => import('./components/FarmProductLPage/FarmProductLPage'));
const CareGuests = dynamic(() => import('./components/CareGuests/CareGuests'));

export default function Home() {
  return (
    <div className="text-black font-poppins">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeBanner />
      <FarmStarts />
      <FarmProductLPage />
      <CareGuests />
    </div>
  );
}
