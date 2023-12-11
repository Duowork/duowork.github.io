import React, {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement,
  ReactNode,
} from "react";

import Nav from "../sharedComponents/navMenu/Nav";
import NavMobile from "../sharedComponents/navMenu/NavMobile";
import Footer from "../sharedComponents/Footer";

import { ToastContainer } from "react-toastify";
import customCursor from "../utils/customCursor";
import "react-toastify/dist/ReactToastify.min.css";

type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  // Custom cursor ref
  const cursorDotRef = useRef<HTMLImageElement>(null);
  const cursorDotOutlineRef = useRef<HTMLImageElement>(null);

  const [showAltNav, setShowAltNav] = useState(false);

  useEffect((): any => {
    let componentIsMounted = true;

    if (componentIsMounted) {
      // Invoke custom cursor function
      customCursor(cursorDotRef, cursorDotOutlineRef);
    }

    if (typeof window !== "undefined") setShowAltNav(!showAltNav);

    return () => (componentIsMounted = false);
  }, []);

  const modifyClassName = (child: ReactNode) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, {
        className: `${child.props.className || ""} ${
          showAltNav && window.location.pathname !== "/" ? "mt-20" : null
        }`,
      } as any);
    }

    return child;
  };

  return (
    <main id="duowork">
      {/* Desktop navigation */}
      {showAltNav && window.location.pathname !== "/" ? <Nav /> : null}

      {/* Mobile navigation */}
      <NavMobile />

      {/* Map over and modify each child with a 'mt-20' style value to the 'className attribute' */}
      {Children.map(children, modifyClassName)}

      <Footer />

      {/* Toast notification container for when form is submitted */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Custom cursor elements */}
      {/* <div className="cursor-dot text-white" ref={cursorDotRef}></div>
      <div
        className="cursor-dot-outline text-white"
        ref={cursorDotOutlineRef}
      ></div> */}
    </main>
  );
}
