import React from "react";
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Item } from "react-stately";
import { TabContent } from "./Index";
import {
  ecommercAnimation,
  reactAnimation,
  laravelAnimation,
  wpAnimation,
} from "../../../data/animations/index.js";

import {
  Section,
  Container,
  Heading,
  GradientText,
  Tabs,
} from "../../Elements/Index";
const iconVariant = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    rotate: 30,
    scale: 1.2,
  },
};
const TabTitle = ({ title, icon }) => {
  return (
    <>
      <motion.div className="relative overflow-hidden rounded-xl p-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div variants={iconVariant} className="w-16 h-16">
            {icon}
          </motion.div>
          <span className="text-lg">{title}</span>
        </div>
      </motion.div>
    </>
  );
};

const Services = () => {
  const data = useStaticQuery(graphql`
    query WebTabsQuery {
      allWebServicesJson {
        edges {
          node {
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
            name
            id
            content {
              description
              title
            }
            features {
              description
              icon {
                childImageSharp {
                  gatsbyImageData
                }
              }
              title
            }
          }
        }
      }
    }
  `);
  const animationsData = [
    {
      name: "Razvoj Mobilnih i Web React Aplikacija",
      animation: reactAnimation,
    },
    {
      name: "Laravel Admin Paneli",
      animation: laravelAnimation,
    },
    {
      name: "Wordpress Stranice/Blog",
      animation: wpAnimation,
    },
    {
      name: "E-Prodavnice",
      animation: ecommercAnimation,
    },
  ];
  const tabItems = data.allWebServicesJson.edges.map(({ node }) => {
    let temp = animationsData.find(({ name }) => name === node.name);
    let items = {
      name: node.name,
      icon: node.icon,
      animation: temp.animation,
      content: {
        title: node.content.title,
        description: node.content.description,
      },
      features: node.features,
    };
    return items;
  });

  return (
    <Section
      id="web-services"
      ariaLabel="Web Usluge"
      className="relative flex flex-col -mt-16"
    >
      <Container>
        <div className="w-full mx-auto max-w-7xl flex flex-col items-center">
          <GradientText className="font-semibold text-xl text-center">
            Alati i Usluge
          </GradientText>
          <Heading
            headingLevel="h2"
            className={
              "font-bold font-display text-5xl sm:text-6xl lg:text-7xl text-center mt-4"
            }
          >
            Kompletna Web <GradientText>Rješenja</GradientText>.
          </Heading>
        </div>
        <div className="relative w-full mx-auto max-w-none mt-16">
          <Tabs>
            {tabItems.map((item) => (
              <Item
                key={item.id}
                title={
                  <TabTitle
                    title={item.name}
                    icon={
                      <GatsbyImage
                        image={getImage(item.icon)}
                        alt={item.name}
                      />
                    }
                  />
                }
              >
                <TabContent item={item} />
              </Item>
            ))}
          </Tabs>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
