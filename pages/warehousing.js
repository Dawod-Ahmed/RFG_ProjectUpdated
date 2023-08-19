import React from "react";
import Head from "next/head";
import Image from "next/image";
import Title from "../components/Common/title";
import styles from "../styles/ServicesPage/index.module.scss";
import { useTranslation } from "next-i18next";

import {
  Competency,
  RoadFreight,
  SubNavigation,
} from "../components/Servicespage";
import RequestQuote from "../components/Common/requestQuote";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "warehousingpage"])),
    },
  };
};

function services() {
  const { t } = useTranslation("warehousingpage");
  let refernce = "warehousingpage.Sections.";
  let classShortHand = styles.competency_item + " col-12 col-sm-6";
  let competencyPoints = [
    {
      text: t(`${refernce}Our capabilities.Points.First`),
    },
    {
      text: t(`${refernce}Our capabilities.Points.Second`),
    },
    {
      text: t(`${refernce}Our capabilities.Points.Third`),
    },
    {
      text: t(`${refernce}Our capabilities.Points.Forth`),
    },
  ];

  return (
    <>
      <Head>
        <title>Services | RFGroup</title>
      </Head>
      <section className={styles.services}>
        <Title
          heading={t("warehousingpage.Title")}
          src="/static/servicesImages/wareHousingTitle.png"
        />
        <div className={styles.services__main}>
          <div className={styles.services__sub_navigation}>
            <SubNavigation />
          </div>
          <div className={styles.services__content}>
            <RoadFreight
              image="/static/servicesImages/wareHousing.png"
              freightTitle={t(`${refernce}Warehousing.Heading`)}
              freightdetail={t(`${refernce}Warehousing.Desc`)}
            />
            <div className={styles.competencyDetail}>
              <h3 className={styles.subHeading}>{t(`${refernce}Our capabilities.Heading`)}</h3>
              <div className="row mx-0 mt-4">
                {competencyPoints.map(({ text }, index) => (
                  <div className={classShortHand} key={index}>
                    <CheckMarkImage src="/static/servicesImages/check-mark.png" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <RequestQuote />
      </section>
    </>
  );
}
function CheckMarkImage({ src = null }) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt="check mark"
        layout="fill"
        objectFit="contain"
        objectPosition="top left"
      />
    </div>
  );
}
export default services;
