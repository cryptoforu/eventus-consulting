import { graphql, useStaticQuery } from "gatsby";

export const usePartnersData = () => {
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      allPartnersJson {
        edges {
          node {
            id
            link
            logo {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
          }
        }
      }
    }
  `);

  return data.allPartnersJson.edges;
};
