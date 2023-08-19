import React, { useRef } from "react";
import styles from "../../styles/HomeStyling/Quote.module.scss";
import GeneralHeading from "../Common/GeneralHeading";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";

function Quote() {
  const { t } = useTranslation("homepage");
  let refernce = "homepage.contact form.";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hcv09hy",
        "template_k3c7fsn",
        form.current,
        "lRHuUBBINbghfyc0F"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert(
            "Your email is send to RFG Logistics.We will get back to you soon!,Thanks you"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className={styles.quote}>
        <div className="container">
          <div className={styles.form_holder}>
            <GeneralHeading
              small_Title={t(`${refernce}Sub Heading`)}
              large_Title={t(`${refernce}Heading`)}
            />
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="form-control"
                type="text"
                placeholder={t(`${refernce}Name`)}
                name="name"
                required
              />
              <input
                className="form-control"
                type="email"
                placeholder={t(`${refernce}Email`)}
                name="email"
                required
              />
              <select className={`form-select ${styles.arrow}`}  name="service_type" required>
                <option selected>
                  {t(`${refernce}Select Group.Selected`)}
                </option>
                <option value="1">
                  {t(`${refernce}Select Group.Freight Services`)}
                </option>
                <option value="2">
                  {t(`${refernce}Select Group.Custom Clearance`)}
                </option>
                <option value="3">
                  {t(`${refernce}Select Group.Warehousing`)}
                </option>
                <option value="4">
                  {t(`${refernce}Select Group.Other Services`)}
                </option>
              </select>
              <input
                className="form-control"
                type="number"
                placeholder={t(`${refernce}Phone Number`)}
                name="number"
                required
              />
              <textarea
                className="form-control"
                rows="4"
                placeholder={t(`${refernce}Message`)}
                name="message"
                required
              />
              <button
                type="submit"
                className="btn  fs-3 px-4 py-3 px-md-5 py-md-3 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
