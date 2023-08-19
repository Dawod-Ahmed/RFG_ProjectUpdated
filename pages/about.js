import React from "react";
// import Head from "next/document";

import Special from "../components/Homepage/Special/Special";

import Navbar from "../components/Common/Navbar";
import {
  Title,
  Logistics,
  Description,
  Profile,
} from "../components/Aboutpage/index";
import styles from "../styles/Aboutpage/index.module.scss";

import RequestQuote from "../components/Common/requestQuote";
// import Footer from '../components/Common/footer';
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutpage"])),
    },
  };
};

function about() {
  const { t } = useTranslation("aboutpage");
  return (
    <>
      {/* <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
     
      </Head> */}
      {/* <Navbar/> */}
      <Head>
        <title>About Us | RFGroup</title>
      </Head>
      <main className={`${styles.about_us} main`}>
        <Title heading={t("aboutpage.Title")} src="/static/images/title.png" />
        <Description />
        <Profile />
        <Special />
        <Logistics />
        <RequestQuote />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default about;
