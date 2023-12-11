import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../layouts/layout";
import Nav from "../sharedComponents/navMenu/Nav";
import IntroSection from "./__IntroSection";
import ServiceSection from "./__serviceSection";
import ToolsSection from "./__toolsSection";
import PortfolioSection from "./__portfolioSection";
import ProcessSection from "./__processSection";
import ContactSection from "./__contactSection";
import SEO from "../sharedComponents/SEO";

export const Head = () => <SEO title="Home" />;

export default function LandingPage({ location }: any) {
  // JSON data for team, testimonial and tools section
  const { allToolsJson } = dataQuery();

  return (
    <Layout>
      {/* Menu navigation */}
      <Nav />

      {/* Intro */}
      <IntroSection />

      {/* Service */}
      <ServiceSection />

      {/* <TestimonialsSection testimonials={allTestimonialsJson.nodes} /> */}

      {/* Project portfolio */}
      <PortfolioSection />

      {/* Process */}
      <ProcessSection />

      {/* Project tools */}
      <ToolsSection toolsStack={allToolsJson.nodes} />

      {/* Contact */}
      <ContactSection />

      {/* Partners */}
    </Layout>
  );
}

export function dataQuery() {
  const data = useStaticQuery(graphql`
    query {
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
