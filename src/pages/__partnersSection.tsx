import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function PartnerSection() {
  return (
<section id="partners" className="h-[55rem] sm:h-[35rem]">
        <div className="section-heading">
          <span className="section-tag">
            Our partners
          </span>
          <h3 className="section-title">
            The Brands{" "}
            <span className="service-title__highlight">
              we work with
            </span>
          </h3>
          <p className="section-description">
            We've collaborated with industry-specific brands and companies to
            create comprehensive solutions, drive mutual success and unlock new
            opportunities in our quest.
          </p>
        </div>

        <div className="brand-container | flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-[50rem] h-auto mx-auto">
          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center sm:mr-10 mb-4 sm:mb-0 border-2 border-white rounded-xl border-green-500 rounded-xl p-3"
          >
            <StaticImage
              src="../assets/images/testimonial-image.jpeg"
              alt=""
              className="tool-image mb-2"
              width={100}
              height={100}
            />
            <div className="brand-name | text-sm font-semibold custom-text-dark text-center sm:tex-left underline">
              Stripe
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center sm:mr-10 mb-4 sm:mb-0 border-2 border-white rounded-xl border-green-500 rounded-xl p-3"
          >
            <StaticImage
              src="../assets/images/testimonial-image.jpeg"
              alt=""
              className="tool-image mb-2"
              width={100}
              height={100}
            />
            <div className="brand-name | text-sm font-semibold custom-text-dark text-center sm:tex-left underline">
              Policy Vault
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center sm:mr-10 mb-4 sm:mb-0 border-2 border-white rounded-xl border-green-500 rounded-xl p-3"
          >
            <StaticImage
              src="../assets/images/testimonial-image.jpeg"
              alt=""
              className="tool-image mb-2"
              width={100}
              height={100}
            />
            <div className="brand-name | text-sm font-semibold custom-text-dark text-center sm:tex-left underline">
              Monarch
            </div>
          </a>
        </div>
      </section>
  )
}
