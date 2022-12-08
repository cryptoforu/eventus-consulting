import { graphql, useStaticQuery } from "gatsby";

export const useSiteData = () => {
  const data = useStaticQuery(graphql`
   query SiteDataQuery {
    meta: site {
        ...SiteInformation
      }
    menu: site {
      ...MenuItems
    }
    contact: site {
      ...ContactDetails
    }  
    }
   fragment SiteInformation on Site {
    siteMetadata {
      title
      description
      image
      siteUrl
    }
  }
  fragment MenuItems on Site {
    siteMetadata {
          menuLinks {
            name
            link
     }
    }
  }
  fragment ContactDetails on Site {
    siteMetadata {
          contactDetails {
            phone
            email
            address
            workDays
            workTime
            facebook
            instagram
            linkedin
          }
    }
  }
 
  `);

  return { 
meta: data.meta.siteMetadata,
menu: data.menu.siteMetadata,
contact: data.contact.siteMetadata,
   }
};
