// import Image from "next/image";
import Navbar from "./components/navbar/mainNav";
import Head from "next/head";
import SubNav from "./components/navbar/subNav";
import Banner from "./components/home/banner";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar />
        <SubNav />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
