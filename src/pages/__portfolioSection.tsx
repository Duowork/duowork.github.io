import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";
import Button from "../sharedComponents/Button";

type PortfolioDataArrType = {
  allPortfolioJson: { nodes: PortfolioDataType[] };
};

type PortfolioDataType = {
  id: string | number;
  jsonId: number;
  projectName: string;
  projectDescription: string;
  projectTag: string;
  projectLink: string;
  projectImage: ImageDataLike;
};

export default function PortfolioSection() {
  const { allPortfolioJson: portfolios }: PortfolioDataArrType = dataQuery();

  return (
    <section id="portfolios" className="w-auto h-auto px-2 sm:px-10 mb-20">
      <div className="section-heading">
        <span className="section-tag">Our Portfolio</span>
        <h2 id="portfolio-header" className="section-title">
          Project we've{" "}
          <span className="service-title__highlight bg-color-accent">
            worked on
          </span>
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
        {portfolios.nodes.map((portfolio: PortfolioDataType) => {
          const portfolioImage: any = getImage(portfolio.projectImage);

          return (
            <div
              className="portfolio-item flex flex-col md:flex-row items-center pt-10"
              key={portfolio.id}
            >
              <GatsbyImage
                image={portfolioImage}
                alt={portfolio.projectTag}
                className="portfolio-item__image w-6/12 h-80 rounded-xl max-w-full h-auto mb-10 md:mr-10"
              />

              <div className="portfolio-item__description-container | flex flex-col">
                <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                  {portfolio.projectName}
                </h3>
                <p className="portfolio-description w-80 py-5 text-md text-gray-500">
                  {portfolio.projectDescription}
                </p>
                <p className="portfolio-tag mb-10">{portfolio.projectTag}</p>
                <a
                  href={portfolio.projectLink}
                  target="_blank"
                  className="portfolio-link bg-color-secondary text-color-accent | flex items-center justify-center text-center text-sm font-light py-2 rounded-full self-center sm:self-start"
                  rel="noopener"
                >
                  View work{" "}
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="arrow-right-icon"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <Button
        btnType="button"
        isLink={true}
        linkTo="/contact"
        value="Hire us"
        btnClass="bg-color-accent text-color-secondary | block mx-auto text-sm font-medium px-7 py-5 w-[195px] h-[50px] rounded-[1.75rem] py-[0] px-[0.5rem]"
      />
    </section>
  );
}

export function dataQuery() {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        nodes {
          id
          jsonId
          projectName
          projectDescription
          projectTag
          projectLink
          projectImage {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                height: 350
              )
            }
          }
        }
      }
    }
  `);

  return data;
}
