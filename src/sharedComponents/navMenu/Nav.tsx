import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../Button";

export default function Nav(): React.ReactElement | null {
  const location = typeof window !== "undefined" ? window.location : undefined;

  return (
    <nav
      className={`landing-page-nav__general text-white flex flex-row justify-between ml-10 mr-10 mt-5`}
    >
      <div
        id="logo-container"
        className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center landing-page-nav__item-left"
      >
        <Link to="/">
          <StaticImage
            src="../../assets/logos/logo.png"
            alt="Website logo, duowork"
            id="logo"
          />
        </Link>
      </div>

      <ul
        id="nav-items"
        className={`hidden md:flex flex-row justify-between landing-page-nav__item-center ${
          location?.pathname === "/" ? "text-white" : "text-black"
        }`}
      >
        <li className="nav-item-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item-link">
          <Link to="/#portfolio-section">Portfolio</Link>
        </li>
        <li className="nav-item-link">
          <Link to="/#services-section">Service</Link>
        </li>
        <li className="nav-item-link">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center justify-evenly w-[20%] landing-page-nav__item-right">
        <div id="cta-nav-item-contact" className="nav-item-link">
          <Button
            value="Contact us"
            btnClass="cta-btn nav-contact-cta"
            isLink={true}
            linkTo="/contact"
          />
        </div>

        {/* <div id="language-selector">
          <button
            className="language-selector__button btn"
            aria-label="english Select your language"
            aria-expanded="false"
            aria-controls="language-selector-dropdown"
            type="button"
          >
            <div className="flex items-center justify-center">
              <span
                aria-hidden="true"
                className="w-auto h-auto mr-2 language-selector__flag"
              >
                <StaticImage
                  src="../../assets/svgs/english.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full"
                />
              </span>
              <span className="language-selector__label">eng</span>
            </div>
          </button>
        </div> */}
      </div>
    </nav>
  );
}
