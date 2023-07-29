import { useStaticQuery, graphql } from "gatsby";

export const lightDarkFragment = graphql`
  fragment DarkLightImages on File {
    id
    childImageSharp {
      gatsbyImageData
    }
    name
  }
`;

const useAdsImages = () => {
  const images = useStaticQuery(graphql`
    query AdsImagesQuery {
      light: allFile(
        filter: {
          name: { regex: "/light/" }
          relativeDirectory: { eq: "advertising" }
        }
      ) {
        edges {
          node {
            ...DarkLightImages
          }
        }
      }
      dark: allFile(
        filter: {
          name: { regex: "/dark/" }
          relativeDirectory: { eq: "advertising" }
        }
      ) {
        edges {
          node {
            ...DarkLightImages
          }
        }
      }
    }
  `);

  return {
    light: images.light,
    dark: images.dark,
  };
};
export default useAdsImages