import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "gatsby";

export default function NavMobile() {
  // Navigation ref
  const mobileNavRef = useRef<HTMLElement>(null);
  const mobileNavElem = mobileNavRef.current;

  const [showNav, setShowNav] = useState(false);

  if (showNav) {
    mobileNavElem?.classList.add("mobile-nav-container");
  } else {
    mobileNavElem?.classList.remove("mobile-nav-container");
  }

  const closeNav = () => setShowNav(false);

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });
  });

  return (
    <nav id="mobile-nav" className="flex md:!hidden" ref={mobileNavRef}>
      <div id="open-close-icons" className="p-2 rounded">
        <button
          type="button"
          className="mobile-nav-init | block w-full h-fulll text-2xl"
          title="Open nav menu"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <Icon
            id="navInitOpen"
            icon="heroicons-outline:menu-alt-3"
            className="block custom-text-dark"
          />
        </button>
      </div>

      <ul id="mobile-nav-items" className="">
        <li className="nav-item-link">
          <Link to="/" className="link">
            Home <Icon icon="iconamoon:home-fill" className="link-icon" />
          </Link>
        </li>
        <li className="nav-item-link">
          <Link to="#portfolio" className="link">
            Portfolio <Icon icon="dashicons:portfolio" className="link-icon" />
          </Link>
        </li>
        <li className="nav-item-link">
          <Link to="#contact" className="link">
            Service <Icon icon="ri:shake-hands-fill" className="link-icon" />
          </Link>
        </li>
        <li className="nav-item-link">
          <Link to="/blog" className="link">
            Blog <Icon icon="material-symbols:news" className="link-icon" />
          </Link>
        </li>
        <li className="nav-item-link" onClick={closeNav}>
          <Link
            to="#contact"
            className="h-full flex items-center justify-center"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
