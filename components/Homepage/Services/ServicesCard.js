import React from "react";
import Link from "next/link";
import styles from "../../../styles/HomeStyling/Services.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

function ServicesCard(props) {
  let router = useRouter();
  const [frenchCardStyling, setFrenchCardStyling] = useState("");
  useEffect(() => {
    console.log(router.locale, "hello");
    if (router.locale === "fr") {
      setFrenchCardStyling(styles.FrCard);
    } else {
      setFrenchCardStyling("");
    }
  }, [router.locale]);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className={styles.sc_item + " " + frenchCardStyling}>
          <Image
            alt="services-icon"
            src={props.icon}
            layout="fixed"
            objectFit="cover"
            quality={100}
            width={105}
            height={105}
          />
          <h5>{props.title}</h5>
          <p>
            {props.desc}
            <Link href={props.url}>{props.buttonLabel}</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
