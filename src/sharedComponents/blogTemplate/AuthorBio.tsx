import React, {useEffect} from "react";

type AuthorBioDataType = {
  data: {
    authorName: string;
    authorImage: string;
    authorEmail: string;
    authorDescription: string;
  };
};

export default function AuthorBio({ data }: AuthorBioDataType) {
  const { authorImage, authorName, authorDescription, authorEmail } = data;

  return (
    <section
      id="author-bio"
      className="mt-20 mb-10 max-w-[650px] sm:w-[650px] px-10 sm:px-0"
    >
      <hr />
      <div className="flex flex-col sm:flex-row my-5">
        <img
          id="author-image"
          src={authorImage}
          alt=""
          className="w-20 h-20 rounded-full border-2 border-green-200 sm:mr-5"
        />
        <div id="written-by-author">
          <span className="text-gray-400 mr-[0.5rem]">Written by</span>
          <strong className="sm:text-lg mb-1 capitalize font-semibold underline">
            <a
              href={`https://x.com/@${authorName}`}
              target="_blank"
              referrerPolicy=""
            >
              {authorName}
            </a>
          </strong>
          <p>{authorDescription}</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
