import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Heading } from "../../Elements/Index";
const BlogHero = (props) => {
  return (
    <div className="overflow-hidden -mt-[4.5rem] lg:-mt-[4.75rem]"> 
      <div className="relative py-24 bg-gray-800">
        <div className="absolute inset-0">
          <StaticImage
            src="../../../images/blog_hero.jpg"
            alt="eventus blog"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
          <Heading
            headingLevel="h1"
            variant="white"
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            BLOG
          </Heading>
          <div className="mt-6 max-w-none text-xl text-gray-300">
            {props.breadcumbs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
