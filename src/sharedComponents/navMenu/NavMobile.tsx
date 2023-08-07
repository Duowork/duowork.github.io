import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { Link } from "gatsby";


export default function NavMobile() {
  // Navigation ref
  const navInitOpen = useRef<any>(null);
  const navInitClose = useRef<any>(null);
  const mobileNav = useRef<HTMLElement>(null);

  const handleToggle = (e: any) => {
    e.preventDefault();
    const mobileNavElem = mobileNav.current;
    const targetElement = e.target;

    if (
      targetElement.attributes.id.nodeValue === "navInitOpen"
    ) {
      if (mobileNavElem !== null) {
        mobileNavElem.classList.add("mobile-nav-container");

        if (navInitOpen.current !== null && navInitClose.current !== null) {
          // Hide menu bar
          navInitOpen.current.style.display = "none";

          // show X mark
          navInitClose.current.style.display = "block";
        }
      }
    } else if (
      targetElement.attributes.id.nodeValue === "navInitClose"
    ) {
      // Else it'll be 'navInitClose'

      if (mobileNavElem !== null) {
        if (mobileNavElem.classList.contains("mobile-nav-container")) {
          // Remove class that shows nav
          mobileNavElem.classList.remove("mobile-nav-container");

          if (navInitOpen.current !== null && navInitClose.current !== null) {
            // Hide X mark
            navInitClose.current.style.display = "none";

            // Show menu bar
            navInitOpen.current.style.display = "block";
          }
        }
      }
    }
  };

  return (
    <nav id="mobile-nav" className="flex md:!hidden" ref={mobileNav}>
      {/* <div id="movile-nav-container"> */}
      <div id="open-close-icons" className="p-2 rounded">
        <button
          type="button"
          id="openMobileNav"
          className="block"
          title="Open nav menu"
          onClick={(e) => handleToggle(e)}
        >
          {/* <img
              id="navInitOpen"
              src={navBurgerBar}
              alt="Navbar open icon"
              className="mobile-nav-init block"
              ref={navInitOpen}
            /> */}
          <Icon
            icon="eva:menu-2-fill"
            id="navInitOpen"
            className="mobile-nav-init | block w-full h-full text-2xl custom-text-dark"
            ref={navInitOpen}
            style={{fontSize: "1.5rem !important"}}
          />
        </button>

        <button
          type="button"
          id="closeMobileNav"
          className="block"
          title="Open nav menu"
          onClick={(e) => handleToggle(e)}
        >
          {/* <img
              id="navInitClose"
              src={navXmark}
              alt="Navbar close icon"
              className="mobile-nav-init hidden"
              ref={navInitClose}
            /> */}

          <Icon
            icon="eva:menu-2-fill"
            id="navInitClose"
            className="mobile-nav-init | hidden w-full h-full text-2xl custom-text-dark"
            ref={navInitClose}
            style={{fontSize: "1.5rem !important"}}
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
          <Link to="#portfolio-section" className="link">
            Portfolio <Icon icon="dashicons:portfolio" className="link-icon" />
          </Link>
        </li>
        <li className="nav-item-link">
          <Link to="#contact-section" className="link">
            Service <Icon icon="ri:shake-hands-fill" className="link-icon" />
          </Link>
        </li>
        <li className="nav-item-link">
          {/* <Link to="/blog" className="link">
            Blog <Icon icon="material-symbols:news" className="link-icon" />
          </Link> */}
        </li>
        <li className="nav-item-link">
          <Link
            to="#contact-section"
            className="h-full flex items-center justify-center"
          >
            Contact us
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
}
