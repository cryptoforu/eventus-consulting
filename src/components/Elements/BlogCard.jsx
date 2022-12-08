import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, Heading, Prose } from "./Index";
const BlogCard = ({ image, alt, title, description, slug }) => {
  return (
    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-slate-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div className="relative overflow-hidden rounded-xl">
        <GatsbyImage
          image={getImage(image)}
          alt={alt}
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <Prose variant="base" className="mt-6 relative">
        <Heading headingLevel="h3" className="text-2xl">
          {title}
        </Heading>
        <p className="mt-6 mb-8 line-clamp-3">{description}</p>
        <Link className="inline-block" to={slug}>
          <span className="text-blue-500">Read more</span>
        </Link>
      </Prose>
    </div>
  );
};

export default BlogCard;
