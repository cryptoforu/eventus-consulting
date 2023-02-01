import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section, Container, Heading } from "../../Elements/Index";
const Features = () => {
  const data = useStaticQuery(graphql`
    query WebFeaturesQuery {
      allWebFeaturesJson {
        edges {
          node {
            description
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
            id
            name
          }
        }
      }
    }
  `);
  const features = data.allWebFeaturesJson.edges.map(({ node }) => node);
  return (
    <Section
      id="web-features"
      ariaLabel="Ostale Osluge"
      className="relative flex flex-col"
    >
      <Container>
        <div>
          <Heading
            headingLevel="h3"
            className="mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl"
          >
            Ostale usluge koje nudimo
          </Heading>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <div className="relative space-y-8 py-12 p-8">
                <GatsbyImage
                  image={getImage(feature.icon)}
                  alt={feature.name}
                  className="w-12"
                />

                <div className="space-y-2">
                  <Heading
                    headingLevel="h5"
                    className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary"
                  >
                    {feature.name}
                  </Heading>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
