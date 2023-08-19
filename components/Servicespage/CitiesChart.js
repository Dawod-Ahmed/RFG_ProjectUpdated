import React from "react";
import styles from "../../styles/ServicesPage/index.module.scss";
import { useTranslation } from "next-i18next";


const CitiesChart = () => {
  const { t } = useTranslation("landfreightpage");
  let refernce = 'landfreightpage.Sections.City Destination.'
  let destinationsDetails = [
    {
      Destination: t(`${refernce}First Row.KSA Destination`),
      Dammam: t(`${refernce}First Row.Dammam`),
      Riyadh: t(`${refernce}First Row.Riyadh`),
      Jeddah: t(`${refernce}First Row.Jeddah`),
    },
    {
      Destination: t(`${refernce}Second Row.KSA Destination`),
      Dammam: t(`${refernce}Second Row.Dammam`),
      Riyadh: t(`${refernce}Second Row.Riyadh`),
      Jeddah: t(`${refernce}Second Row.Jeddah`),
    },
    {
      Destination: t(`${refernce}Third Row.KSA Destination`),
      Dammam: t(`${refernce}Third Row.Dammam`),
      Riyadh: t(`${refernce}Third Row.Riyadh`),
      Jeddah: t(`${refernce}Third Row.Jeddah`),
    },
  ];
  return (
    <div className={styles.citiesChart}>
      <table className={styles.tableStyling + ' table'}>
        <thead>
          <tr>
            <th>{t(`${refernce}Head Row.KSA Destination`)}</th>
            <th>{t(`${refernce}Head Row.Dammam`)}</th>
            <th>{t(`${refernce}Head Row.Riyadh`)}</th>
            <th>{t(`${refernce}Head Row.Jeddah`)}</th>
          </tr>
        </thead>
        <tbody>
          {destinationsDetails.map((destination) => (
            <tr>
              <td>{destination.Destination}</td>
              <td>{destination.Dammam}</td>
              <td>{destination.Riyadh}</td>
              <td>{destination.Jeddah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesChart;
