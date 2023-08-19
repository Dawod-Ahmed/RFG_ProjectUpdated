// import Navbar from "../components/Common/Navbar";
import { useEffect, useState } from "react";
import Carousel from "../components/Homepage/carousel";
import Quote from "../components/Homepage/Quote";
import Services from "../components/Homepage/Services/Services";
import RequestQuote from '../components/Common/requestQuote';

// import Footer from '../components/Common/footer';
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","homepage"])),
    },
  };
}


export default function Home() {
  return (
    <>
    <Head><title>Home | RFGroup</title></Head>
    <main className="main"> 

      {/* <Navbar /> */}
      <Carousel />
      <Services />
      <Quote/>
      <RequestQuote/>
    </main>
      {/* <Footer/> */}
    </>
  );
}
