import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="h-full">
      <div className="news-letter bg-white flex flex-col md:flex-row items-center justify-evenly md:justify-around w-3/4 h-40 mx-auto rounded-md shadow-inner">
        <p className="font-light w-[27rem] text-xl text-center md:text-3xl md:!w-[15rem]">Subscribe To Our Newsletters</p>
        <div className="news-letter__input-container border rounded-full pl-5 pr-2 py-2 h-20 flex items-center justify-between">
          <input type="email" placeholder="Enter your mail" className="border-0 outline-0" />
          <button type="button" title="Newsletter subscribe button text-sm font-light">Subscribe</button>
        </div>
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
              href="mailto:reach.duoworkhq@gmail.com"
              target={"_blank"}
              title="Email"
            >
              <i className="fa fa-envelope fa-1x" aria-hidden="true"></i>{" "}
              reach.duoworkhq@gmail.com
            </a>
          </p>
          <p className="icons items">
            <a href="tel:+2347030259781" target={"_blank"} title="Email">
              <i className="fa fa-phone fa-1x" aria-hidden="true"></i>{" "}
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
