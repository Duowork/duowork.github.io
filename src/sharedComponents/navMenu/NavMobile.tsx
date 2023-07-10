import React, {useRef} from 'react'
import { Link } from 'gatsby'

import navBurgerBar from "../../assets/icons/navbar-burger-solid.svg"
import navXmark from "../../assets/icons/navbar-xmark-solid.svg"

export default function NavMobile() {
    // Navigation ref
  const navInitOpen = useRef<HTMLImageElement>(null)
  const navInitClose = useRef<HTMLImageElement>(null)
  const mobileNav = useRef<HTMLElement>(null)

  const handleToggle = (e: any) => {
    e.preventDefault()
    const mobileNavElem = mobileNav.current

    if (e.target.attributes[0].nodeValue === "navInitOpen") {
      if (mobileNavElem !== null) {
        mobileNavElem.classList.add("mobile-nav-container")

        if (navInitOpen.current !== null && navInitClose.current !== null) {
          // Hide menu bar
          navInitOpen.current.style.display = "none"

          // show X mark
          navInitClose.current.style.display = "block"
        }
      }
    } else if (e.target.attributes[0].nodeValue === "navInitClose") {
      // Else it'll be 'navInitClose'

      if (mobileNavElem !== null) {
        if (mobileNavElem.classList.contains("mobile-nav-container")) {
          // Remove class that shows nav
          mobileNavElem.classList.remove("mobile-nav-container")

          if (navInitOpen.current !== null && navInitClose.current !== null) {
            // Hide X mark
            navInitClose.current.style.display = "none"

            // Show menu bar
            navInitOpen.current.style.display = "block"
          }
        }
      }
    }
  }

  return (
    <nav id="mobile-nav" className="flex md:!hidden" ref={mobileNav}>
        {/* <div id="movile-nav-container"> */}
        <div id="open-close-icons" className="p-2 rounded">
          <a
            id="openMobileNav"
            href="#"
            className="block"
            onClick={e => handleToggle(e)}
          >
            <img
              id="navInitOpen"
              src={navBurgerBar}
              alt="Navbar open icon"
              className="mobile-nav-init block"
              ref={navInitOpen}
            />
          </a>

          <a
            id="closeMobileNav"
            href="#"
            className="block"
            onClick={e => handleToggle(e)}
          >
            <img
              id="navInitClose"
              src={navXmark}
              alt="Navbar close icon"
              className="mobile-nav-init hidden"
              ref={navInitClose}
            />
          </a>
        </div>

        <ul id="mobile-nav-items" className="">
          <li className="nav-item-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item-link">
            <Link to="#our-work">Our work</Link>
          </li>
          <li className="nav-item-link">
            <Link to="#our-services">Service</Link>
          </li>
          <li className="nav-item-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-item-link">
            <Link
              to="#contact-duowork"
              className="h-full flex items-center justify-center"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </nav>
  )
}
