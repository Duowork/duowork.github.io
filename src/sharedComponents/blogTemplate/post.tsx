/*Blog post template for dynamic content generated from Wordpress.
 

import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Layout from "../../layouts/layout";
import Head from "../Head";

export const head = () => <Head />;

export default function Posts() {
  return (
    <Layout>
      <article id="blog-post-container">
        <header id="post-header"></header>
        <section id="post-content"></section>
      </article>
    </Layout>
  );
}

export const postPageQuery = graphql`
  # id is passed into the page context via createPage function in gatsby-node.ts
  query blogPostQuery($id: String!) {
    # Select blog post by id
    post: wpPost(id: { eq: $id }) {
      id
      title
      excerpt
      status
      uri
      date(formatString: "MMMM DD, Y")
      tags {
        nodes {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          caption
          gatsbyImage(width: 100, height: 100, fit: COVER, placeholder: BLURRED)
        }
      }
      author {
        node {
          name
        }
      }
      content
    }
  }
`;*/
