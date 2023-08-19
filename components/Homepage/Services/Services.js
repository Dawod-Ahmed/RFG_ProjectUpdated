import React from "react";
import styles from "../../../styles/HomeStyling/Services.module.scss";
import GeneralHeading from "../../Common/GeneralHeading";
import ServicesCard from "./ServicesCard";
// import TruckIcon from "../../../assets/images/truck_icon.png";
import TruckIcons from "../../../public/static/homeImages/truck_icon.png";
import BoatIcon from "../../../public/static/homeImages/boat_icon.png";
import PlaneIcon from "../../../public/static/homeImages/plane_icon.png";
import { useTranslation } from "next-i18next";

function Services() {
  const { t } = useTranslation("homepage");
  let refernce = "homepage.services.";
  return (
    <>
      <div id="coreServices" className={styles.services}>
        <GeneralHeading
          small_Title={t(`${refernce}Sub Heading`)}
          large_Title={t(`${refernce}Heading`)}
        />

        <div className={styles.services_cards}>
          <div className="container">
            <div className={`row ${styles.custom_row}`}>
              <ServicesCard
                icon={TruckIcons}
                title={t(`${refernce}Land Freight.Title`)}
                desc={t(`${refernce}Land Freight.Desc`)}
                url={"landfreight"}
                buttonLabel={t(`${refernce}Read More`)}
              />

              <ServicesCard
                icon={BoatIcon}
                title={t(`${refernce}Sea Freight.Title`)}
                desc={t(`${refernce}Sea Freight.Desc`)}
                url="/seafreight"
                buttonLabel={t(`${refernce}Read More`)}
              />

              <ServicesCard
                icon={PlaneIcon}
                title={t(`${refernce}Air Freight.Title`)}
                desc={t(`${refernce}Air Freight.Desc`)}
                url="/airfreight"
                buttonLabel={t(`${refernce}Read More`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
