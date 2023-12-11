import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby";
import heroImage2 from "../assets/images/hero-image2.jpeg";
import heroImage1 from "../assets/images/hero-image4.jpeg";

export default function IntroSection() {
  return (
    <section
        id="hero-section"
        className="h-[40rem] md:h-[50rem] lg:h-[45rem]"
        style={{
          backgroundImage: `url(${heroImage2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `top`,
          backgroundSize: `cover`,
        }}
      >

        <div id="overlay" className="!h-full">
          <div
            id="hero-container"
            className="flex flex-col item-center justify-center h-full"
          >
            <h1
              id="hero-title"
              className="text-white text-2xl md:text-4xl lg:text-6xl text-center font-bold w-3/4 self-center"
            >
              Tailor-made Software and Design Solution for{" "}
              <span className="custom-bg-green-accent text-black px-2">
                Business Success
              </span>
            </h1>
            <p
              id="hero-description"
              className="text-white text-center mt-10 self-center text-lg px-[2.25rem] sm:px-0 font-light max-w-[35rem] sm:w-1/2"
            >
              We help businesses and startups build and manage their digital
              ideas through custom design and software solutions.
            </p>

            <Link
              to="/contact"
              id="hero-button"
              className="flex items-center mt-10 w-auto self-center text-white rounded-xl cta-btn"
              title="Get started"
              type="button"
            >
              <span id="button-text" className="text-center">
                Talk to us
              </span>{" "}
              <span
                id="right-arrow"
                className="text-center rounded-tr-xl rounded-br-xl"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
  )
}
