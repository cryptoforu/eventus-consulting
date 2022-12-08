import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link, Heading, Prose, Button } from "../Elements/Index";
import useFrameworksData from "../../hooks/useFrameworksData";

const ResponsiveWeb = () => {
  const { frameworks } = useFrameworksData();
  return {
    content: (
      <div>
        <ul className="hidden md:flex mx-auto mt-8  max-w-xl flex-wrap justify-center gap-x-4 lg:mx-0 lg:justify-start">
          {frameworks.map(({ node }, i) => (
            <Link
              to={node.link}
              whileTap={{ scale: 1.3, borderRadius: "6px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
              }}
              key={i}
              className="h-16 w-16 flex items-center justify-center"
            >
              <GatsbyImage
                image={getImage(node.logo)}
                alt={node.label}
                className="max-w-full h-auto"
              />
            </Link>
          ))}
        </ul>
        <div className="mt-6">
          <Heading
            headingLevel="h2"
            className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Responsivni Web Dizajn
          </Heading>
          <Prose>
            <p className="mt-4 text-lg">
              Svaka web stranica koju dizajniramo i razvijamo ne samo da je
              responzivna, već je i optimizirana za mobilne uređaje,
              osiguravajući optimalno i zanimljivo korisničko iskustvo na
              mobilnim uređajima, tabletima i desktop uređajima.
            </p>
          </Prose>
          <div className="mt-6">
            <Button
              variant="rounded"
              color="gray"
              whileTap={{ scale: 1.3, borderRadius: "6px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
              }}
            >
              Pogledaj Sve
            </Button>
          </div>
        </div>
      </div>
    ),
    image: (
      <StaticImage
        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0  lg:w-auto lg:max-w-none"
        src="../../images/frames/chrome_white_decker.png"
        alt="Responsivni web dizajn"
      />
    ),
  };
};

export default ResponsiveWeb;
