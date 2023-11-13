import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  // fromURL: process.env.FROM_URL === "true",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [{
    singularName: "escuela",
    queryParams: {
      populate: {
        bgBoton: "*",
        direccion: {
          populate: "*",
        },
        horarios: {
          populate: "*",
        },
        numerosContacto: {
          populate: "*",
        },
        cursos: {
          populate: "*",
        },
        caracteristicas: {
          populate: "*",
        },
        schoolbanner: {
          populate: "*",
        },
        categories: "*",
      },
    },
  }, "blog"],
  singleTypes: [
    {
      singularName: "inicio",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          beneficios: {
            populate: "*",
          },
          paymentOption: {
            populate: "*",
          },
          categories: "*",
        },
      },
    }, `cta-banner`, `footer`
  ],
  // remoteFileHeaders: {
  //   /**
  //    * Customized request headers
  //    * For http request with a image or other files need authorization
  //    * For expamle: Fetch a CDN file which has a security config when gatsby building needs
  //    */
  //   Referer: "https://your-site-domain/",
  //   // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  // },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Escuela Si Manejo`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@lalo_nbc`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.simanejo.com`,
    apiURL: process.env.STRAPI_API_URL,
    fromURL: process.env.FROM_URL === "true",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-layout",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};

export default config;
