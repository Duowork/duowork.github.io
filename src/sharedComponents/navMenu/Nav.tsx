import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../Button";

export default function Nav(): React.ReactElement | null {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect((): any => {

    const detectIfCurrentSectionVisited = () => {
      const scrollTop = window.scrollY;

      // Change nav menu background when scroll > 800px
      if (scrollTop > 80) {
        document
          .querySelector("#desktop-nav-menu")
          ?.classList.add("nav-shadow-on-scroll");
      } else {
        document
          .querySelector("#desktop-nav-menu")
          ?.classList.remove("nav-shadow-on-scroll");
      }
    };

    document.addEventListener("scroll", detectIfCurrentSectionVisited);

    // Check if window object is accessible
    if (typeof window !== "undefined") setIsBrowser(!isBrowser);
  }, []);

  const isHome = isBrowser && window.location.pathname === "/";

  return (
    <nav
      id="desktop-nav-menu"
      className={`text-white flex flex-row justify-between px-10 py-4 md:py-2`}
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
        className={`hidden md:flex flex-row justify-between nav-menu__item-center ${
          isHome ? "text-white" : "text-black"
        }`}
      >
        <li className="nav-item-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item-link">
          <Link to="/#portfolios">Portfolio</Link>
        </li>
        <li className="nav-item-link">
          <Link to="/#services">Service</Link>
        </li>
        <li className="nav-item-link">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center justify-evenly nav-menu__item-right">
        <div id="cta-nav-item-contact" className="nav-item-link">
          <Button
            value="Contact us"
            btnClass="cta-btn nav-contact-cta"
            isLink={true}
            linkTo="/contact"
          />
        </div>
      </div>
    </nav>
  );
}
