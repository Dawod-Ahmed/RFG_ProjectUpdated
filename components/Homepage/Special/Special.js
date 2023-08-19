import React from "react";
import styles from "../../../styles/HomeStyling/Special.module.scss";
import GeneralHeading from "../../Common/GeneralHeading";
import Image from "next/image";
import MenImg from "../../../public/static/homeImages/men_img.png";
import SpecialItem from "./SpecialItem";
import MissionIcon from "../../../public/static/homeImages/mission_icon.png";
import CommitementIcon from "../../../public/static/homeImages/commitement_icon.png";
import EthicsIcon from "../../../public/static/homeImages/ethics_icon.png";
import SustainabilityIcon from "../../../public/static/homeImages/sustainability_icon.png";
import Fairness from "../../../public/static/contactImages/fairness.png";
import { useTranslation } from "next-i18next";


function Special() {
  const { t } = useTranslation("aboutpage");
  let refernce = "aboutpage.Sections.Differentiates.";
  return (
    <>
      <div className={styles.special}>
        <GeneralHeading
          small_Title={""}
          large_Title={t(`${refernce}Heading`)}
        />

        <div className="container">
          <div className={styles.s_inner}>
            <div className={styles.s_img_holder}>
              <div className={styles.s_men_img}>
                <Image
                  alt="men_img"
                  src={MenImg}
                  priority={true}
                  layout="responsive"
                  width={307}
                  height={499}
                />
              </div>
            </div>

            <div className={styles.s_content}>
              <div className={`${styles.custom_row} row d-flex justify-content-center justify-content-sm-center justify-content-lg-around`}>
                <SpecialItem
                  icon={MissionIcon}
                  title={t(`${refernce}Mission.Title`)}
                  desc={t(`${refernce}Mission.Desc`)}
                />

                <SpecialItem
                  icon={CommitementIcon}
                  title={t(`${refernce}Commitment.Title`)}
                  desc={t(`${refernce}Commitment.Desc`)}
                />

                <SpecialItem
                  icon={EthicsIcon}
                  title={t(`${refernce}Ethics.Title`)}
                  desc={t(`${refernce}Ethics.Desc`)}
                />

                <SpecialItem
                  icon={SustainabilityIcon}
                  title={t(`${refernce}Sustainability.Title`)}
                  desc={t(`${refernce}Sustainability.Desc`)}
                />
                <SpecialItem
                  icon={Fairness}
                  title={t(`${refernce}Fairness.Title`)}
                  desc={t(`${refernce}Fairness.Desc`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
