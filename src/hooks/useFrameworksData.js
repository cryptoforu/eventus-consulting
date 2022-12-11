
import { useStaticQuery, graphql } from 'gatsby';
const useFrameworksData = () => { 
   const data = useStaticQuery(graphql`
   query FrameworksQuery {
    allFrameworksJson {
    edges {
      node {
        label
        link
        logo {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
   }
   `);
   return { frameworks: data.allFrameworksJson.edges } 

};

export default useFrameworksData;