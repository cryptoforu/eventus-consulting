import React, { useRef, useId } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useInView } from "framer-motion";
import {
  Section,
  Container,
  Heading,
  Card,
  GradientText,
} from "../Elements/Index";
import { CardGlow } from "../Motion/Index";
import {
  containerVariant,
  titleVariant,
  cardVariants,
} from "../Motion/variants";
const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      allFeaturesJson {
        edges {
          node {
            id
            title
            desc
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
            link
          }
        }
      }
    }
  `);
  const features = data.allFeaturesJson.edges.map(({ node }) => node);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const MotionContainer = motion(Container, { forwardMotionProps: true });
  const MotionSection = motion(Section, { forwardMotionProps: true });
  let id = useId();
  return (
    <MotionSection
      initial="hidden"
      animate={isInView && "show"}
      variants={containerVariant}
      id="secondary-features"
      ariaLabel="Eventus usluge"
      ref={ref}
      className="my-16"
    >
      <svg aria-hidden="true" width={0} height={0}>
        <defs>
          <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
            <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
          </clipPath>
          <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
            <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
          </clipPath>
          <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
            <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
          </clipPath>
        </defs>
      </svg>
      <MotionContainer
        variants={titleVariant}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <div className=" text-center">
          <GradientText className={"text-xl font-semibold"}>
            Popularne Usluge
          </GradientText>
          <Heading headingLevel="h2" className={"text-5xl"}>
            Izgradite svoj brend uz <GradientText>Eventus</GradientText>
          </Heading>
        </div>
      </MotionContainer>
      <MotionContainer
        variants={cardVariants}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <CardGlow key={feature.title}>
              <Card
                title={feature.title}
                image={
                  <GatsbyImage
                    image={getImage(feature.image)}
                    alt={feature.alt}
                    className="w-24"
                  />
                }
                desc={feature.desc}
                to={feature.link}
              />
            </CardGlow>
          ))}
        </div>
      </MotionContainer>
    </MotionSection>
  );
};

export default Features;
