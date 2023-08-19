
import styles from "../../styles/Aboutpage/index.module.scss";
import BgContainerImage from "../Common/bgContainerImage";
const Title = ({ heading, src }) => {
  return (
    <div className={styles.title}>
      <BgContainerImage src={src} />
      <h1 className={styles.title__heading}>{heading}</h1>
    </div>
  );
};

export default Title;
