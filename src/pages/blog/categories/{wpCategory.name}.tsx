import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../../layouts/layout";
import SEO from "../../../sharedComponents/SEO";
import categoryLongDescription from "../../../data/categoryLongDescription";

export const Head = () => <SEO title="Blog Category" />;

export default function categoryBlogs({ data, params }: any) {
  const categoryName = data.wpCategory.name.toLowerCase();
  const categoryPosts = data.wpCategory.posts.nodes;

  const longDescription = (categoryName: string) => {
    switch (categoryName) {
      case "design":
        return categoryLongDescription[categoryName];
      case "marketing":
        return categoryLongDescription[categoryName];
      case "duowork":
        return categoryLongDescription[categoryName];
      case "software development":
        return categoryLongDescription[categoryName];
      case "startup":
        return categoryLongDescription[categoryName];
      case "founder":
        return categoryLongDescription[categoryName];
      case "use-cases":
        return categoryLongDescription[categoryName];
      default:
        return "";
    }
  };

  console.log(data);

  return (
    <Layout>
      <section className="lg:px-[70px] overflow-x-hidden mb-[260px] px-[20px] categoryPage ">
        {/* Bread crumb links */}
        <div className="breadcrumb-nav mb-10   pt-5 text-center text-sm">
          <Link to="/" className="custom-text-dark">
            <small>Home</small>
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <Link to={`/blog`} className="custom-text-dark">
            {" "}
            <small>Blog</small>
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <Link to={`/blog/categories`} className="custom-text-dark">
            {" "}
            <small>Categories</small>
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <small className="text-[#939498]">{categoryName}</small>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#222222] text-[45px] mb-[8px] capitalize">
            {categoryName}
          </h1>
          {categoryPosts.length === 0 ? null : (
            <p className="text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] mb-[80px]">
              {longDescription(categoryName)}
            </p>
          )}
        </div>

        {categoryPosts.length === 0 ? (
          <div className="h-[20rem] text-gray-400 text-2xl flex items-center justify-center p-2">
            No post available in this category ... yet 🙃
          </div>
        ) : (
          <div className=" flex flex-row flex-wrap gap-2 lg:gap-[30px] items-center ">
            {categoryPosts.map((post: any, _: any) => {
              const postImage: any = getImage(
                post.featuredImage.node.gatsbyImage,
              );

              return (
                <div
                  className="border-[1px]  border-[#f2f2f2] rounded-xl p-[16px] w-full sm:w-[48%] lg:w-[31%] h-fit"
                  key={post.id}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <GatsbyImage
                      image={postImage}
                      alt={post.featuredImage.node.altText}
                      className="w-full h-[15rem] rounded-[6px] block mx-auto"
                    />

                    <small className="inline-block text-sm px-2 py-[0.2rem] leading-[20px] bg-[#95de2836] rounded-full my-5 text-gray-600">
                      {categoryName}
                    </small>
                    <h2 className="font-[500] w-full text-md text-[#232426] mb-2 line-clamp-3">
                      {post.title}
                    </h2>

                    <div className="flex justify-between items-center w-full text-gray-500 text-md">
                      <div className="flex w-fit items-center ">
                        <img
                          src={post.author.node.avatar.url}
                          className="md:w-[36px] w-[25px] rounded-full mr-1 md:mr-[12px] h-[25px] md:h-[36px]"
                          alt=""
                        />
                        <small className="leading-[24px]">
                          {post.author.node.name}
                        </small>
                      </div>
                      <small className="w-fit md:leading-[24px]">
                        {post.date}
                      </small>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* <button className="md:py-[14px]  py-[7px] mt-5 md:my-1 mx-auto flex px-[24px] rounded-[6px] border-[1px] border-[#8cbf40] mb-[160px] text-[#8cbf40] ">
          Load More
        </button> */}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query blogPost($id: String) {
    wpCategory(id: { eq: $id }) {
      name
      posts {
        nodes {
          id
          title
          slug
          excerpt
          content
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              altText
              gatsbyImage(
                width: 600
                height: 400
                fit: COVER
                placeholder: BLURRED
              )
            }
          }
          status
          author {
            node {
              name
              email
              avatar {
                url
                width
                height
              }
              description
            }
          }
        }
      }
    }
  }
`;
