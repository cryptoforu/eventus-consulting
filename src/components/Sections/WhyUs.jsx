import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import {
  Section,
  Container,
  Heading,
  GradientText,
  Prose,
  Button,
} from "../Elements/Index";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { StaticImage } from "gatsby-plugin-image";
import {
  staggerContainerVariant,
  cardVariants,
  titleVariant,
} from "../Motion/variants";
const WhyUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const MotionContainer = motion(Container, { forwardMotionProps: true });
  return (
    <>
      <Section
        id="why-us"
        ariaLabel="Zasto Izabrati Eventus"
        className="relative flex items-center justify-center"
        ref={ref}
      >
        <div>
          <div className="absolute inset-0 w-full h-full" id="bgimg">
            <StaticImage
              src="../../images/bg/bg-light.png"
              alt=""
              className="max-w-full h-auto"
              layout="fullWidth"
            />
          </div>
          <MotionContainer
            initial="hidden"
            animate={inView ? "show" : ""}
            variants={staggerContainerVariant}
          >
            <div className="grid gap-5  lg:grid-cols-2">
              <motion.div
                variants={titleVariant}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="flex flex-col justify-center"
              >
                <Prose className="space-y-2">
                  <span className="lead">Zašto Izabrati Nas</span>

                  <Heading headingLevel="h3">
                    Zašto je Eventus{" "}
                    <GradientText> Rangiran Na Vrhu</GradientText> među vodećim
                    kompanijama za razvoj weba i digitalnog marketinga
                  </Heading>
                  <p>
                    Naš nepokolebljivi fokus na rast brenda osigurava da je
                    svaki novi identitet brenda, dizajnerski projekat, web
                    stranica ili marketinška kampanja vezan za mjerljive ciljeve
                    koje možete testirati, pratiti i dokazati
                  </p>
                </Prose>

                <div className="my-2 border-t border-blue-200 dark:border-slate-800">
                  <div className="flex mt-4 ">
                    <div className="mr-4 flex-shrink-0">
                      <StaticImage
                        src="../../images/google-ads.png"
                        alt="eventus google oglasavanje"
                        className="h-16 w-16"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 hover:underline hover:cursor-pointer">
                        Google ADS i SEO Optimizacija
                      </h4>
                      <p className="mt-1 text-slate-700 dark:text-slate-300">
                        Najbrži način da se prvo rangirate na Google-u je putem
                        Google PPC oglasa, ali ako više volite sveobuhvatniju
                        strategiju, naši web programeri će vas dugoročno dovesti
                        do toga.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="mr-4 flex-shrink-0">
                    <StaticImage
                      src="../../images/social/group.png"
                      alt="eventus drustvene mreze"
                      className="h-16 w-16"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg text-slate-800 dark:text-slate-200 font-bold hover:text-blue-600 hover:underline hover:cursor-pointer">
                      Drustvene Mreze
                    </h4>
                    <p className="mt-1 text-slate-700 dark:text-slate-300">
                      Kreiramo marketing kampanje na društvenim mrežama po vasoj
                      zelji. Sjajan marketing na društvenim mrežama može
                      donijeti izuzetan uspjeh vašem poslovanju, stvarajući
                      potencijalne klijente i prodaju
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                transition={{ type: "spring", duration: 2, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center"
              >
                <div className="relative group m-8">
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                    id="blur"
                  />

                  <StaticImage
                    src="../../images/why_us.webp"
                    alt="zasto izabrati eventus"
                    className="relative rounded-2xl"
                  />
                </div>

                <div className="mt-8">
                  <Prose className="prose-h3:text-lg md:prose-h3:text-3xl space-y-8 flex flex-col items-center">
                    <h3>Pokrenimo zajedno novi projekat</h3>
                    <Button
                      variant="rounded"
                      color="gradPurple"
                      whileTap={{ scale: 1.3, borderRadius: "6px" }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                      }}
                    >
                      <span>Započni Projekat</span>{" "}
                      <ChevronRightIcon className="w-5 inline-flex"></ChevronRightIcon>{" "}
                    </Button>
                  </Prose>
                </div>
              </motion.div>
            </div>
          </MotionContainer>
        </div>
      </Section>
    </>
  );
};

export default WhyUs;
