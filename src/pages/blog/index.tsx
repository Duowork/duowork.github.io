import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../layouts/layout";
import SEO from "../../sharedComponents/SEO";
import {
  AllWpCategoriesPageType,
  AllCategoriesType,
} from "../../data/types/allCategoriesPageTypes";
import blogCategoriesImages from "../../data/blogCategoriesImages";

export default function Blog({ data }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //
  const posts = data.allWpPost.nodes;

  let allCategories: AllCategoriesType[] = [];
  const allWpCategories: AllWpCategoriesPageType[] =
    data.allWpCategory.nodes.slice(0, 6);

  // Featured posts
  const featuredPosts = posts.filter((post: any, _: any) => {
    if (post.tags.nodes.length !== 0) {
      return (
        post.tags.nodes[0].name === "featured" ||
        post.tags.nodes[0].name === "highlight"
      );
    }
  });

  // Latest. Fetch 3 resent posts
  const latestPosts = posts.slice(0, 3);
 
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current slide index every 5 seconds
      setCurrentSlide((prevSlide) => (prevSlide + 1) % latestPosts.length);
    }, 5000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Abstract categories data to include images
  allWpCategories.forEach((category, _) => {
    if (category.name.toLowerCase() !== "uncategorized") {
      const categoryName: string = category.name.toLocaleLowerCase();
      const image: string = blogCategoriesImages[categoryName];

      const categoryData = {
        id: category["id"],
        name: categoryName,
        slug: category["slug"],
        description: category["description"],
        image: image,
      };

      allCategories.push(categoryData);
    }
  });

  return (
    <Layout>
      <section className=" w-full  blogSectionBegins ">
        <div className=" px-[20px] md:px-[50px] lg:px-[90px] flex justify-center items-center flex-col">
          <div className="breadcrumb-nav mb-10   pt-5 text-center text-sm">
            <Link to="/" className="custom-text-dark">
              Home
            </Link>
            <small className="mx-1 text-gray-300">{">"}</small>{" "}
            <small className="text-[#939498]">Blog</small>
          </div>
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-10">
            Blog
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] mb-[15px] md:mb-[80px]">
            Stay ahead of the curve with expert insights, industry updates, and
            thought-provoking articles. Get insider knowledge and spark your
            creativity with our exciting content!
          </p>

          {/* Latest blog post as slides */}
          <div className="slider">
            <div
              className="slides-wrapper"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {latestPosts.map((post: any) => {
                const sliderImage: any = getImage(
                  post.featuredImage.node.gatsbyImage,
                );
                const highlightedPostTag = post.categories.nodes[0].name;

                return (
                  <div
                    key={post.id}
                    className="slide | rounded-sm overflow-hidden flex mb-[76px] text-white items-center h-[350px] md:h-[450px]"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="h-full w-full relative rounded-sm"
                    >
                      <GatsbyImage
                        image={sliderImage}
                        alt={post.featuredImage.node.altText}
                        className="absolute top-0 rounded-sm overflow-hidden  left-0 w-full h-full object-cover"
                      />

                      <div className="absolute bgStyle  h-full  top-0 left-0 w-full"></div>

                      <div className="absolute bottom-[10px] md:bottom-[49px] pl-[10px] md:pl-[40px]">
                        <div className="rounded-[100px] md:mb-[16px] mb-[8px] text-black bg-[#9EFF51] py-2 md:py-6 w-fit h-[32px] px-[12px] flex justify-center items-center">
                          {" "}
                          <span className="w-[6px] h-[6px] rounded-full mr-[6px] bg-[#222222]"></span>{" "}
                          <span className="text-xs md:text-base">
                            {" "}
                            {highlightedPostTag}{" "}
                          </span>
                        </div>
                        <h1 className="md:font-[600] font-[400] text-[15px]  sm:text-[25px] md:text-[36px] md:leading-[44px] text-left max-w-[816px] mb-[14px] md:mb-[24px]">
                          {post.title}
                        </h1>
                        <div className="flex items-center justify-start gap-[15px]">
                          <img
                            src={post.author.node.avatar.url}
                            alt={post.author.node.name}
                            className="w-[40px]  h-[40px] rounded-full object-cover mr-[10px]"
                          />
                          <div>
                            <p>{post.author.node.name}</p>
                            <div className="flex justify-center items-center">
                              {" "}
                              <small className="font-[600] text-[10px] md:text-[16px] leading-[19px]">
                                {post.date}
                              </small>{" "}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[35px] md:w-[59px] flex justify-center items-center h-[35px]  md:h-[47px]  text-black bg-[#26311d] absolute bottom-0 right-[5px]"></div>
                      <div className="w-[40px] md:w-[64px] flex justify-center items-center h-[40px]  md:h-[58px]  text-black bg-[#78985e] absolute bottom-0 right-[11px]"></div>

                      <div className="w-[45px] md:w-[70px]  flex justify-center items-center  md:h-[58px] h-[40px]  text-black bg-[#9EFF51] absolute bottom-0 right-[21px]">
                        <div className="flex w-fit h-fit items-start justify-center">
                          <h1 className="text-[10px] md:text-[25px] font-[700]">
                            0{currentSlide + 1}
                          </h1>
                          <div className="h-[10px] md:h-[20px] my-auto w-[1px] rotate-[5deg]  bg-gray-700"></div>
                          <h1 className="text-[8px] md:text-[12.8571px] pt-1 text-[#222222] font-[500]">
                            {latestPosts.length}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow down below slider */}
          <h1 className="text-3xl mb-[20px] md:mb-[71px]">&#8595;</h1>

          <div className="w-full h-fit font-[600] text-[24px]  items-center  justify-between flex ">
            <div className="flex w-fit  h-fit gap-[10px] justify-center items-center">
              {" "}
              <h1 className="hidden md:flex text-[13px] sm:text-[24px] md:font-semibold md:text-[24px] md:leading-[32px] ">
                Browse The Category{" "}
              </h1>{" "}
              <div className="mt-[3px] md:mt-[10px] w-[35px] h-[1px] bg-black"></div>
            </div>
            <Link to={"/blog/categories"}>
              <div className="flex gap-[8px] h-fit  w-fit  justify-center items-center">
                <h1 className="text-[13px] sm:text-[24px] font-medium md:text-[24px] md:leading-[32px]">
                  see all category &#8594;
                </h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex mb-[50px] justify-evenly items-center h-fit w-full gap-[41px]">
          <div className="relative flex flex-col  justify-center items-center pt-[10px] md:pt-[60px] w-[98vw] h-fit ">
            <div className="w-full h-1/2  mx-auto my-auto overflow-x-hidden ">
              <div
                className={`w-full px-[20px] flex flex-wrap md:flex-nowrap h-full my-auto  items-center justify-center  flex-row gap-3`}
              >
                {allCategories.map((category: any, idx: number) => (
                  <div
                    key={`${category.id}-${idx}`}
                    className={`w-[150px] h-[200px] relative overflow-hidden rounded-md bg-purple-300`}
                  >
                    {" "}
                    <Link
                      to={`/blog/categories/${category.name.toLowerCase()}`}
                    >
                      <img
                        src={category.image}
                        className="w-full absolute top-0 right-0 h-full object-cover"
                        alt=""
                      />{" "}
                      <div className="absolute bgStyle2 flex justify-center items-center w-full h-full top-0 left-0 ">
                        <h1 className="relative text-white text-center">
                          {category.name.toUpperCase()}
                        </h1>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="  px-[20px] md:px-[50px] lg:[90px] w-full">
          <h1 className="font-[600] text-[20px] sm:text-[24px] my-20 text-center">
            Featured
          </h1>

          {/* Highlighted posts. */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-[223px] gap-[56px]">
            {featuredPosts.map((post: any, _: any) => {
              type TagsDataType = { name: string };
              type TagsObjDataType = { [key: string]: string };

              const tagsObj = {} as TagsObjDataType;
              const tags: TagsDataType[] = post.tags.nodes;

              //  Convert tags array to object.
              tags.forEach((tag, _) => (tagsObj[tag.name] = tag.name));

              const highlightedPostImage: any = getImage(
                post.featuredImage.node.gatsbyImage,
              );

              // Featured but highlighted post
              if (tagsObj.highlight) {
                return (
                  <div
                    className={`${tagsObj.highlight} | w-full`}
                    key={post.id}
                  >
                    <Link to={`/blog/${post.slug}`} className="h-full w-full">
                      <GatsbyImage
                        image={highlightedPostImage}
                        alt={post.featuredImage.node.altText}
                        className="w-full rounded-[8px] h-[300px] mb-[32px] object-cover"
                        objectFit="cover"
                        backgroundColor="bg-black"
                      />
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex items-center text-[12px]">
                          <img
                            src={post.author.node.avatar.url}
                            alt={post.author.node.avatar.title}
                            className="w-[40px]  h-[40px] rounded-full object-cover mr-[10px]"
                          />
                          <div className="text-gray-500">
                            <span className="text-[14px] font-[500]">
                              {post.author.node.name}
                            </span>
                            <span
                              className="mx-1 font-bold text-2xl"
                              style={{ verticalAlign: "text-bottom" }}
                            >
                              .
                            </span>
                            <span> {post.date}</span>
                          </div>
                        </div>
                        <h1 className="font-[600] mb-[12px] text-[24px] text-left">
                          {post.title}
                        </h1>
                        <p
                          className=" text-left mb-5 text-[16px] line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt,
                          }}
                        />
                        <div className="bg-[#9eff51] rounded-[4px] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                          <Link
                            to={`/blog/${post.slug}`}
                            type="button"
                            className="text-md"
                          >
                            Explore &#8599;
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }

              return null;
            })}

            {/* Featured post */}
            <div className="w-full flex flex-col items-center justify-between gap-10">
              {featuredPosts.map((post: any, _: any) => {
                type TagsDataType = { name: string };
                type TagsObjDataType = { [key: string]: string };

                const tagsObj = {} as TagsObjDataType;
                const tags: TagsDataType[] = post.tags.nodes;
                const featuredImage: any = getImage(
                  post.featuredImage.node.gatsbyImage,
                );
                const postExercpt = { __html: post.excerpt };

                //  Convert tags array to object.
                tags.forEach((tag, _) => (tagsObj[tag.name] = tag.name));

                if (tagsObj.featured) {
                  return (
                    <div
                      key={post.id}
                      className={`${tagsObj.featured} | sm:h-fit w-full h-fit`}
                    >
                      <div className="flex flex-col sm:flex-row w-full gap-[24px] h-fit ">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="w-full sm:w-[60%]"
                        >
                          <GatsbyImage
                            image={featuredImage}
                            alt={post.featuredImage.node.altText}
                            className="w-full h-fit rounded-[8px] object-fit"
                          />
                        </Link>

                        <div className="w-full sm:w-[39%]">
                          <div className="flex justify-start items-center text-[12px]">
                            <img
                              src={post.author.node.avatar.url}
                              alt={post.author.node.name}
                              className="w-[40px]  h-[40px] rounded-full object-cover mr-[10px]"
                            />

                            <div className="text-gray-500">
                              <span className="text-[14px] font-[500]">
                                {post.author.node.name}
                              </span>

                              <span
                                className="mx-1 font-bold text-2xl"
                                style={{ verticalAlign: "text-bottom" }}
                              >
                                .
                              </span>

                              <span> {post.date}</span>
                            </div>
                          </div>

                          <h1 className="text-left font-[600] my-5 text-[18px] line-clamp-2">
                            {post.title}
                          </h1>

                          <p
                            className="text-left text-sm font-medium mb-5 line-clamp-2"
                            dangerouslySetInnerHTML={postExercpt}
                          />
                          <div className="bg-[#9eff51] rounded-[4px] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                            <Link
                              to={`/blog/${post.slug}`}
                              type="button"
                              className="text-md"
                            >
                              Explore &#8599;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => <SEO title="Blog" />;

export const query = graphql`
  query blogPosts {
    allWpPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        slug
        excerpt
        content
        date(formatString: "MMMM DD, Y")
        featuredImage {
          node {
            altText
            gatsbyImage(
              width: 600
              height: 400
              fit: CONTAIN
              placeholder: BLURRED
            )
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
            id
            name
            description
          }
        }
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
    allWpCategory {
      nodes {
        id
        name
        uri
      }
    }
  }
`;
