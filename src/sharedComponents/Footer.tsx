import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    message: {
      message: "",
      color: "",
    },
    error: "",
  });

  const handleSubmit = async () => {
    setState((state) => ({ ...state, isLoading: true }));

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // match email
    if (state.email === "") {
      setState((state) => ({
        ...state,
        isLoading: false,
        message: {
          message: "Email field can not be empty 👎🏿",
          color: "text-red-800",
        },
      }));
      return;
    }

    if (emailRegex.test(state.email) === false) {
      console.log(emailRegex.test(state.email));
      setState((state) => ({
        ...state,
        isLoading: false,
        message: {
          message: "Invalid email 👎🏿",
          color: "text-red-800",
        },
      }));
      return;
    }

    try {
      const res = await fetch("/api/subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          name: "Lark",
          campaign: { campaignId: "f1jOH" },
          email: state.email,
        }),
      }).then((data) => data.json());

      // Email added to contact list.
      if (res.status === 202) {
        setState((state) => ({
          ...state,
          isLoading: false,
          email: "",
          message: {
            message: "You're now subscribed! TTYS 🎉📱",
            color: "text-green-800",
          },
        }));
      }

      // Conflict with data. Possibly data already exist.
      if (res.status === 409) {
        setState((state) => ({
          ...state,
          isLoading: false,
          email: "",
          message: {
            message: "This email is aready subscribed 👎🏿",
            color: "text-red-800",
          },
        }));
      }

      if (res.status === 500) {
        setState((state) => ({
          ...state,
          isLoading: false,
          email: "",
          message: {
            message: "There seem to be problem! Try again later ⏳",
            color: "text-red-800",
          },
        }));
      }
    } catch (e) {
      setState((state) => ({
        ...state,
        isLoading: false,
        email: "",
        message: {
          message: "Unable to send email!",
          color: "text-red-800",
        },
      }));
    }
  };

  return (
    <footer className="h-full">
      <div className="newsletter bg-white flex flex-col md:flex-row items-center justify-evenly md:justify-around h-40 mx-auto rounded-md shadow-xl">
        <p
          id="newsletter-header"
          className="font-light w-[27rem] text-xl text-center md:text-3xl md:!w-[15rem]"
        >
          Subscribe To Our Newsletters
        </p>
        <div className="newsletter__input-container border rounded-full pl-5 pr-2 py-2 h-20 flex items-center justify-between mb-3 sm:mb-0">
          <input
            type="email"
            placeholder="Enter your mail"
            className="border-0 outline-0 w-full sm:self-left"
          />
          <button
            type="button"
            className="Newsletter subscribe-btn text-sm hidden sm:block"
          >
            Subscribe
          </button>
        </div>
        <button
          id="mobile-subscribe-btn"
          type="button"
          className="block sm:hidden text-sm w-80 rounded-full py-3 mb-2"
        >
          Subscribe
        </button>
      </div>

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
            We help businesses and startups build and manage their digital ideas
            througn custom software solutions.
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
          <p className="icons items">
            <a
              href="tel:+2347030259781"
              target={"_blank"}
              title="Email"
              className="flex items-center"
            >
              <Icon icon="mdi:phone" className="text-gray-400 text-2xl mr-2" />
              +2347030259781
            </a>
          </p>
        </div>

        <div id="menu" className="text-white">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <div id="services">
            <p className="items">
              <Link to="/">Home</Link>
            </p>
            <p className="items">
              <Link to="/#our-work">Portfolio</Link>
            </p>
            <p className="items">
              <Link to="/blog">Blog</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Contact us</Link>
            </p>
          </div>
        </div>

        <div id="service" className="text-white">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div id="services">
            <p className="items">
              <Link to="/#our-services">Product Design</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Mobile development</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Web development</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Business automation</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Software consulting</Link>
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
              <a href="/contact" title="Contact us">
                About us
              </a>
            </p>
            <p className="icons items">
              <a href="#" title="Terms and Condition">
                Terms & Condition
              </a>
            </p>
            <p className="icons items">
              <a href="#" title="Privacy policy">
                Privacy policy
              </a>
            </p>
          </div>
          <p className="items">
            <a href="#">Jobs</a>
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
