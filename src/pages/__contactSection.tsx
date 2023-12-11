import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react'

export default function ContactSection() {
  return (
    <section id="contact" className="h-auto px-5 sm:px-10 mb-40">
    <div
      id="contact-section__details"
      className="max-w-[950px] h-[30rem] mx-auto rounded-xl flex flex-col text-center px-5 sm:px-0 sm:text-left sm:flex-row items-center justify-center mb-10"
    >
      <div
        id="how-to-contact"
        className="flex flex-col justify-between items-center px-5 text-white text-md"
      >
        <h1 id="header" className="text-4xl sm:text-5xl font-semibold mb-2">
          Get In Touch
        </h1>
        <p id="description" className="my-5">
          We're available to attend to you. Reach out to us today:
        </p>

        <p className="contact-us-ways mb-5">
          Fill{" "}
          <Link to="/contact">
            <span className="border-b-2 hover:border-b-4 border-solid border-[#9eff51]">
              contact form
            </span>{" "}
            and tell us about the project.
          </Link>
        </p>

        <div className="contact-us-ways h-auto mb-5">
          <p className="font-regular p-1 mb-2">Reach us on social media:</p>

          <div
            id="contact-icons"
            className="flex flex-row justify-around align-items flex-wrap"
          >
            <div className="icons items">
              <a
                href="https://twitter.com/duoworkhq"
                target={"_blank"}
                className="text-green-700 text-2xl"
              >
                <Icon icon="mdi:twitter" />
              </a>
            </div>

            <div className="icons items">
              <a
                href="https://www.linkedin.com/company/duowork/"
                target={"_blank"}
                className="text-green-700 text-2xl"
              >
                <Icon icon="mdi:linkedin" />
              </a>
            </div>

            <div className="icons items">
              <a
                href="https://instagram.com/duoworkhq"
                target={"_blank"}
                className="text-green-700 text-2xl"
              >
                <Icon icon="mdi:instagram" />
              </a>
            </div>
          </div>
        </div>

        <p className="font-regular leading-snug mb-2">
          Want to send us an email instead?
        </p>
        <a
          href="mailto:reach@duowork.tech"
          className="custom-bg-green-accent rounded-full !px-4 !py-2 text-black"
        >
          reach@duowork.tech
        </a>
      </div>
      <StaticImage
        src="../assets/images/contact-page-image.jpeg"
        alt=""
        width={350}
        height={350}
        className="rounded-md !hidden lg:!block"
      />
    </div>
  </section>
  )
}
