import Image from "next/image";
import React from "react";
import styles from "../../styles/ServicesPage/index.module.scss";
import { useTranslation } from "next-i18next";

const Coverage = () => {
  const { t } = useTranslation("landfreightpage");
  let refernce = 'landfreightpage.Sections.Frieght Coverage.'

  let classesShortHand = "col-12 px-0";
  let countries = [
    t(`${refernce}Countries.First`),
    t(`${refernce}Countries.Second`),
    t(`${refernce}Countries.Third`),
    t(`${refernce}Countries.Forth`),
    t(`${refernce}Countries.Fifth`),
    t(`${refernce}Countries.Sixth`),
    t(`${refernce}Countries.Seventh`),
    t(`${refernce}Countries.Eighth`),
    
  ];
  return (
    <div className={styles.coverageSection}>
      <h2 className={styles.generalHeading}>{t(`${refernce}Heading`)}</h2>
      <div className="row mx-0">
        <div className={styles.coverage + " col-md-5 " + classesShortHand}>
          <h4>{t(`${refernce}Desc`)}</h4>
          <ul className={styles.coverage_list}>
            {countries.map((country) => (
              <li key={country}>
                <span className={styles.coverage_list__item}>{country}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={classesShortHand + " col-md-7"}>
          <div className={styles.coverageImage}>
            <Image
              src="/static/servicesImages/coverage-map.png"
              layout="fill"
              placeholder="blur"
              objectPosition="80% center"
              blurDataURL="/static/servicesImages/coverage-map.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
