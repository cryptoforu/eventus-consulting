import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Section,
  Container,
  Heading,
  Card,
  GradientText,
} from "../Elements/Index";
import { CardGlow } from "../Motion/Index";
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section
      id="secondary-features"
      ariaLabel="Eventus usluge"
      ref={ref}
      className="relative flex flex-col items-center justify-center"
    >
      <Container>
        <div
          style={{
            transform: inView ? "none" : "translateX(-200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-center"
          id="text"
        >
          <GradientText className={"text-xl font-semibold"}>
            Popularne Usluge
          </GradientText>
          <Heading headingLevel="h2" className={"text-5xl"}>
            Izgradite svoj brend uz <GradientText>Eventus</GradientText>
          </Heading>
        </div>
      </Container>
      <Container>
        <div
          style={{
            transform: inView ? "none" : "translateY(-200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
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
      </Container>
    </Section>
  );
};

export default Features;
