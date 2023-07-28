import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../layouts/layout";
import SEO from "../../components/SEO";
import bg from "../../assets/images/bgDuoWork.jpg";
import img7 from "../../assets/images/img7.jpg";

export default function Blog({ data }: any) {
  const categoriesArray = [1, 2, 3, 4, 5];
  const posts = data.allMdx.nodes;
  const image1: any = getImage(posts[0].frontmatter.hero_image);
  const postSlice = posts.slice(1, 3); //fetches last 2 post from all posts

  const [currentSlide, setCurrentSlide] = useState(0);

  const [topCat, settopCat] = useState([
    {
      title: "1",
      img: "",
      id: 1,
      link:''
    },
    {
      title: "2",
      img: "",
      id: 2,
      link:''
    },
    {
      title: "3",
      img: "",
      id: 3,
      link:''
    },
   
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current slide index every 5 seconds
      setCurrentSlide((prevSlide) => (prevSlide + 1) % topCat.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  return (
    <Layout>
      <section className=" w-full  blogSectionBegins ">
        <div className=" px-[20px] md:px-[50px] lg:px-[90px] flex justify-center items-center flex-col">
          <div className="breadcrumb-nav mb-10   pt-5 text-center text-sm">
            <Link to="/" className="custom-text-dark">
              Home
            </Link>
            <small className="mx-1 text-gray-300">{">"}</small>
            <Link to={`/blog`} className="">
              {" "}
              <small className="text-[#939498]">Blog</small>
            </Link>
          </div>
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
            Blog
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] mb-[15px] md:mb-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, tempora eligendi obcaecati maxime dignissimos sequi
            aspernatur quibusdam laborum vel exercitationem.
          </p>

          {/* //start new  */}
          <div className="slider">
          <div
      className="slides-wrapper"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: 'transform 0.5s ease',
      }}
    >
         {  topCat.map((slide, index)=>  
         <div
         key={index}
         className="slide  rounded-[8px] overflow-hidden flex mb-[76px] text-white items-center pl-[10px] md:pl-[40px] h-[350px] md:h-[450px] relative">
        <Link to={slide.link}>
       
            <img
              src={bg}
              className="absolute top-0 rounded-[8px] overflow-hidden  left-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute bgStyle  h-full  top-0 left-0 w-full"></div>
            <div className="absolute bottom-[10px] md:bottom-[49px]">
              <div className="rounded-[100px] md:mb-[16px] mb-[8px] text-black bg-[#9EFF51] py-2 md:py-6 w-fit h-[32px] px-[12px] flex justify-center items-center">
                {" "}
                <span className="w-[6px] h-[6px] rounded-full mr-[6px] bg-[#222222]"></span>{" "}
                <span className="text-xs md:text-base"> Technology </span>
              </div>
              <h1 className="md:font-[600] font-[400] text-[15px]  sm:text-[25px] md:text-[36px] md:leading-[44px] text-left max-w-[816px] mb-[14px] md:mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. Neque non iaculis
                integer malesuada.
              </h1>
              <div className="flex items-center justify-start gap-[15px]">
                <img
                  src={img7}
                  className="md:w-[57px] w-[30px] h-[30px] md:h-[57px] rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p>Dennis Sadah</p>
                  <div className="flex justify-center items-center">
                    {" "}
                    <small className="font-[600] text-[10px] md:text-[16px] leading-[19px]">
                      June 15, 2023
                    </small>{" "}
                    <div className="w-[4px] h-[4px] rounded-full text-white bg-white mx-3 md:mx-10"></div>{" "}
                    <small className="font-[400] text-[9px] md:text-[14px] leading-[10px] md:leading-[17px]">
                      5 Min Read
                    </small>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35px] md:w-[59px] flex justify-center items-center h-[35px]  md:h-[47px]  text-black bg-[#26311d] absolute bottom-0 right-[5px]"></div>
            <div className="w-[40px] md:w-[64px] flex justify-center items-center h-[40px]  md:h-[58px]  text-black bg-[#78985e] absolute bottom-0 right-[11px]"></div>
            <div className="w-[45px] md:w-[70px]  flex justify-center items-center  md:h-[58px] h-[40px]  text-black bg-[#9EFF51] absolute bottom-0 right-[21px]">
              <div className="flex w-fit h-fit items-start justify-center">
                <h1 className="text-[10px] md:text-[25px] font-[700]">0{currentSlide+1}</h1>
                <div className="h-[10px] md:h-[20px] my-auto w-[1px] rotate-[5deg]  bg-gray-700"></div>
                <h1 className="text-[8px] md:text-[12.8571px] pt-1 text-[#222222] font-[500]">
                {topCat.length}
                </h1>
              </div>
            </div>
            </Link>
          </div> )} 
          </div>
            </div>
          <h1 className="text-3xl mb-[20px] md:mb-[71px]"> &#8595; </h1>

          <div className="w-full h-fit mb-[15px] md:mb-[66px] font-[600] text-[24px]  items-center  justify-between flex ">
            <div className="flex w-fit  h-fit gap-[10px] justify-center items-center">
              {" "}
              <h1 className="hidden md:flex text-[13px] sm:text-[24px] md:font-[600] md:text-[24px] md:leading-[32px] ">
                Browse The Category{" "}
              </h1>{" "}
              <div className="mt-[3px] md:mt-[10px] w-[35px] h-[1px] bg-black"></div>
            </div>
            <Link to={"/blog/category"}>
              <div className="flex gap-[8px] h-fit  w-fit  justify-center items-center">
                <h1 className="text-[13px] sm:text-[24px] md:font-[600] md:text-[24px] md:leading-[32px]">
                  see all category{" "}
                </h1>
                <p className=" text-xl ">&#8594;</p>
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
                {categoriesArray.map((arr) => (
                  <div
                    key={arr}
                    className={`w-[38%] h-[100px] md:w-[184px] relative overflow-hidden md:h-[300px] rounded-xl bg-purple-300`}
                  >
                    {" "}
                    <Link to="/blog/technology">
                      <img
                        src={img7}
                        className="w-full absolute top-0 right-0 h-full object-cover"
                        alt=""
                      />{" "}
                      <div className=" absolute bgStyle2 flex justify-center items-center w-full h-full top-0 left-0 ">
                        <h1 className="relative  text-white">Design</h1>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* {postsArray.length > 5 && (
              <div className="flex mb-6 w-[86%] md:w-full  mx-auto  justify-between px-[4rem] md:absolute md:top-1/2 md:-translate-y-1/2">
                <h1
                  onClick={handleLeft}
                  className="md:absolute  left-[40px] cursor-pointer "
                >
                  {" "}
                  <p className="w-[10px] text-3xl  h-full flex items-center">
                    &#8592;
                  </p>
                </h1>

                <h1
                  onClick={handleRight}
                  className="md:absolute  right-[40px] cursor-pointer"
                >
                  {" "}
                  <p className="w-[10px]  text-3xl  h-full flex items-center">
                    &#8594;
                  </p>
                </h1>
              </div>
            )} */}
          </div>
        </div>

        {/* {postsArray.length > 5 && (
          <div className="w-full hidden  md:flex justify-center mb-[160px] items-center gap-[20px] h-fit">
            {" "}
            {postsArray.map((arr, index) => (
              <div
                key={arr}
                onClick={() => checkIndex(index)}
                className={` w-[18px] h-[18px] cursor-pointer rounded-full bg-[#3EA645]`}
              ></div>
            ))}{" "}
          </div>
        )} */}

        <div className="  px-[20px] md:px-[50px] lg:[90px] w-full">
          <h1 className="font-[600] text-[20px] sm:text-[24px] mb-[64px]">
            Featured
          </h1>
          <div className="xl:flex-row flex flex-col w-full mb-[223px] gap-[56px]">
            <div className="w-full xl:w-1/2  ">
              <Link
                to={`/blog/${posts[0].frontmatter.slug}`}
                className="h-full w-full"
              >
                <GatsbyImage
                  image={image1}
                  alt={posts[0].frontmatter.hero_image_alt}
                  className="w-full rounded-[8px] h-[244px] mb-[32px] object-cover"
                />
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center ">
                    <GatsbyImage
                      image={image1}
                      alt={posts[0].frontmatter.hero_image_alt}
                      className="w-[40px]  h-[40px] rounded-full object-cover mr-[14px]"
                    />
                    <div className="flex justify-center items-center gap-3 text-[14px] font-[500]">
                      <span>John Doe</span>
                      <span className="mx-[4px] my-auto">.</span>
                      <span> {posts[0].frontmatter.date}</span>
                    </div>
                  </div>
                  <h1 className="font-[600] mb-[12px] text-[24px] text-left">
                    {posts[0].frontmatter.title}
                  </h1>
                  <p className="font-[400] mb-[12px] text-[16px] text-left">
                    {posts[0].frontmatter.title}
                  </p>
                  <div className="bg-[#9eff51] rounded-[4px] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                    <button>Explore </button>
                    <p className="w-[10px] text-xl  h-full flex items-center">
                      &#8599;
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" w-full xl:w-1/2 h-fit flex flex-col gap-[20px] md:gap-[41px]">
              {postSlice.map((post: any) => {
                const image: any = getImage(post.frontmatter.hero_image);
                return (
                  <div key={post.id} className="w-full h-fit sm:h-fit">
                    <Link
                      to={`/blog/${post.frontmatter.slug}`}
                      className="h-full w-full"
                    >
                      <div className="flex flex-col sm:flex-row  w-full   gap-[24px] h-fit ">
                        <GatsbyImage
                          image={image}
                          alt={post.frontmatter.hero_image_alt}
                          className="w-full sm:w-[60%] h-full rounded-[8px] object-cover"
                        />

                        <div className="w-full sm:w-[39%]">
                          <div className="flex justify-start items-center text-[12px]">
                            <GatsbyImage
                              image={image}
                              alt={post.frontmatter.hero_image_alt}
                              className="w-[40px]  h-[40px] rounded-full object-cover mr-[10px]"
                            />

                            <span className="mr-2">DuoWork</span>
                            <span>.</span>
                            <span> {post.frontmatter.date}</span>
                          </div>
                          <h1 className="font-[600] mb-[12px] text-[18px] text-left">
                            {post.frontmatter.title}
                          </h1>
                          <p className="font-[400] mb-[12px] text-[16px] text-left">
                            {post.frontmatter.title}
                          </p>
                          <div className="bg-[#9eff51] rounded-[4px] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                            <button>Explore </button>
                            <p className="w-[10px] text-xl  h-full flex items-center">
                              &#8599;
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
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
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, Y")
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          tags
        }
        id
      }
    }
  }
`;
