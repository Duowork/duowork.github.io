import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import sendContact from "../APIs/mailJet";

const subscribeFormInitValue = { email: "" };

const toastNotify = (alertType: string, message: string) => {
  if (alertType === "success") {
    toast.success(message, {
      hideProgressBar: true,
      theme: "light",
    });
  }

  if (alertType === "warning") {
    toast.warning(message, {
      hideProgressBar: true,
      theme: "light",
    });
  }

  if (alertType === "error") {
    toast.error(message, {
      hideProgressBar: true,
      theme: "light",
    });
  }
};

const validateForm = (input: { email: string }) => {
  const errors = {} as { email: string };
  let message: string;

  if (!input.email) {
    console.log(input.email);
    message = "Email field can not be empty 📭";

    toastNotify("error", message);
    // errors.email = message;
  } else if (input.email.length > 30) {
    message = "Email characters are too long 🤥";

    toastNotify("warning", message);
    // errors.email = message;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)) {
    message = "Invalid email address 👎🏿";

    // toastNotify("error", message);
    errors.email = message;
  }

  return errors;
};

export default function Footer() {
  const handleSubmit = async (values: any, { resetForm }: any) => {

    // Terminate request subsequent request if email value is empty
    if (!values.email) return;

    try {
      const data = {
        isExcludedFromCampaign: false,
        name: "Trailblazer",
        email: values.email,
      };

      const auth = `${process.env.GATSBY_MAILJET_PUBLIC_KEY}:${process.env.GATSBY_MAILJET_SECRET_KEY}`;

      sendContact("api/subscribe", "POST", auth, data, toastNotify);
    } catch (e) {
      const message = "Unable to send email!";
      toastNotify("error", message);
    }
  };

  return (
    <footer className="h-full">
      {/* <div
        id="#newsletter"
        className="newsletter bg-white flex flex-col md:flex-row items-center justify-evenly md:justify-around h-0 sm:h-40 mx-auto rounded-md shadow-xl"
      >
        <p
          id="newsletter-header"
          className="font-light w-[27rem] text-xl text-center md:text-3xl md:!w-[15rem]"
        >
          Subscribe To Our Newsletters
        </p>
        <Formik
          initialValues={subscribeFormInitValue}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="">
              <div className="newsletter__input-container border rounded-full pl-5 pr-2 py-2 h-20 flex items-center justify-between mb-3 sm:mb-0">
                <input
                  id="newsletter-input"
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="border-0 outline-0 w-full sm:self-left"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="Newsletter subscribe-btn text-sm hidden sm:block"
                >
                  Subscribe
                </button>
              </div>
              <small className="text-[0.7rem] text-red-300">
                {touched.email && errors.email}
              </small>
              <span className="block w-5 h-5 bg-green-400 rounded-full p-2 my-[0.5rem]"></span>
            </form>
          )}
        </Formik>
        <button
          id="mobile-subscribe-btn"
          type="button"
          className="block sm:hidden text-sm w-80 rounded-full py-3 mb-2"
        >
          Subscribe
        </button>
      </div> */}

      <div className="center p-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center md:justify-items-center gap-8">
        <div id="logo-container" className="text-white">
          <div
            id="logo"
            className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
          >
            <a href="/">
              <StaticImage src="../assets/logos/logo.png" alt="Duowork logo" />
            </a>
          </div>
          <p className="items text-sm">
           Tailor-made software for business success.
          </p>
          <p className="icons items">
            <a
              href="mailto:reach@duowork.tech"
              target={"_blank"}
              title="Email"
              className="flex items-center"
            >
              <Icon icon="mdi:email" className="text-gray-400 text-2xl mr-2" />
              reach@duowork.tech
            </a>
          </p>
          {/* <p className="icons items">
            <a
              href="tel:+2347030259781"
              target={"_blank"}
              title="Email"
              className="flex items-center"
            >
              <Icon icon="mdi:phone" className="text-gray-400 text-2xl mr-2" />
              +2347030259781
            </a>
          </p> */}
        </div>

        <div id="menu" className="text-white">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <div id="services">
            <p className="items">
              <Link to="/">Home</Link>
            </p>
            <p className="items">
              <Link to="/#portfolios">Portfolio</Link>
            </p>
            {/* <p className="items">
              <Link to="/blog">Blog</Link>
            </p> */}
            <p className="items">
              <Link to="/#contact">Contact us</Link>
            </p>
          </div>
        </div>

        <div id="service" className="text-white">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div id="services">
            <p className="items">
              <Link to="/#">Product Design</Link>
            </p>
            <p className="items">
              <Link to="/#">Mobile development</Link>
            </p>
            <p className="items">
              <Link to="/#">Web development</Link>
            </p>
            <p className="items">
              <Link to="/#">Business automation</Link>
            </p>
            <p className="items">
              <Link to="/#">Software consulting</Link>
            </p>
          </div>
        </div>

        <div id="contact" className="text-white">
          <h3 className="text-2xl font-semibold">Company</h3>
          <div
            id="company-icons"
            className="flex flex-col justify-between align-items flex-wrap"
          >
            <p className="items">
              <a href="/#" title="Contact us">
                About us
              </a>
            </p>
            <p className="icons items">
              <a href="/#" title="Terms and Condition">
                Terms & Condition
              </a>
            </p>
            <p className="icons items">
              <a href="/#" title="Privacy policy">
                Privacy policy
              </a>
            </p>
          </div>
          <p className="items">
            {/* <a href="#">Jobs</a> */}
          </p>
        </div>
      </div>

      <hr className="mx-5 border-1 border-white" />

      <div id="sm-copywrite" className="text-white py-5">
        <p className="text-sm font-light text-center text-white p-2">
          © 2023 Duowork | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
