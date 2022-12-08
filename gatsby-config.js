/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `Eventus Consulting`,
    description: 'Vas Digitalni Marketing Partner',
    image: './src/images/logo_eventus.png',
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks:[
            {
             name:'Početna',
              link:'/'
            },
           {
            name: 'O nama',
            link: '/o-nama'
           },
           {
            name: 'Usluge',
            link: '/usluge'
           },
           {
           name: 'Blog',
           link: '/blog'
           },
           {
            name: 'Kontakt',
            link: '/kontakt'
           }
      ],
      contactDetails: {
        phone: '+ 387 62 969 994',
        email: 'info@econsulting.ba',
        address: 'Tvornička 3, 71000 Sarajevo',
        workDays: 'Pon – Sub',
        workTime: '08:00 – 16:30',
        facebook: 'https://www.facebook.com/EventusConsulting',
        instagram: 'https://www.instagram.com/eventusconsultingdoo/',
        linkedin: 'https://www.linkedin.com/company/eventus-consulting-doo/'
      }

      
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              withWebp: true,
              backgroundColor: 'none'
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              containerClass: "aspect-video", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
              sandbox: 'allow-same-origin allow-scripts allow-presentation', // Optional: iframe sandbox options - Default: undefined
            },
          },
           "gatsby-remark-responsive-iframe",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
        name: `Eventus Consulting`,
        short_name: `Econsult`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      }
    }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-transformer-json`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "data",
      "path": "./src/data/"
    },
    __key: "data"
  },
  'gatsby-plugin-postcss',

]
};