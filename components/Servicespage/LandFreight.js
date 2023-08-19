import Image from "next/image";
import styles from "../../styles/ServicesPage/index.module.scss";

const RoadFreight = ({
  image = null,
  freightTitle = "Your Title",
  freightdetail = "Your Details",
}) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          layout="fill"
          priority
          placeholder="blur"
          blurDataURL="/static/servicesImages/road-freight.png"
        />
      </div>

      <div className={styles.detailSection}>
        <h2 className={styles.generalHeading}>{freightTitle}</h2>
        <p className={styles.text}>{freightdetail}</p>
      </div>
    </>
  );
};

export default RoadFreight;
