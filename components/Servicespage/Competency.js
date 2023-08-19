import Image from "next/image";
import React from "react";
import styles from "../../styles/ServicesPage/index.module.scss";

const Competency = () => {
  let classShortHand = styles.competency_item + " col-12 col-sm-6";
 
  let competencyPoints = [
    {
      text: "Cross-border travel in the GCC and Middle East.",
    },
    {
      text: "Full Truckload (FTL) and Less Than Truckload (LTL) (Bonded and Non-Bonded Transportation).",
    },
    {
      text: "Services from Door to Door.",
    },
    {
      text: "Temperature- and time-sensitive shipments.",
    },
    {
      text: "Pickup and Delivery Services Nearby (Locally Inside UAE).",
    },
  ];
  return (
    <div className={styles.competencyDetail}>
      <h3 className={styles.subHeading}>Among our competencies are: </h3>
      <div className="row mx-0 mt-4">
        {competencyPoints.map(({ text }, index) => (
          <div className={classShortHand} key={index}>
            <CheckMarkImage src="/static/servicesImages/check-mark.png" />
            {text}
          </div>
        ))}
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
export default Competency;
