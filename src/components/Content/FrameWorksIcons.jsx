import useFrameworksData from "../../hooks/useFrameworksData";
import React, { Fragment } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import clsx from "clsx";

const variants = {
    base: 'mx-auto mt-8 max-w-xl flex-wrap justify-center gap-x-4 gap-y-8 lg:mx-0 lg:justify-start',
    hero: 'flex',
    panel: 'hidden md:flex'
}

const FrameWorksIcons = ({ className, variant= 'hero' }) => {
  const { frameworks } = useFrameworksData();
  return (
    <ul className={clsx(variants.base, variants[variant], className)}>
      {frameworks.map(({ node }, i) =>
        node.label === "Next.js" ? (
          <Fragment key={i}>
            <li className="h-16 w-16 flex items-center justify-center dark:hidden">
              <GatsbyImage
                image={getImage(node.logo)}
                alt={node.label}
                className="max-w-full h-auto"
              />
            </li>
            <li className="hidden h-16 w-16 dark:flex items-center justify-center">
              <GatsbyImage
                image={getImage(node.darkLogo)}
                alt={node.label}
                className="max-w-full h-auto"
              />
            </li>
          </Fragment>
        ) : (
          <li
            key={node.label}
            className="h-16 w-16 flex items-center justify-center"
          >
            <GatsbyImage
              image={getImage(node.logo)}
              alt={node.label}
              className="max-w-full h-auto"
            />
          </li>
        )
      )}
    </ul>
  );
};
export default FrameWorksIcons;
