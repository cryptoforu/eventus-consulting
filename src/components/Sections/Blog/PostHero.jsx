import React from "react";
import { Heading } from "../../Elements/Index";
import { StaticImage } from "gatsby-plugin-image";
const PostHero = (props) => {
  return (
    <div className="relative">
      <div className="relative py-24 bg-slate-900">
        <div className="absolute inset-0">
          <StaticImage
            src="../../../images/bg/post_hero_dark.webp"
            className="w-full h-full object-cover block"
            layout="fullWidth"
            loading="eager"
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <Heading
            headingLevel="h1"
            variant="white"
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            {props.title}
          </Heading>
          <div className="mt-6 max-w-none text-xl text-gray-300">
            {props.breadcumbs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHero;
