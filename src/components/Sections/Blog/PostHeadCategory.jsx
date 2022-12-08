import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostHeadCategory = ({ image, time, alt, title }) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0 self-center">
        <GatsbyImage
          image={getImage(image)}
          alt={alt}
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div>
        <span className="text-lg font-bold capitalize">{title}</span>
        <span className="text-base font-semibold flex">
        <span>Vrijeme za čitanje: {Math.round(time)} min</span>
        </span>
      </div>
    </div>
  );
};

export default PostHeadCategory;
