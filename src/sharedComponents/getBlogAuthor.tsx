/* This componet adds a seperator ('&') the name of authors of blog post */

import React from "react";

export default function Authors({ className, author }: any) {
  if (author !== undefined && author.length > 0) {
    const authors = author;

    return (
      <div className={"blog-item-intro-footer " + className}>
        By{" "}
        {authors.map((author: string, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <span className="blog-item-author custom-text-green-dark">
                {author}
              </span>
              {idx < authors.length - 1 && " & "}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  return (
    <div className={"blog-item-intro-footer " + className}>
      By{" "}
      <span className="blog-item-author custom-text-green-dark">{author}</span>
    </div>
  );
}
