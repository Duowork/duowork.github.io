import { Icon } from "@iconify/react";
import { Formik } from "formik";
import validateForm from "./validateForm";
import footerStyle from "./footerStyle.module.scss";
import logo from "../../assets/logo.png"

export default function Footer() {
  const footerYear = new Date().getFullYear()

  const services = [
    "Product design",
    "mobile development",
    "web development",
    "Business automation",
    "Software development",
  ];
  const menu = ["Home", "Portfolio", "Contact us"];
  const company = ["About us", "Terms & Condition", "Privacy policy"];

  return (
    <footer className={`h-full ${footerStyle.footer}`}>
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
          initialValues={{email: ""}}
          onSubmit={() => {}}
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
            id={footerStyle.logo}
            className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
          >
            <a href="/" title="Duowork logo">
              <img src={logo.src} alt="Duowork logo" />
            </a>
          </div>
          <p className="text-sm my-4">
            Tailor-made software for business success.
          </p>
          <p className={`icons ${footerStyle.items}`}>
            <a
              href="mailto:reach@duowork.tech"
              target={"_blank"}
              title="Email"
              className="flex items-center"
            >
              //@ts-ignore
              <Icon icon="mdi:email" className="text-gray-400 text-2xl mr-2" />
              reach@duowork.tech
            </a>
          </p>
        </div>

        <div id="menu" className="text-white">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <div id="menu">
            {menu.map((item, idx) => (
              <>
                <p key={idx} className={footerStyle.items}>
                  <a href="/#">{item}</a>
                </p>
              </>
            ))}
          </div>
        </div>

        <div id="service" className="text-white">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div id="services">
            {services.map((service, idx) => (
              <>
                <p key={idx} className={footerStyle.items}>
                  <a href="/#">{service}</a>
                </p>
              </>
            ))}
          </div>
        </div>

        <div id="company" className="text-white">
          <h3 className="text-2xl font-semibold">Company</h3>
          <div
            id="company-icons"
            className="flex flex-col justify-between align-items flex-wrap"
          >
            {company.map((item, idx) => (
              <>
                <p key={idx} className={footerStyle.items}>
                  <a href="/#">{item}</a>
                </p>
              </>
            ))}
          </div>
          <p className="items">{/* <a href="#">Jobs</a> */}</p>
        </div>
      </div>

      <hr className="mx-5 border-1 border-white" />

      <div id="sm-copywrite" className="text-white py-5">
        <p className="text-sm font-light text-center text-white p-2">
          © {footerYear} Duowork | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
