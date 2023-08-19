import React from "react";

import Head from "next/head";

import Title from "../components/Common/title";
import styles from "../styles/ContactPage/index.module.scss";

import { Cta, Form, Map } from "../components/ContactPage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contactpage"])),
    },
  };
};
function contact() {
  const { t } = useTranslation("contactpage");

  return (
    <>
      <Head>
        <title>Contact Us | RFGroup</title>
      </Head>

      <main className={styles.contact}>
        <Title heading={t("contactpage.Title")} src="/static/contactImages/title.png" />
        <Cta />
        <Form />
        <Map />
      </main>
    </>
  );
}

export default contact;
