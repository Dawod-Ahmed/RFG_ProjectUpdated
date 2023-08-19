import React from "react";
import styles from "../../styles/GeneralHeading.module.scss";

function GeneralHeading(props) {
  return (
    <>
      
        <div className={styles.heading}>
          <h6>{props.small_Title}</h6>
          <h1>{props.large_Title}</h1>
        </div>
    </>
  );
}

export default GeneralHeading;
