import React from "react";
import { motion } from "framer-motion";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import {
  Section,
  Container,
  Heading,
  GradientText,
} from "../../Elements/Index";

const titleVariant = {
  show: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: "-50%",
    opacity: 0,
  },
};
const leftFade = {
  show: {
    x: 0,
    opacity: 1,
  
  },
  hidden: {
    x: "-100%",
    opacity: 0,
    
  },
};
const rightFade = {
  show: {
    x: 0,
    opacity: 1,
 
  },
  hidden: {
    x: "100%",
    opacity: 0,
 
  },
};
const OurMission = () => {
  const data = useStaticQuery(graphql`
    query MainFrameworksQuery {
      allMainFrameWorksJson {
        edges {
          node {
            description
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
            name
            id
          }
        }
      }
      allAdvertisingJson {
        edges {
          node {
            description
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
            name
            id
          }
        }
      }
    }
  `);
 
  return (
    <Section
      id="our-mission"
      ariaLabel="Nasa Misija"
      className="relative flex flex-col"
    >
      <div className="relative z-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={titleVariant}
            transition={{ type: "spring", duration: 1 }}
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-5xl lg:pr-24"
          >
            <Heading
              headingLevel="h3"
              className={"text-4xl md:text-5xl lg:text-6xl mb-8"}
            >
              Želite li znati zašto smo <GradientText>drugačiji</GradientText>?
            </Heading>
            <p className="mt-4 font-display text-2xl tracking-tight text-blue-900 dark:text-blue-200 mb-8">
              Želimo da pružimo najbolje za vaše poslovanje, pa ako postoji
              super-kreativna ideja za koju mislimo da će učiniti vaš brend
              istaknutim, mi ćemo to učiniti. Svaki član našeg tima se aktivno
              ohrabruje da razmišlja, eksperimentiše i isporuči vodeća rješenja.
            </p>
          </motion.div>
        </Container>
      </div>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute -inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50 dark:hidden">
          <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[27%]">
            <StaticImage
              src="../../../images/bg/background.jpg"
              alt=""
              layout="fixed"
              width={918}
              height={1495}
            />
          </div>
        </div>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "100px" }}
            variants={leftFade}
            transition={{ type: "spring", duration: 2, ease: "easeInOut", delay: 0.5  }}
            className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div className="relative">
              <Heading
                headingLevel="h3"
                className="text-2xl font-extrabold tracking-tight sm:text-3xl"
              >
                Moderni Web Dizajn
              </Heading>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Pružamo kompletan paket usluga web dizajna i razvoja web
                aplikacija koristeci najmodernije alate.
              </p>
              <dl className="mt-10 space-y-8">
                {data.allMainFrameWorksJson.edges.map(({ node }) => (
                  <div key={node.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                        <GatsbyImage
                          image={getImage(node.icon)}
                          alt={node.name}
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-slate-800 dark:text-slate-200">
                        {node.name}
                      </p>
                    </dt>
                    <dd className="ml-16 text-base mt-2 text-slate-600 dark:text-slate-300">
                      {node.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 mx-4 relative lg:mt-0" aria-hidden="true">
              <div className="relative mx-auto">
                <StaticImage
                  src="../../../images/web_3d.webp"
                  alt="web dizajn i izrada stranica"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </Container>
        <div className="mt-24">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "200px" }}
              variants={rightFade}
              transition={{ type: "spring", duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center"
            >
              <div className="mt-10 mx-4 relative lg:mt-0 order-2 md:order-1" aria-hidden="true">
                <div className="relative mx-auto">
                  <StaticImage
                    src="../../../images/digital_marketing_3d.webp"
                    alt="digitalni marketing"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <Heading
                  headingLevel="h3"
                  className="text-2xl font-extrabold tracking-tight sm:text-3xl"
                >
                  Internet Oglasavanje
                </Heading>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  Pomoći ćemo vam da ispričate svoju priču i razvijete svoje
                  poslovanje putem drustvenih mreza i Google Reklama.
                </p>
                <dl className="mt-10 space-y-8">
                  {data.allAdvertisingJson.edges.map(({ node }) => (
                    <div key={node.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                          <GatsbyImage
                            image={getImage(node.icon)}
                            alt={node.name}
                          />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-bold text-slate-800 dark:text-slate-200">
                          {node.name}
                        </p>
                      </dt>
                      <dd className="ml-16 text-base mt-2 text-slate-600 dark:text-slate-300">
                        {node.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default OurMission;
