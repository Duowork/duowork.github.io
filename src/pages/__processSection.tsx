import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ProcessSection() {
  return (
    <section
        id="process-section"
        className="px-10 custom-bg-dark h-auto pb-10 pt-10 sm:pt-20 mb-20"
      >
        <div className="section-heading">
          <h3 className="section-title | text-white">
            Our{" "}
            <span className="service-title__highlight custom-text-dark">
              work process
            </span>
          </h3>
          <p className="section-description | !text-white">
            Experience a streamlined and collaborative work process tailored to
            your needs. From project planning and requirement gathering to agile
            development and rigorous testing, our transparent approach ensures
            your vision is brought to reality smoothly and efficiently.
          </p>
        </div>

        <div
          id="process-container"
          className="grid grid-cols-1 md:grid-cols-2 justify-evenly justify-items-center gap-8"
        >
          <div id="discovery-scope-process" className="process">
            <div className="process-title">
              <StaticImage
                src="../assets/icons/discovery-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title">
                <span className="custom-underline-green-accent">Disc</span>overy
                & Scope
              </strong>
            </div>
            <p className="process-description text-gray-700">
              We believe in near-perfection but only when we understand what you
              the goal is. Here we gather information on the solution you want
              to solve, business requirement you want to meet and the processes
              you want automated. This allow us to build within the right
              confinement.
            </p>
          </div>

          <div id="prototyping-design" className="process">
            <div className="process-title">
              <StaticImage
                src="../assets/icons/design-prototype-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title">
                <span className="custom-underline-green-accent">Des</span>ign &
                Prototype
              </strong>
            </div>
            <p className="process-description text-gray-700">
              We bring over the knowledge gained from the scope and discovery
              phase and create early designs and/or then the Minimum Viable
              Product (MVP) to test the vision idea.
            </p>
          </div>

          <div id="project-development-process" className="process">
            <div className="process-title">
              <StaticImage
                src="../assets/icons/project-development-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title">
                <span className="custom-underline-green-accent">Pro</span>ject
                Development
              </strong>
            </div>
            <p className="process-description text-gray-700">
              In the development phase, we run a full cycle development intended
              to implement the full solution and requirements. We build and test
              so the project is as solid as possible to go live.
            </p>
          </div>

          <div id="launch-maintenance-process" className="process">
            <div className="process-title">
              <StaticImage
                src="../assets/icons/launch-training-maintenance-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title">
                <span className="custom-underline-green-accent">lau</span>nch,
                Training & Maintenance
              </strong>
            </div>
            <p className="process-description text-gray-700">
              This is where the solution is ready to go live. We launch the
              project and conduct an onboarding training for staff. We provide
              support and are always available for future project modifications
            </p>
          </div>
        </div>
      </section>
  )
}
