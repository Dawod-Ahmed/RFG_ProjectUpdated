import styles from "../../styles/Aboutpage/index.module.scss";
import { useTranslation } from "next-i18next";


const Profile = () => {
  const { t } = useTranslation("aboutpage");
  let refernce = "aboutpage.Sections.Our Profile.";
  return (
    <div className={styles.profile}>
      <h2>{t(`${refernce}Heading`)}</h2>
      
      <p className={styles.profile__text}>
      {t(`${refernce}Desc`)}
      </p>
    </div>
  );
};

export default Profile;
