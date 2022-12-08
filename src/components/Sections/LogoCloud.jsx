import React, { useRef } from "react"; 
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import { useHover } from "react-aria";
import { useHoverStore } from "../../store/main";
import { usePartnersData } from "../../hooks/usePartnersData";
import {
  Section,
  Container,
  Heading,
  GradientText,
  Link,
} from "../Elements/Index";
import {
  staggerContainerVariant,
  titleVariant,
  cardVariants,
  btnClickVariant,
} from "../Motion/variants";

const LogoCloud = () => {
  const partners = usePartnersData();
  const refLogo = useRef(null);
  const isInView = useInView(refLogo, { once: true, amount: 0.5 });
  const { isHoveredI, dispatch } = useHoverStore();
  let { hoverProps, isHovered } = useHover({
    onHoverStart: (e) => dispatch({ type: "isHovered", payload: e.target.id }),
    onHoverEnd: (e) => dispatch({ type: "isHovered", payload: undefined }),
  });
 
  return (
    
      <Section
        id="logo-cloud"
        ariaLabel="Nasi Partneri"
        className="relative z-[1] px-6 md:px-12"
      >
        <Container>
          <motion.div
            initial="hidden"
            animate={isInView && "show"}
            variants={titleVariant}
            transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
          >
            <Heading headingLevel="h2" className={"font-bold text-5xl sm:text-6xl md:text-7xl text-center"}>
              Naši <GradientText>Partneri</GradientText>
            </Heading>
          </motion.div>

          <div className="m-auto mt-16 w-full" ref={refLogo}>
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              animate={isInView && "show"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center gap-6"
            >
              {partners.map(({ node }, index) => (
                <Link key={node.id} to={node.link}>
                  <motion.div
                    {...hoverProps}
                    id={index}
                    key={node.id}
                    whileTap={btnClickVariant}
                    variants={cardVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative group aspect-[500/260] rounded-xl border border-slate-200 dark:border-slate-800  py-2 px-4 bg-white bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-xl dark:bg-clip-padding dark:bg-black dark:bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-xl"
                  >
                    {isHoveredI === index && (
                      <motion.div
                        layoutId="underline"
                        {...hoverProps}
                        key={node.id}
                        style={{ width: isHovered ? "100%" : "0%" }}
                        transition={{
                          type: "spring",
                          ease: "easeInOut",
                          stiffness: 200,
                          damping: 30,
                          restDelta: 0.001,
                        }}
                        className={clsx(
                          `absolute bottom-0 left-0  h-full border-b-4 border-transparent animate-pulse rounded-xl opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.sky.50)),var(--link-grid-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]`
                        )}
                      />
                    )}

                    <GatsbyImage
                      image={getImage(node.logo)}
                      alt={node.title}
                      className="max-w-full h-auto"
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>
   
  );
};

export default LogoCloud;
