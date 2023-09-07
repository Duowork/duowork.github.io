import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../../../sharedComponents/SEO";
import Layout from "../../../layouts/layout";
import {
  AllWpCategoriesPageType,
  AllCategoriesType,
} from "../../../../data/types/allCategoriesPageTypes";
import blogCategoriesImages from "../../../../data/blogCategoriesImages";

export const Head = () => <SEO title="Blog Categories" />;

export default function category({ data }: any) {
  const AllWpcategories: AllWpCategoriesPageType[] = data.allWpCategory.nodes;
  let allCategories: AllCategoriesType[] = [];

  // Abstract categories data to include images
  AllWpcategories.forEach((category, _) => {
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
      <section className="categoryPage | lg:px-[70px] overflow-x-hidden mb-[260px] px-[20px]">
        <div className="breadcrumb-nav mb-10   pt-5 text-center text-sm">
          <Link to="/" className="custom-text-dark">
            Home
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <Link to={`/blog`} className="">
            {" "}
            <small>Blog</small>
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <small className="text-[#939498]">All categories</small>
        </div>
        <div className="flex justify-center items-center flex-col">
          {allCategories.length === 0 ? null : (
            <>
              {" "}
              <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
                Categories
              </h1>
              <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] my-10">
                Explore all blog categories. There is something for you!
              </p>
            </>
          )}
        </div>
        <div className=" flex flex-row flex-wrap gap-2 lg:gap-[30px] items-center ">
          {allCategories.length === 0 ? (
            <p className="w-full flex items-center justify-center text-gray-400 text-2xl h-[30rem]">
              No category available
            </p>
          ) : (
            allCategories.map((category, _) => {
              return (
                <div
                  key={category.id}
                  className="border border-[#9dff51] hover:border-none hover:shadow-xl rounded-xl p-[16px] w-full sm:w-[48%] lg:w-[31%] h-fit "
                >
                  <Link to={`/blog/categories/${category.name.toLowerCase()}`}>
                    <div
                      className={`w-full h-[15rem] rounded-md bg-cover bg-left flex items-center justify-center relative`}
                      style={{ backgroundImage: `url('${category.image}')` }}
                    >
                      <h1 className="text-center text-2xl px-2 py-[0.2rem] leading-[20px] my-5 text-gray-600 font-semibold text-white leading-normal z-10">
                        {category.name.toUpperCase()}
                      </h1>
                      <div
                        className="overlay | absolute w-full h-full rounded-md"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                      ></div>
                    </div>
                    <p className="w-full text-[#232426] text-md font-medium mb-[20px] line-clamp-2 pt-4">
                      {category.description}
                    </p>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query blogPosts {
    allWpCategory {
      nodes {
        id
        name
        slug
        uri
        description
      }
    }
  }
`;
