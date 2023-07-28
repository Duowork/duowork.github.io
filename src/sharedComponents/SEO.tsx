/*
  Gatsby uses this component to insert data in  
  the <head> elmenent of the HMTL document. This also helps improve SEO
*/

import React from "react";
import { useSiteMetaData } from "../hooks/useSiteMetaData";
import favicon from "../assets/icons/favicon-96x96.png";

type SEOType = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  children?: JSX.Element;
};

export default function SEO({
  title,
  description,
  image,
  pathname,
  children,
}: SEOType) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
    socialMedia,
  } = useSiteMetaData();

  // Image is stored on Cloudinary media service.
  const logoImage = `https://res.cloudinary.com/dzgbcvjw5/image/upload/c_scale,h_2439,w_3693/v1686797033/duowork/Duwork-banner_spckm4.jpg`

  const seo = {
    title: title ? `${defaultTitle} | ${title}` : defaultTitle,
    description: description || "Tailor-made software solutions for business success.",
    url: `${siteUrl}`,
    author,
    socialMedia: {
      twitter: socialMedia.twitter,
      instagram: socialMedia.instagram,
    },
    image: image ? image: logoImage
  };

  return (
    <>
      {/* General meta tags */}
      <title>{seo.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={defaultDescription} />
      <meta name="author" content={seo.author.name} />

      {/* Facebook meta tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="og:type" content="website" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${seo.socialMedia.twitter}`} />
      <meta name="twitter:title" content={seo.title} />
      <meta
        name="twitter:url"
        content={`https://twitter.com/${seo.socialMedia.twitter}`}
      />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={`@${seo.socialMedia.twitter}`} />

      {/* Google meta tags */}
      <meta name="robots" content="max-snippet:-1" />
      <meta name="robots" content="max-image-preview:standard" />
      <meta name="robots" content="max-video-preview:-1"></meta>

      {/* Favicon */}
      <link rel="shortcut icon" href={favicon} type="image/x-icon"></link>
      <script
        src="https://kit.fontawesome.com/f65742b227.js"
        crossOrigin="anonymous"
      ></script>

      {children}
    </>
  );
}
