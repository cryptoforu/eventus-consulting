import React from "react";
import { useSiteData } from "../hooks/useSiteData";


export const Seo = ({ title, description, image, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteData().meta;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}` || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{`${seo.title} | ${defaultTitle}`}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={`${seo.title} | ${defaultTitle}`} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${seo.title} | ${defaultTitle}`} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </>
  );
};
