import React from "react";
import styles from "../../styles/HomeStyling/Carousel.module.scss";
import Link from "next/link"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import carouselImg1 from '../../public/static/homeImages/carousal_img_1.png';
import carouselImg2 from '../../public/static/homeImages/carousal_img_2.png';
import carouselImg3 from '../../public/static/homeImages/carousal_img_3.png';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Header() {
  const { t } = useTranslation("homepage");
  let refernce = 'homepage.carousel.'

  const router = useRouter();
  const responsive = {
   
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  const CarouselItem = (props) => {
    return (
      <div className={styles.c_item}>
        <div className={styles.ci_wrapper}></div>
        <Image
          alt="carousel-img"
          src={props.image}
          layout="fill"
          priority={true}
          objectFit="cover"
          quality={100}
        />
        <div className={"container" + " " + styles.textContainer}>
          <div className={styles.ci_text}>
            <h1>{props.title}</h1>
            <p>
              {props.detail}
            </p>
            <Link href={props.url}><button type="button" className="btn"  onClick={() => router.push(props.url)}>
              {props.buttonLabel}              
            </button></Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={styles.header}>
        <Carousel
          responsive={responsive}
          containerClass={styles.carousel_container}
          infinite={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <CarouselItem image={carouselImg1} buttonLabel={t(`${refernce}Read More`)} title={t(`${refernce}first.title`)} detail={t(`${refernce}first.Description`)} url="landfreight"/>
          <CarouselItem image={carouselImg2} buttonLabel={t(`${refernce}Read More`)} title={t(`${refernce}second.title`)} detail={t(`${refernce}second.Description`)} url="seafreight"/>
          <CarouselItem image={carouselImg3} buttonLabel={t(`${refernce}Read More`)} title={t(`${refernce}third.title`)} detail={t(`${refernce}third.Description`)} url="airfreight"/>
        </Carousel>
      </div>
    </>
  );
}

export default Header;
