import React from "react";
import {  StaticImage } from "gatsby-plugin-image";
import {  Heading, Prose, Button } from "../Elements/Index";

import FrameWorksIcons from "../Content/FrameWorksIcons";
const WebPanel = () => {
 
  return (
    <div className="relative py-16 w-full h-full flex items-center justify-center">
      <div className="lg:mx-auto lg:max-w-screen-2xl	lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6  lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <FrameWorksIcons variant="panel" />
            
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
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 sm:pr-6  lg:px-0 lg:m-0 lg:relative lg:h-full lg:w-full">
            <StaticImage
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0  lg:w-auto lg:max-w-none"
              src="../../images/frames/chrome_white_decker.png"
              alt="Responsivni web dizajn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebPanel;
