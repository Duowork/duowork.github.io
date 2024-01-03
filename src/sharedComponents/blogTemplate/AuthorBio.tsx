import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type AuthorBioDataType = {
  data: {
    author: {
      id: string;
      firstName: string;
      fullName: string;
      bio: string;
      accounts: {
        website: string;
        twitter: string;
        instagram: string;
      };
      image: {
        childImageSharp: {
          gatsbyImageData: any; // Adjust this based on your GraphQL query structure
        };
      };
    };
  };
};

export default function AuthorBio({ data }: AuthorBioDataType) {
  const { fullName, accounts, bio, image } = data.author;

  const authorImage: any = getImage(image.childImageSharp.gatsbyImageData);

  return (
    <section
      id="author-bio"
      className="mt-20 mb-10 max-w-[650px] sm:w-[650px] px-10 sm:px-0"
    >
      <hr />
      <div className="flex flex-col sm:flex-row my-5">
        <GatsbyImage
          image={authorImage}
          alt={fullName}
          className="inline w-[5rem] h-[5rem] sm:w-[9rem] rounded-full border-5 sm:mr-5 mb-2 sm:mb-0"
        />
        <div id="written-by-author">
          <span className="text-gray-400 mr-[0.5rem]">Written by</span>
          <strong className="sm:text-lg mb-1 capitalize font-semibold underline">
            <a
              href={`${accounts && accounts.twitter}`}
              target="_blank"
              referrerPolicy=""
            >
              {fullName && fullName}
            </a>
          </strong>
          <p>{bio && bio}</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
