import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Heading, Link, Prose } from "../../Elements/Index";
const PageCard = ({ image, title, description, category, time, slug }) => {
  return (
    <Prose className="group space-y-6">
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />

      <Heading headingLevel="h3" className="text-3xl font-semibold ">
        {title}
      </Heading>
      <p>{description}</p>
      <div className="flex gap-6 items-center">
        <span className="w-max block font-light  sm:mt-0 capitalize">
          {category}
        </span>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 dark:text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Vrijeme za čitanje: {Math.round(time)} min</span>
        </div>
        <Link className="inline-block" to={slug}>
          <span className="text-blue-500">Procitaj vise</span>
        </Link>
      </div>
    </Prose>
  );
};

export default PageCard;
