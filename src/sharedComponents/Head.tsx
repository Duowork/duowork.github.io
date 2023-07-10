import React from "react";
import SEO from "./SEO";

export default function Head({ title, description, image, children }: any) {
  return (
    <SEO title={title} description={description} image={image}>
      {children}
    </SEO>
  );
}
