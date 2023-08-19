import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Aboutpage/index.module.scss";
import { useTranslation } from "next-i18next";
// import BgContainerImage from "../common/bgContainerImage";
const RequestQuote = () => {

  const { t } = useTranslation("common");
  let refernce = 'request quote.'

  const router = useRouter();
  return (
    <div className={styles.cta}>
      {/* <BgContainerImage src="/static/images/cta--image.png" /> */}
      <Image
        style={{ zIndex: "-1" }}
        src={"/static/images/cta--image.png"}
        alt="Picture of the author"
        layout="fill"
        priority
        objectFit="cover"
        objectPosition="right"
        // placeholder="blur"
        quality={50}
        blurDataURL={"/static/images/cta--image.png"}
      />
      <h3 className={styles.cta__title}>{t(`${refernce}Heading`)}</h3>
      <button className={styles.btn} onClick={() => router.push("/contact")}>
      {t(`${refernce}Button Label`)}
      </button>
    </div>
  );
};

export default RequestQuote;
