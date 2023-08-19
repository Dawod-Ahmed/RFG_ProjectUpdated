import Image from "next/image";
import styles from "../../styles/Aboutpage/index.module.scss";
import { useTranslation } from "next-i18next";
 

const Logistics = () => {
  const { t } = useTranslation("aboutpage");
  let refernce = "aboutpage.Sections.RFG Logistics.";
  return (
    <div className={`${styles.logistics} container-fluid g-0 mt-lg-0`}>
      <div className="row gx-0">
        <div
          className={`col-lg-5 col-md-12 ${styles.logistics__image_container}`}
        >
          <Image
            src="/static/images/logistics.png"
            alt="truck"
            layout="fill"
            priority
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
            quality={80}
            blurDataURL="/static/images/logistics.png"
          />
        </div>
        <div className={`col-lg-7 col-md-12 ${styles.features}`}>
          <p className={`${styles.logistics__sub} mb-3 text-lg-start`}>{t(`${refernce}Sub Heading`)}</p>
          <h2 className={`${styles.logistics__heading} mb-5 mb-lg-4 text-lg-start`}>{t(`${refernce}Heading`)}</h2>
          <div
            className={`${styles.logistics__feature_points} d-flex flex-column flex-lg-column flex-md-row flex-sm-col`}
          >
            <ul className="row mx-0  ">
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />

                <span className={styles.logistics__list_item}>
                {t(`${refernce}Points.First`)}
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                {t(`${refernce}Points.Second`)}
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                {t(`${refernce}Points.Third`)}
                </span>
              </li>
            </ul>
            <ul className="row  mx-0  row2 px-md-3 px-lg-0">
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                {t(`${refernce}Points.Forth`)}
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                {t(`${refernce}Points.Fifth`)}
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                {t(`${refernce}Points.Sixth`)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default Logistics;
