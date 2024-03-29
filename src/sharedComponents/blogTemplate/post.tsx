/*Blog post template for dynamic content generated from Wordpress.*/

import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";

import AuthorBio from "./AuthorBio";
import Layout from "../../layouts/layout";
import SEO from "../SEO";

export const Head = ({ data }: any) => {
  const post = data.post;
  const blogThumbnailImage = getSrc(post.featuredImage.node.gatsbyImage);

  return (
    <SEO title="Blog" description={post.title} image={blogThumbnailImage} />
  );
};

export default function Posts({ data }: any) {
  const { post, allAuthorsJson: staticAuthorsData } = data;

  const firstName: string = post.author.node.firstName;
  const postExcerpt = { __html: post.excerpt };
  const postContent = { __html: post.content };
  const bannerImage: any = getImage(post.featuredImage.node.gatsbyImage);
  const postTag = post.tags.nodes.length !== 0 ? post.tags.nodes[0].name : "";

  // Static author data
  const author = staticAuthorsData.nodes.filter(
    (author: any) => author.firstName.toLowerCase() === firstName.toLowerCase(),
  )[0];

  const authorImage: any = getImage(
    author.image?.childImageSharp.gatsbyImageData,
  );

  return (
    <Layout>
      <article
        id="blog-post-container"
        className="flex flex-col items-center mb-60"
      >
        <header id="post-header" className="mb-10 max-w-[700px] px-10 sm:px-0">
          <div className="breadcrumb-nav mb-20 pt-5 text-center text-sm">
            <Link to="/" className="custom-text-dark">
              Home
            </Link>
            <small className="mx-1 text-gray-300">{">"}</small>{" "}
            <Link to="/blog">
              <small>Blog</small>
            </Link>
            <small className="mx-1 text-gray-300">{">"}</small>{" "}
            <small className="text-[#939498] line-clamp-1">{post.title}</small>
          </div>

          <span
            id="post-highlight"
            className={
              post.tags.nodes.length !== 0
                ? "custom-bg-green-accent | text-[0.8rem] rounded !px-2 !py-1 capitalize"
                : ""
            }
          >
            {postTag}
          </span>

          <h1
            id="post-title"
            className="text-2xl md:text-3xl font-semibold my-5 max-w-[600px]"
          >
            {post.title}
          </h1>

          <div
            id="post-author-and-date"
            className="flex flex-row items-center my-5"
          >
            <div id="post-author" className="mr-5 flex items-center">
              <GatsbyImage
                image={authorImage && authorImage}
                alt={firstName && firstName}
                className="w-10 h-10 rounded-full ml-2 object-cover mr-2"
              />{" "}
              <small>{author && author.fullName}</small>
            </div>

            <div id="post-date">
              {/* Logic should update date (in bracket as show below) when post is updated */}
              <small className="text-gray-400">
                {post.date}
                {/* (updated July 01, 2023) */}
              </small>
            </div>
          </div>

          <GatsbyImage
            image={bannerImage}
            className="rounded-md"
            alt="image"
          ></GatsbyImage>

          <small
            id="post-excerpt"
            className="block text-[0.8rem] my-5 w"
            dangerouslySetInnerHTML={postExcerpt}
          />
        </header>

        <section
          id="post-content"
          className="max-w-[700px] px-10 sm:px-0"
          dangerouslySetInnerHTML={postContent}
        />

        <AuthorBio data={{ author }} />
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
      slug
      excerpt
      content
      date(formatString: "MMMM DD, Y")
      featuredImage {
        node {
          altText
          caption
          gatsbyImage(width: 700, height: 400, fit: COVER, placeholder: BLURRED)
        }
      }
      status
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
      author {
        node {
          firstName
        }
      }
    }
    allAuthorsJson {
      nodes {
        id
        firstName
        fullName
        email
        bio
        accounts {
          website
          twitter
          instagram
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
