import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import {
  Heading,
  Prose,
  Button,
  Container,
  Section,
} from "../../Elements/Index";
import { staggerContainerVariant } from "../../Motion/variants";

const itemVariants = {
  hidden: { opacity: 0, y: '-100%', scale: 0.5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1
  },
};

const GoogleAds = () => {
  const { ref, inView } = useInView({
   amount: 0.2,
    triggerOnce: true,
  });
  const MotionContainer = motion(Container, { forwardMotionProps: true });
  return (
    <Section
      id="google-ads"
      ariaLabel="Google Ads"
      ref={ref}
      className="relative flex items-center justify-center bg-indigo-50 dark:bg-slate-900"
    >
      <div className="absolute inset-0 w-full h-full blur-xl dark:gradient-mask-t-50">
        <StaticImage
          src="../../../images/bg/post_hero.png"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center will-change-transform">
        <MotionContainer
          initial="hidden"
          animate={inView ? "show" : ""}
          variants={staggerContainerVariant}
        >
          <motion.div
            className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0"
            variants={itemVariants}
            transition={{ type: "spring", duration: 2, ease: "easeInOut" }}
          >
            <div className="col-span-1">
              <div className="w-full relative">
                <StaticImage
                  src="../../../images/google_ads.webp"
                  alt="google ads oglasavanje"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
            <div className="relative col-span-1">
              <Heading
                headingLevel="h2"
                className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl "
              >
                Više kupaca uz{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-600 to-blue-600">
                  Google
                </span>
                .
              </Heading>
              <div className="mt-8 lg:mt-16 space-y-8">
                <Prose>
                  <p>
                    Pokrenite Google Search Ads za nekoliko minuta. Oglašavajte
                    se kao najveći brendovi u industriji. Eventus će
                    automatizirati sve od kreiranja do optimizacije i pomoći vam
                    da postignete svoje ciljeve bolje od bilo koga.
                  </p>
                </Prose>
                <div className="flex space-x-4 mt-6">
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
                    Napravite Google ADS sada!
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionContainer>
      </div>
    </Section>
  );
};

export default GoogleAds;
