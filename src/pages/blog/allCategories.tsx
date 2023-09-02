import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../../sharedComponents/SEO";
import Layout from "../../layouts/layout";

export default function category() {
  const samplepostarray = [
    {
      category: "design",
      description: "Unleash Creativity, Elevate Experiences 💡",
      image: "https://images.pexels.com/photos/3184612/pexels-photo-3184612.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      category: "software development",
      description: "Innovate with Confidence, Code with Clarity 💻",
      image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      category: "startup",
      description: "From Idea to Unicorn - Your Startup Resource 🌟",
      image: "https://images.pexels.com/photos/7550298/pexels-photo-7550298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      category: "duowork",
      description: "Tailor-made design and software for business 🚀",
      image: "/Duowork.webp"
    },
    {
      category: "founder",
      description: "Navigate the Entrepreneurial Journey ⚡️",
      image: "https://images.pexels.com/photos/8067769/pexels-photo-8067769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      category: "marketing",
      description: "Unlock Growth, Master Marketing 📈",
      image: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  ];

  return (
    <Layout>
      <section className="lg:px-[70px] overflow-x-hidden mb-[260px] px-[20px] categoryPage ">
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
        <div className=" flex justify-center items-center flex-col">
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
            Categories
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] my-10">
            Explore all blog categories. There is something for you or your
            company.
          </p>
        </div>
        <div className=" flex flex-row flex-wrap gap-2 lg:gap-[30px] items-center ">
          {samplepostarray.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border border-[#9dff51] hover:border-none hover:shadow-xl rounded-xl p-[16px] w-full sm:w-[48%] lg:w-[31%] h-fit "
              >
                <Link to={`/blog/category/${item.category.toLowerCase()}`}>
                  <div
                    className={`w-full h-[15rem] rounded-md bg-cover bg-left flex items-center justify-center relative`}
                    style={{ backgroundImage: `url('${item.image}')` }}
                  >
                    <h1 className="text-center text-2xl px-2 py-[0.2rem] leading-[20px] my-5 text-gray-600 font-semibold text-white leading-normal z-10">
                      {item.category.toUpperCase()}
                    </h1>
                    <div
                      className="overlay | absolute w-full h-full rounded-md"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    ></div>
                  </div>
                  <p className="w-full text-[#232426] text-md font-medium mb-[20px] line-clamp-3 pt-4">
                   {item.description}
                  </p>
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
export const Head = () => <SEO title="Blog Category" />;

