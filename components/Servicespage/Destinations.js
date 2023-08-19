import Image from "next/image";
import styles from "../../styles/ServicesPage/index.module.scss";
import { useTranslation } from "next-i18next";

const Destinations = () => {
  const { t } = useTranslation("landfreightpage");
  let refernce = "landfreightpage.Sections.Destinations.";
  let destinationsDetails = [
    {
      imageSrc: "/static/servicesImages/SaudiArabia.png",
      Country: t(`${refernce}Saudi Arabia.Destination`),
      City: t(`${refernce}Saudi Arabia.City`),
      Time: t(`${refernce}Saudi Arabia.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/bahrain.png",
      Country: t(`${refernce}First Row.Destination`),
      City: t(`${refernce}First Row.City`),
      Time: t(`${refernce}First Row.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/qatar.png",
      Country: t(`${refernce}Second Row.Destination`),
      City: t(`${refernce}Second Row.City`),
      Time: t(`${refernce}Second Row.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/kuwait.png",
      Country: t(`${refernce}Third Row.Destination`),
      City: t(`${refernce}Third Row.City`),
      Time: t(`${refernce}Third Row.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/oman.png",
      Country: t(`${refernce}Forth Row.Destination`),
      City: t(`${refernce}Forth Row.City`),
      Time: t(`${refernce}Forth Row.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/yemen.png",
      Country: t(`${refernce}Fifth Row.Destination`),
      City: t(`${refernce}Fifth Row.City`),
      Time: t(`${refernce}Fifth Row.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/Jordan.png",
      Country: t(`${refernce}Sixth Row.Destination`),
      City: t(`${refernce}Sixth Row.City`),
      Time: t(`${refernce}Sixth Row.Lead Time`),
    },
    {
      imageSrc: "/static/servicesImages/Syria.png",
      Country: t(`${refernce}Seventh Row.Destination`),
      City: t(`${refernce}Seventh Row.City`),
      Time: t(`${refernce}Seventh Row.Lead Time`),
    },
    
  ];
  return (
    <div className={styles.destinationSection}>
      <h4 className={styles.generalHeading}>{t(`${refernce}Heading`)}</h4>
      <table className={styles.tableStyling + " table"}>
        <thead>
          <tr>
            <th>{t(`${refernce}Head Row.Destination`)}</th>
            <th>{t(`${refernce}Head Row.City`)} </th>
            <th>{t(`${refernce}Head Row.Lead Time`)} </th>
          </tr>
        </thead>
        <tbody>
          {destinationsDetails.map((destination) => (
            <tr>
              <td className={styles.imageCell}>
                <div className={styles.flagImage}>
                  <Image src={destination.imageSrc} layout="fill" />
                </div>
                <p>{destination.Country}</p>
              </td>
              <td>{destination.City}</td>
              <td>{destination.Time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Destinations;
