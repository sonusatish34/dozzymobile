import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner.js/HomeBanner";
import FarmStarts from "./components/FarmStarts/FarmStarts";
import FarmProductLPage from "./components/FarmProductLPage/FarmProductLPage";
import CareGuests from "./components/CareGuests/CareGuests";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <HomeBanner/>
      <FarmStarts/>
      <FarmProductLPage/>
      <CareGuests/>
      <Footer/>
    </div>
  );
}
