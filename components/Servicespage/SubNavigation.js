import Image from "next/image";
import Link from "next/link"; 
import styles from "../../styles/ServicesPage/index.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const SubNavigation = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  let refernce = "footer.Services.";

  let navigationItems = [
    {
      image: `${"/static/servicesImages/"}${router.asPath == "/landfreight" ? "chevron-right.png": "chevron-left.png"}`,
      text: t(`${refernce}Land Freight`),
      className: router.asPath == "/landfreight" ? `${styles.active} ${styles.link }` : styles.link,
      url:"landfreight"
    },
    {
      image: `${"/static/servicesImages/"}${router.asPath == "/seafreight" ? "chevron-right.png": "chevron-left.png"}`,
      text: t(`${refernce}Sea Freight`),
      className: router.asPath == "/seafreight" ? `${styles.active} ${styles.link }` : styles.link,
      url:"seafreight"

    },
    {
      image: `${"/static/servicesImages/"}${router.asPath == "/airfreight" ? "chevron-right.png": "chevron-left.png"}`,
      text: t(`${refernce}Air Freight`),
      className: router.asPath == "/airfreight" ? `${styles.active} ${styles.link }` : styles.link,
      url:"airfreight"

    },
    {
      image: `${"/static/servicesImages/"}${router.asPath == "/automotivelogistics" ? "chevron-right.png": "chevron-left.png"}`,
      text: t(`${refernce}Automotive Logistics`),
      className: router.asPath == "/automotivelogistics" ? `${styles.active} ${styles.link }` : styles.link,
      url:"automotivelogistics"

    },
    {
      image: `${"/static/servicesImages/"}${router.asPath == "/warehousing" ? "chevron-right.png": "chevron-left.png"}`,
      text: t(`${refernce}Warehousing`),
      className: router.asPath == "/warehousing" ? `${styles.active} ${styles.link }` : styles.link,
      url:"warehousing"

    },
    {
      image: `${"/static/servicesImages/"}${router.asPath == "/customsclearance" ? "chevron-right.png": "chevron-left.png"}`,
      text: t(`${refernce}Customs Clearance`),
      className: router.asPath == "/customsclearance" ? `${styles.active} ${styles.link }` : styles.link,
      url:"customsclearance"

    },
  ];
  return (
    <ul>
      {navigationItems.map((data, index) => (
             
        <li className={data.className} key={index}   >
          <Image src={data.image} width="7" height="12" layout="fixed" />
         
            <Link href={data.url}>
              <a className="text-uppercase">{data.text}</a>
              </Link>
         
        </li>
           
      ))}
    </ul>
  );
};

export default SubNavigation;
