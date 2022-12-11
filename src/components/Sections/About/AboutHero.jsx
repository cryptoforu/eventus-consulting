import React from "react";
import { motion } from "framer-motion";
import { Heading, GradientText, ParticlesE } from "../../Elements/Index";
import {
    
    titleVariant,
  } from "../../Motion/variants";
const AboutHero = (props) => {
  return (
    <div className="overflow-hidden -mt-[4.5rem] pt-[4.5rem] lg:-mt-[4.75rem] lg:pt-[4.75rem]">
      <div className="relative py-24">
        <div className="">
          <ParticlesE className={"w-full h-full object-cover"} />
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-cyan-900 to-blue-500 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-indigo-50 dark:text-slate-900"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <motion.div variants={titleVariant} transition={{ type: "spring", duration: 2, ease: "easeInOut" }} className="relative max-w-7xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
          <Heading
            headingLevel="h1"
            variant="white"
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            Vođeni saradnjom.<br></br>
            <GradientText>Pokrenuti idejama</GradientText>.
          </Heading>
          <div className="mt-6 max-w-none text-xl text-gray-300">
            {props.breadcumbs}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
