import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/general/Navbar.module.scss";
import { useRouter } from "next/router";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
// import ReactHeadroom from "react-headroom";
import { useTranslation } from "next-i18next";

function Navbar() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [select, setSelect] = useState(
    locale === "en" ? "US" : locale === "ar" ? "AE" : "FR"
  );
  const servicesMenu = () => {
    if(window.innerWidth>991){
    router.push("/landfreight");

    }
    // console.log("Ok");
    setOpenServices(!openServices);
    
    // router.push("/landfreight");
    // setOpenNav(!openNav);
  };
  const closeNav = () => {
     if(openServices){
    setOpenServices(!openServices);

      setOpenNav(!openNav);

     }
     else{
      setOpenNav(!openNav);
       
    }
    
  };

  const onSelect = (code) => {
    setSelect(code);
    if (code === "US") {
      router.push({ pathname, query }, asPath, { locale: "en" });
      let html = document.querySelector("html").setAttribute("dir", "ltr");
    }
    if (code === "AE") {
      router.push({ pathname, query }, asPath, { locale: "ar" });
      let html = document.querySelector("html").setAttribute("dir", "rtl");
    }
    if (code === "FR") {
      router.push({ pathname, query }, asPath, { locale: "fr" });
      let html = document.querySelector("html").setAttribute("dir", "ltr");
    }
  };

  useEffect(() => {
    if (select === "AE") {
      let html = document.querySelector("html").setAttribute("dir", "rtl");
    }
  }, []);
  return (
    <>
      {/* <ReactHeadroom> */}
        <div className={styles.navbar}>
          {/* TOP DETAILS */}
          <div className={styles.top_details}>
            <div className="container" style={{ height: "100%" }}>
              <div className={styles.td_inner}>
                <div className={styles.td_left}>
                  <div className={styles.tdl_item}>
                    <h6>{t("header.Address")}</h6>
                    <a
                      
                    >
                      {t("header.Address Content")}
                    </a>
                  </div>
                  <div className={styles.tdl_item}>
                    <h6>{t("header.Email")}</h6>
                    <a href="mailto:info@rfglogistics.ae">
                      info@rfglogistics.ae
                    </a>
                  </div>
                  {/* <div className={styles.tdl_item}>
                    <h6>{t("header.Phone Number")}</h6>
                    <a dir="ltr" href="tel:+971 58 695 2050">
                      +971 58 695 2050
                    </a>
                  </div> */}
                </div>
                <div>
                  <div className={styles.td_right}>
                    <ReactFlagsSelect
                      className={styles.D_lang}
                      selected={select}
                      onSelect={onSelect}
                      placeholder={"English"}
                      selectedSize={"14px"}
                      optionsSize={"14px"}
                      countries={["US", "AE", "FR"]}
                      customLabels={{
                        US: "English",
                        AE: "العربية",
                        FR: "French",
                      }}
                      //             showSelectedLabel={showSelectedLabel}
                      // showOptionLabel={showOptionLabel}
                      // optionsSize={optionsSize}
                      // placeholder={placeholder}
                      // searchable={searchable}
                      // searchPlaceholder={searchPlaceholder}
                      // alignOptionsToRight={alignOptionsToRight}
                      // fullWidth={fullWidth}
                      // disabled={disabled}
                    />
                    <button
                      type="button"
                      className={styles.D_quote_btn}
                      onClick={() => router.push("/contact")}
                    >
                      {t("header.Request a quote")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NAVBAR */}
          <nav className={styles.D_navbar}>
            <div className="container" style={{ height: "100%" }}>
              <div className={styles.inner}>
                {/* LOGO */}
                <div
                  className={`${styles.logo} nav-logo`}
                  onClick={() => router.push("/") && setOpenNav(false)}
                ></div>

                {/* LINKS */}
                <div
                  className={
                    openNav
                      ? `${styles.links} ${styles.active}`
                      : `${styles.links}`
                  }
                >
                  <ul className={styles.navbar_list}>
                    <li
                      className={router.asPath == "/" ? `${styles.active}` : ""}
                      onClick={() => router.push("/") && closeNav()}
                    >
                      {t("header.Navlinks.Home")}
                    </li>
                    <li
                      className={
                        router.asPath == "/about" ? `${styles.active}` : ""
                      }
                      onClick={() =>
                        router.push("/about") && closeNav()
                      }
                    >
                      {t("header.Navlinks.About")}
                    </li>
                    <li className="services-link" onClick={servicesMenu}>
                      <span
                        className={`${
                          router.asPath == "/landfreight" ||
                          router.asPath == "/seafreight" ||
                          router.asPath == "/airfreight" ||
                          router.asPath == "/automotivelogistics" ||
                          router.asPath == "/warehousing" ||
                          router.asPath == "/customsclearance"
                            ? `${styles.active} `
                            : ""
                        } `}
                      >
                        {t("header.Navlinks.Services")} 
                      </span>
                      <ul
                        className={`dropdown-menu d-lg-none  menu-dropdown-parent ${
                          openServices ? "openSubmenu" : ""
                        } ${select}-menu-dropdown-parent`}
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className={`menu-dropdown-link mx-0 me-auto my-0  px-0 d-lg-none ${select}-Back-Services-btn`} >
                          <a
                            className="dropdown-item px-5 Back-Services-btn"
                            
                            onClick={servicesMenu}
                          >
                           {t("footer.Services.Back")}
                          </a>
                        </li>
                        <li className="menu-dropdown-link mx-auto mx-lg-auto my-0 px-0">
                          <Link href="/landfreight"><a className="dropdown-item px-4" onClick={closeNav}>
                            {t("footer.Services.Land Freight")}</a>
                          </Link>
                        </li>
                        <li className="menu-dropdown-link mx-auto mx-lg-auto my-0 px-0">
                          <Link href="/seafreight"><a className="dropdown-item px-4" onClick={closeNav}>
                            {t("footer.Services.Sea Freight")}</a>
                          </Link>
                        </li>
                        <li className="menu-dropdown-link mx-auto mx-lg-auto my-0 px-0">
                          <Link href="/airfreight"><a className="dropdown-item px-4" onClick={closeNav}>
                            {t("footer.Services.Air Freight")}</a>
                          </Link>
                        </li>
                        <li className="menu-dropdown-link mx-auto mx-lg-auto my-0 px-0">
                          <Link href="/automotivelogistics"><a
                            className="dropdown-item px-4"
                            
                          onClick={closeNav}>
                            {t("footer.Services.Automotive Logistics")}</a>
                          </Link>
                        </li>
                        <li className="menu-dropdown-link mx-auto mx-lg-auto my-0 px-0">
                          <Link href="/warehousing"><a className="dropdown-item px-4" onClick={closeNav}>
                            {t("footer.Services.Warehousing")}</a>
                          </Link>
                        </li>
                        <li className="menu-dropdown-link mx-auto mx-lg-auto my-0 px-0">
                          <Link href="/customsclearance"><a
                            className="dropdown-item px-4"
                            
                          onClick={closeNav}>
                            
                            {t("footer.Services.Customs Clearance")}</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        router.asPath == "/contact" ? `${styles.active}` : ""
                      }
                      onClick={() =>
                        router.push("/contact") && closeNav()
                      }
                    >
                      {t("header.Navlinks.Contact")}
                    </li>
                  </ul>
                  <div
                    className={`${styles.l_quote} fs-3 px-4 py-2`}
                    onClick={() => router.push("/contact")}
                  >
                    {t("header.Request a quote")}
                  </div>
                </div>

                <div className={styles.buttons}>
                  <ReactFlagsSelect
                    className={styles.T_lang}
                    selected={select}
                    onSelect={onSelect}
                    placeholder={"English"}
                    selectedSize={"11px"}
                    optionsSize={"11px"}
                    countries={["US", "AE", "FR"]}
                    customLabels={{
                      US: "English",
                      AE: "العربية",
                      FR: "French",
                    }}
                    //            showSelectedLabel={showSelectedLabel}
                    // showOptionLabel={showOptionLabel}
                    // optionsSize={optionsSize}
                    // placeholder={placeholder}
                    // searchable={searchable}
                    // searchPlaceholder={searchPlaceholder}
                    // alignOptionsToRight={alignOptionsToRight}
                    // fullWidth={fullWidth}
                    // disabled={disabled}
                  />
                  <button
                    type="button"
                    className={`${styles.T_quote_btn}  `}
                    onClick={() => router.push("/contact")}
                  >
                    {t("header.Request a quote")}
                  </button>
                </div>

                {/* HAMBURGER */}
                <div
                  className={`${styles.hamburger} px-3`}
                  onClick={() => closeNav()}
                > 
                  <input className={styles.checkbox} type="checkbox" />
                  <div
                    className={
                      openNav
                        ? `${styles.hamburger_lines} ${styles.active}`
                        : `${styles.hamburger_lines}`
                    }
                  >
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* BLANK BACKGROUND */}
          {/* <div className="div"></div> */}
          <div
            className={
              openNav
                ? `${styles.blank_bg} ${styles.show}`
                : `${styles.blank_bg}`
            }
            onClick={() => setOpenNav(false)}
          ></div>
        </div>
      {/* </ReactHeadroom> */}
    </>
  );
}

export default Navbar;
