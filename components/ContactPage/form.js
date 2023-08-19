import React, { useRef } from "react";
import styles from "../../styles/ContactPage/index.module.scss";
import GeneralHeading from "../Common/GeneralHeading";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";

function Form() {
  const { t } = useTranslation("contactpage");
  let refernce = "contactpage.contact form.";

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
      <div className={styles.quotes}>
        <div className="container">
          <div className={styles.form_holder}>
            <GeneralHeading
              small_Title={t(`${refernce}Sub Heading`)}
              large_Title={t(`${refernce}Heading`)}
            />
            <form ref={form} onSubmit={sendEmail} class="row g-2 w-100">
              <input
                className="form-contro col-sm-5"
                type="text"
                placeholder={t(`${refernce}Name`)}
                name="name"
                required
              />
              <input
                className="form-contro col-sm-5"
                type="email"
                placeholder={t(`${refernce}Email`)}
                name="email"
                required
              />
              <select
                className={`form-select col-sm-5 ${styles.arrow}`}
                name="service_type"
                required
              >
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
                className="form-contro col-sm-5"
                type="number"
                placeholder={t(`${refernce}Phone Number`)}
                name="number"
                required
              />
              <textarea
                className="form-contro col-sm-5"
                rows="4"
                placeholder={t(`${refernce}Message`)}
                name="message"
                required
              />
              <div className="form-submit-btn  d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn  fs-3 px-4 py-3 px-md-5 py-md-3 mx-0"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
