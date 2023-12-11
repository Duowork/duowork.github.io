import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ServiceSection() {
  return (
    <section id="services" className="my-20">
    <div className="section-heading">
      <span className="section-tag">Our Services</span>
      <h2 id="service-header" className="section-title">
        What{" "}
        <span className="service-title__highlight | custom-bg-green-accent">
          we offer
        </span>
      </h2>

      <p className="section-description">
        Unlock your business potential with our tailor-made software
        solutions. From custom web and mobile applications to cloud
        development and e-commerce platforms, we deliver high-quality
        solutions that drive growth and innovation.
      </p>
    </div>

    <div
      id="services-section__services"
      className="px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8"
    >
      <div
        id="product-design-service"
        className="services basis-1/3 rounded-xl p-7"
      >
        <div className="service-icon w-full">
          <StaticImage
            src="../assets/icons/ui-ux.png"
            alt="Product design icon"
            width={40}
            height={40}
          />
        </div>

        <div className="service-description">
          <h3 className="text-white text-xl font-semibold py-4">
            <span className="underline-green-accent">UI/UX</span> Design
          </h3>

          <p className="text-white font-light">
            We develop designs that encapsulate business idea and
            requirement through procedural designs for optimized interfacing
            and overall user experience.
          </p>
        </div>
      </div>

      <div
        id="mobile-development-service"
        className="services basis-1/3 p-7 rounded-xl"
      >
        <div className="service-icon w-full">
          <StaticImage
            src="../assets/icons/mobile-dev.png"
            alt="Product design icon"
            width={40}
            height={40}
          />
        </div>

        <div className="service-description">
          <h3 className="text-white text-xl font-semibold py-4">
            <span className="underline-green-accent">Mobile</span>{" "}
            Development
          </h3>

          <p className="text-white font-light">
            We offer mobile app development solutions for business looking
            to boost their operation and reach more customers. using top
            tech solutions, we create tailored solutions that help you reach
            you goals.
          </p>
        </div>
      </div>

      <div
        id="frontend-development-service"
        className="services basis-1/3 rounded-xl p-7"
      >
        <div className="service-icon w-full">
          <StaticImage
            src="../assets/icons/fe-dev.png"
            alt="Product design icon"
            width={40}
            height={40}
          />
        </div>

        <div className="service-description">
          <h3 className="text-white text-xl font-semibold py-4">
            <span className="underline-green-accent">Front</span>-end
            development
          </h3>

          <p className="text-white">
            Secure, scalable and visually compelling front-end, back-end and
            full-stack development solution that is expressive of business
            requirements and reaching possible results of business
            operations.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 flex flex-col md:flex-row justify-center h-auto hidden lg:flex">
        <div
          id="backend-development-service"
          className="services basis-1/3 rounded-xl p-7 mb-7 md:mb-0 md:mr-7"
        >
          <div className="service-icon w-full">
            <StaticImage
              src="../assets/icons/be-dev.png"
              alt="Product design icon"
              width={40}
              height={40}
            />
          </div>

          <div className="service-description">
            <h3 className="text-white text-xl font-semibold py-4">
              <span className="underline-green-accent">Back</span>-end API
              development
            </h3>

            <p className="text-white">
              We create powerful server-side applications. From database design 
              and optimization to API development, we ensure your system runs efficiently and securely.
            </p>
          </div>
        </div>

        <div
          id="fullstack-development-service"
          className="services basis-1/3 rounded-xl p-7"
        >
          <div className="service-icon w-full">
            <StaticImage
              src="../assets/icons/fs-dev.png"
              alt="Full-stack development icon"
              width={40}
              height={40}
            />
          </div>

          <div className="service-description">
            <h3 className="text-white text-xl font-semibold py-4">
              <span className="underline-green-accent">Full</span>-stack
              development
            </h3>

            <p className="text-white">
            We bridge the gap between front-end and back-end with
            our Fullstack Development proficiency. We'll handle everything
            from crafting intuitive user interfaces to implementing robust
            server logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
