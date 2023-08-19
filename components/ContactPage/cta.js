import React from "react";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import "../../styles/ContactPage/index.module.scss";

function CtaComp() {
  const { t } = useTranslation("contactpage");

  return (
    <>
      <div className="cta_parent ">
        <div className="cta_child_parent px-5 d-flex flex-wrap justify-content-around  align-items-start row gy-5">
          <div className="cta_child col-sm-5 col-lg-4 text-center mb-5">
            <Image
              className="cta_icon "
              src={"/static/contactImages/location.png"}
              alt="Picture of the author"
              width={40}
              height={40}
              quality={50}
              blurDataURL={"/static/contactImages/location.png"}
            />
            <a
              href="https://goo.gl/maps/C2yFVDZhhgJ8sHYv7"
              target="_blank"
              className="cta_text mt-5"
            >
              {t("contactpage.Address")}
            </a>
          </div>

          <div className="cta_child col-sm-5 col-lg-4 text-center mb-5">
            <Image
              className="cta_icon "
              src={"/static/contactImages/phone.png"}
              alt="Picture of the author"
              width={40}
              height={40}
              quality={50}
              blurDataURL={"/static/contactImages/phone.png"}
            />
            <a dir="ltr" href="tel:+971586952050" className="cta_text mt-5">
              +971 58 695 2050{" "}<span className="text-dark"> (Office)</span>
            </a>
            <a dir="ltr" href="tel:+971 58 604 3338" className="cta_text">
            +971 58 604 3338 <span className="text-dark">(Mobile)</span>
            </a>
            <a dir="ltr" href="tel:+971 52 211 2402" className="cta_text">
            +971 52 211 2402 <span className="text-dark">(Mobile)</span>
            </a>
          </div>

          <div className="cta_child col-sm-5 col-lg-4 text-center mb-5">
            <Image
              className="cta_icon "
              src={"/static/contactImages/email.png"}
              alt="Picture of the author"
              width={40}
              height={40}
              quality={50}
              blurDataURL={"/static/contactImages/email.png"}
            />
            <a href="mailto:info@rfglogistics.ae" className="cta_text mt-4">
              info@rfglogistics.ae
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaComp;
