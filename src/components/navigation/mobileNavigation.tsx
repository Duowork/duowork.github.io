import React, { useRef, useState, useEffect } from "react";
import {
  PiListLight,
  PiHouseLight,
  PiBriefcaseLight,
  PiHandshakeLight,
  PiNewspaper,
  PiArticleLight,
} from "react-icons/pi";
// import formStyle from "./mobileNavStyle.module.scss"

/*---------------------------------------------------------------------------*/

export default function MobileNavigation() {
  // Navigation ref
  const mobileNavRef = useRef<HTMLElement>(null);
  const mobileNavElem = mobileNavRef.current;

  const [showNav, setShowNav] = useState(false);

  if (showNav) {
    mobileNavElem?.classList.add("mobileNavContainer");
  } else {
    mobileNavElem?.classList.remove("mobileNavContainer");
  }

  const closeNav = () => setShowNav(false);

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });
  });

  return (
    <nav id="mobile-nav" className={`flex md:!hidden`} ref={mobileNavRef}>

      <div id="open-close-icons" className={`p-2 rounded openCloseIcons`}>
        <button
          type="button"
          className="mobile-nav-init | block w-full h-fulll text-2xl"
          title="Open nav menu"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <PiListLight
            id="navInitOpen"
            size="2rem"
            className="block custom-text-dark"
          />
        </button>
      </div>

      <ul id="mobile-nav-items">
        <li className="nav-item-link">
          <a href="/" className="link">
            Home <PiHouseLight size="2rem" className="link-icon" />
          </a>
        </li>
        <li className="nav-item-link">
          <a href="#portfolio" className="link">
            Portfolio <PiBriefcaseLight size="2rem" className="link-icon" />
          </a>
        </li>
        <li className="nav-item-link">
          <a href="#contact" className="link">
            Service <PiHandshakeLight size="2rem" className="link-icon" />
          </a>
        </li>
        {/* <li className="nav-item-link">
          <a href="/blog" className="link">
            Blog <PiNewspaper size="2rem" className="link-icon" />
          </a>
        </li> */}
        <li className="nav-item-link" onClick={closeNav}>
          <a
            href="#contact"
            className="h-full flex items-center justify-center"
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
