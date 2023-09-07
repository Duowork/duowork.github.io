import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../../layouts/layout";
import SEO from "../../../sharedComponents/SEO";

export const Head = () => <SEO title="Blog Category" />;

export default function categoryBlogs({ data, params }: any) {
  const categoryName = data.wpCategory.name
    const categoryPosts = data.wpCategory.posts.nodes;

  // console.log(params.name, data.wpCategory.name);
  
  const samplepostarray = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12];

  return (
    <Layout>
      <section className="lg:px-[70px] overflow-x-hidden mb-[260px] px-[20px] categoryPage ">
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
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[#222222] text-[45px] mb-[8px] capitalize">
            {categoryName}
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, tempora eligendi obcaecati maxime dignissimos sequi
            aspernatur quibusdam laborum vel exercitationem.
          </p>
        </div>
        <div className=" flex flex-row flex-wrap gap-2 lg:gap-[30px] items-center ">
          {categoryPosts.map((post: any, _:any) => {
            const postImage: any = getImage(post.featuredImage.node.gatsbyImage)
            return (
              <div className="border-[1px]  border-[#f2f2f2] rounded-xl p-[16px] w-full sm:w-[48%] lg:w-[31%] h-fit" key={post.id}>
                <Link to={`/blog/categories/${categoryName.toLowerCase()}/${post.title}`}>
                  <GatsbyImage
                    image={postImage}
                    alt={post.featuredImage.node.altText}
                    className="w-full object-cover h-[15rem] rounded-[6px]"
                  />

                  <small className="inline-block text-sm px-2 py-[0.2rem] leading-[20px] bg-[#95de2836] rounded-full my-5 text-gray-600">
                  {categoryName.toLowerCase()}
                  </small>
                  <h2 className="font-[500] w-full text-md text-[#232426] mb-2 line-clamp-3">
                    {post.title}
                  </h2>

                  <div className="flex justify-between items-center w-full text-gray-500 text-md">
                    <div className="flex w-fit items-center ">
                      <StaticImage
                        src="../../../assets/images/img7.jpg"
                        className="md:w-[36px] w-[25px] rounded-full mr-1 md:mr-[12px] h-[25px] md:h-[36px]"
                        alt=""
                      />
                      <small className="leading-[24px]">{post.author.node.name}</small>
                    </div>
                    <small className="w-fit md:leading-[24px]">{post.date}</small>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
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
                width: 400
                height: 600
                fit: COVER
                placeholder: BLURRED
              )
            }
          }
          status
          author {
            node {
              id
              name
              uri
            }
          }
        }
      }
    }
  }
`;
