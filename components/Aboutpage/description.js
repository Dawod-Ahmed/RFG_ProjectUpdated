import Image from "next/image";
import styles from "../../styles/Aboutpage/index.module.scss";
// import BgContainerImage from "../common/bgContainerImage";
import { useTranslation } from "next-i18next";

const Description = () => {
  const { t } = useTranslation("aboutpage");
  let refernce = "aboutpage.Sections.About Us.";

  return (
    <div className={styles.description}>
      {/* <BgContainerImage src="/static/images/description-image.png" /> */}
      <Image
        style={{ zIndex: "-1" }}
        src={"/static/images/description-image.png"}
        alt="Picture of the author"
        layout="fill"
        priority
        objectFit="cover"
        objectPosition="right"
        // placeholder="blur"
        quality={50}
        blurDataURL={"/static/images/description-image.png"}
      />
      <h6 className="text-white">{t(`${refernce}Sub Heading`)}</h6>
      <h2 className={styles.description__title}>{t(`${refernce}Heading`)}</h2>
      <p className={styles.description__text}>{t(`${refernce}Desc`)}</p>
    </div>
  );
};

export default Description;
