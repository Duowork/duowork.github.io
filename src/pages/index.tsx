import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../layouts/layout";
import SEO from "../sharedComponents/SEO";
import Nav from "../sharedComponents/navMenu/Nav";
import Button from "../sharedComponents/Button";
import ToolsSection from "./__toolsSection";
import { Icon } from "@iconify/react";

// Media assets
import heroImage2 from "../assets/images/hero-image2.jpeg";
import heroImage4 from "../assets/images/hero-image4.jpeg";

export const Head = () => <SEO title="Home" />;

export default function LandingPage({ location }: any) {
  // JSON data for team, testimonial and tools section
  const { allTeamsJson, allTestimonialsJson, allToolsJson } = dataQuery();

  return (
    <Layout>
      <section
        id="hero-section"
        className="h-[40rem] md:h-[50rem] lg:h-[45rem]"
        style={{
          backgroundImage: `url(${heroImage4})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `top`,
          backgroundSize: `cover`,
        }}
      >

        <div id="overlay" className="!h-full">
          <Nav />

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

      <section id="services-section" className="my-20">
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

      {/* <TestimonialsSection testimonials={allTestimonialsJson.nodes} /> */}

      <section
        id="portfolio-section"
        className="w-auto h-auto px-2 sm:px-10 mb-20"
      >
        <div className="section-heading">
          <span className="section-tag">Our Portfolio</span>
          <h2 id="portfolio-header" className="section-title">
            Project we've{" "}
            <span className="service-title__highlight">worked on</span>
          </h2>

          <p className="section-description">
            Explore our impressive portfolio of successful solutions. Our
            expertise showcases through delivering innovative, user-centric, and
            scalable software with aim of helping the clients achieve their
            objectives. We can bring you vision to life and drive your business
            forward.
          </p>
        </div>

        <div
          id="portfolio"
          className="flex flex-col items-center justify-center mb-10"
        >
          <div className="portfolio-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <StaticImage
              src="../assets/images/portfolio/Ebonybeauty2.jpeg"
              alt="A screenshort of a website landing page"
              className="portfolio-item__image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-xl"
            />
            <div className="portfolio-item__description-container">
              <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                Ebony Beauty
              </h3>
              <p className="portfolio-description w-80 py-5 text-md text-gray-500">
                Ebony beauty is a lagos-based retail store with aim to be the
                ultimate destination for beauty products.
              </p>
              <p className="portfolio-tag mb-10">E-commerce web app</p>
              <a
                href="https://ebonybeautyhaven.com/"
                target="_blank"
                className="portfolio-link | flex items-center justify-center text-center text-sm font-light py-2 rounded-full"
                rel="noopener"
              >
                View work <Icon icon="solar:alt-arrow-right-linear" />
              </a>
            </div>
          </div>

          <div className="portfolio-item flex flex-col-reverse sm:flex-col md:flex-row items-center sm:ml-20 pt-10">
            <div className="portfolio-item__description-container">
              <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                Larks podcast
              </h3>
              <p className="portfolio-description w-80 py-5">
                Larks Podcast is a contemporary podcast that's more about the
                "laffs" than the "feels."
              </p>
              <p className="portfolio-tag mb-10">Podcasting web app</p>
              <a
                href="https://larkspodcast.com"
                target="_blank"
                className="portfolio-link | flex items-center justify-center text-center text-sm rounded-full"
                rel="noopener"
              >
                View work <Icon icon="solar:alt-arrow-right-linear" />
              </a>
            </div>
            <StaticImage
              src="../assets/images/portfolio/larks-banner2.png"
              alt="A screenshort of a website landing page"
              className="portfolio-item__image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-xl"
            />
          </div>

          <div className="portfolio-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <StaticImage
              src="../assets/images/portfolio/AdeolaAzeez2.jpeg"
              alt="A screenshort of a website landing page"
              className="portfolio-item__image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-xl"
            />
            <div className="portfolio-item__description-container">
              <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                Adeola Azeez
              </h3>
              <p className="portfolio-description w-80 py-5">
                A political campaign web presence for Adeola Azeez.
              </p>
              <p className="portfolio-tag mb-10">website</p>
              <a
                href="https://adeolaazeez.com/"
                target="_blank"
                className="portfolio-link | flex items-center justify-center text-center text-sm rounded-full"
                rel="noopener"
              >
                View work <Icon icon="solar:alt-arrow-right-linear" />
              </a>
            </div>
          </div>
        </div>

        <Button
          btnType="button"
          isLink={true}
          linkTo="/contact"
          value="Hire us"
          btnClass="custom-bg-green-accent custom-text-dark | block mx-auto text-sm font-medium px-7 py-5 w-[195px] h-[50px] rounded-[1.75rem]"
        />
      </section>

      {/* <section id="team-section" className="px-10  h-auto pb-10 pt-10 sm:pt-20 mb-40 h-auto">
        <div className="section-heading">
          <span className="section-tag">
            Our Team
          </span>
          <h3 className="section-title">
            Meet{" "}
            <span className="service-title__highlight">
              The Team
            </span>
          </h3>
          <p className="section-description">
            Meet our dedicated team of skilled developers, designers, and tech enthusiasts. 
            With a passion for excellence, we work together to bring your digital ideas to life, 
            ensuring top-notch quality, seamless user experiences, and on-time project delivery
          </p>
        </div>

        <div
          id="team-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
        >
          {allTeamsJson.nodes.length > 0 && allTeamsJson.nodes.map((team: any) => {
            const image = getImage(team.teamMemberImage);

            return (
              <div className="team-card" key={team.id}>
              <div className="team-card__image">
                {image !== undefined?(<GatsbyImage
                  image={image}
                  alt="testimonials__card-image"
                />):(<img src={image} alt={team.teamMemberName} className="testimonials__card-image"/>)}
              </div>
            <div className="team-card__body | px-5 py-2">
              <h4 className="team-card__name | text-1xl">{team.teamMemberName}</h4>
              <small className="team-card__role | text-gray-500 font-light">
               {team.teamMemberRole}
              </small>
            </div>
          </div>
            )
          })}
        </div>
      </section> */}

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

      <ToolsSection toolsStack={allToolsJson.nodes} />

      <section id="contact-section" className="h-auto px-5 sm:px-10 mb-40">
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

      {/* <section id="partners-section" className="h-[55rem] sm:h-[35rem]">
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
      </section> */}
    </Layout>
  );
}

type quertDataType = [
  {
    id: string;
    clientName: string;
    clientCompany: string;
    clientImage: any;
    clientQuote: string;
  },
];

export function dataQuery() {
  const data = useStaticQuery(graphql`
    query {
      allTestimonialsJson {
        nodes {
          id
          clientName
          clientCompany
          clientImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          clientQuote
        }
      }
      allTeamsJson {
        nodes {
          id
          teamMemberName
          teamMemberRole
          teamMemberImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allToolsJson {
        nodes {
          id
          category
          tools {
            name
            logo {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return data;
}
