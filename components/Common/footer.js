import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/general/footer.module.scss";
import { whatsappIcon, scrollTopBtn } from "../../public/assets";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var scroll = document.querySelector(".scrollBar-Top");
      scroll.classList.toggle("active-scrollToTop", window.scrollY > 250);
    });
    // unsubscribe from the event on component unmount
  }, []);

  return (
    <>
      <div className={styles.footer}>
        <div className="row">
          <div className={`${styles.logo} col-lg-5 col-md-6 col-sm-12`}>
            <div
              className={styles.footer__logo}
              onClick={() => router.push("/")}
            ></div>

            <p className={styles.footer__logo_content}>
              {t("footer.description")}
              <br />
              <Link href="/about" className={styles.footer__logo_link}>
                {t("footer.Read more")}
              </Link>
            </p>
            <div className={styles.footer__socials}>
              <Link href="https://www.facebook.com/" target="_blank">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/facebook.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
              <Link href="https://www.instagram.com/">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/instagram.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/twitter.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/linkedin.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.link_heading} col-lg-2 col-md-6 col-sm-12`}>
            <h4 className={styles.footer__link_heading}>
              {t("footer.UsefulLinks.Title")}
            </h4>

            <ul className={styles.footer__menu}>
              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="/">
                  <a className={styles.footer__link_item}>
                    {t("footer.UsefulLinks.Home")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="about">
                  <a className={styles.footer__link_item}>
                    {t("footer.UsefulLinks.About")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="landfreight">
                  <a className={styles.footer__link_item}>
                    {t("footer.UsefulLinks.Services")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="contact">
                  <a className={styles.footer__link_item}>
                    {t("footer.UsefulLinks.Contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.link_heading} col-lg-2 col-md-6 col-sm-12`}>
            <h4 className={styles.footer__link_heading}>
              {t("footer.Services.Title")}
            </h4>

            <ul className={styles.footer__menu}>
              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="landfreight">
                  <a className={styles.footer__link_item}>
                    {t("footer.Services.Land Freight")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="seafreight">
                  <a className={styles.footer__link_item}>
                    {t("footer.Services.Sea Freight")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="airfreight">
                  <a className={styles.footer__link_item}>
                    {t("footer.Services.Air Freight")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="automotivelogistics">
                  <a className={styles.footer__link_item}>
                    {t("footer.Services.Automotive Logistics")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="warehousing">
                  <a className={styles.footer__link_item}>
                    {t("footer.Services.Warehousing")}
                  </a>
                </Link>
              </li>
              <li className={styles.footer__link + ' ' + styles.siteLinks}>
                <Link href="customsclearance">
                  <a className={styles.footer__link_item}>
                    {t("footer.Services.Customs Clearance")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.link_heading} col-lg-3 col-md-6 col-sm-12`}>
            <h4 className={styles.footer__link_heading}>
              {t("footer.Contact.Title")}
            </h4>

            <ul
              className={`${
                styles.footer__menu + " " + styles.footer__menu__contacts
              } footer-contactUs-ul`}
            >
              <li className={styles.footer__link}>
                <div
                  style={{
                    minWidth: "33px",
                    height: "33px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/static/images/location-pin.png"
                    layout="fill"
                    alt="map Marker"
                    className="f-location-icon"
                  />
                </div>

                <Link href="#">
                  <a
                    href="https://goo.gl/maps/C2yFVDZhhgJ8sHYv7"
                    target="_blank"
                    className={
                      styles.footer__link_item +
                      " " +
                      styles.footer__link_item__contact__location
                    }
                  >
                    {t("footer.Address")}
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Image
                  src="/static/images/phone-call.png"
                  width={26}
                  height={26}
                  alt="Call Icon"
                />

                <div>
              //    <Link href="#">
                    <a
                      href="tel:+971 58 695 2050"
                      dir="ltr"
                      className={
                        styles.footer__link_item +
                        " " +
                        styles.footer__link_item__contact +
                        " " +
                        styles.footer__link_item__tel
                      }
                    >
                      +971 58 695 2050 <span className="text-dark">(Office)</span>
                    </a>
                  </Link>

                  <br />
                  <Link href="#">
                    <a
                      href="tel:+971 58 604 3338"
                      dir="ltr"
                      className={
                        styles.footer__link_item +
                        " " +
                        styles.footer__link_item__contact +
                        " " +
                        styles.footer__link_item__tel
                      }
                    >
                      +971 58 604 3338 <span className="text-dark">(Mobile)</span>
                    </a>
                  </Link>

                 
                  <br />
                  <Link href="#">
                    <a
                      href="tel:+971 52 211 2402"
                      dir="ltr"
                      className={
                        styles.footer__link_item +
                        " " +
                        styles.footer__link_item__contact +
                        " " +
                        styles.footer__link_item__tel
                      }
                    >
                      +971 52 211 2402 <span className="text-dark">(Mobile)</span>
                    </a>
                  </Link>
                </div>
              </li>

              <li className={styles.footer__link}>
                <Image
                  src="/static/images/email.png"
                  width={26}
                  height={26}
                  alt="email Icon"
                />
                <Link href=" mailto: info@rfglogistics.ae">
                  <a
                    className={
                      styles.footer__link_item +
                      " " +
                      styles.footer__link_item__contact
                    }
                  >
                    info@rfglogistics.ae
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Image
                  src="/static/images/global.png"
                  width={26}
                  height={26}
                  alt="Earth Globe Icon"
                />

                <a
                  href="https://rfgroup.ae/"
                  target="_blank"
                  className={
                    styles.footer__link_item +
                    " " +
                    styles.footer__link_item__contact
                  }
                >
                  www.rfgroup.ae
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyrights}>
        <h6>{t("footer.CopyRight")}</h6>
      </div>
      <div className="scrollTop-whatsaap-cta-parent d-flex  flex-column justify-content-center align-items-center position-fixed">
        {/* <image src={whatsappIcon} alt="whatsappIconCTA" className="mb-3"/> 
        
        
        */}

        <a href="https://wa.me/+971586043338?text=Greetings RFG, I need a quote!">
          <div className="whatsappIcon"></div>
        </a>
        <div
          className="scrollBar-Top  d-none justify-content-center align-items-center"
          onClick={scrolltotop}
        ></div>
      </div>
    </>
  );
};

export default Footer;
