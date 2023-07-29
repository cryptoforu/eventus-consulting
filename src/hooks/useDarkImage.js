import { useStaticQuery, graphql } from "gatsby";
import { useCallback, useMemo } from "react";
import { useThemeStore } from "../store/main";
function findImage(name, imageData) {
  return imageData.find(({ node }) => node.name.includes(name));
}

const useDarkImage = () => {
  const darkLightImages = useStaticQuery(graphql`
    query DarkLight {
      dark: allFile(filter: { name: { regex: "/dark/" } }) {
        edges {
          node {
            ...DarkLightImages
          }
        }
      }
      light: allFile(filter: { name: { regex: "/light/" } }) {
        edges {
          node {
            ...DarkLightImages
          }
        }
      }
    }
  `);
  const theme = useThemeStore((state) => state.theme);
  const allImages = useMemo(
    () => ({
      dark: darkLightImages.dark.edges,
      light: darkLightImages.light.edges,
    }),
    [darkLightImages]
  );

  return useCallback((name) => {
    if (theme === "dark") {
      return findImage(name, allImages.dark);
    }
    return findImage(name, allImages.light);
  }, [theme, allImages]);
};
export default useDarkImage