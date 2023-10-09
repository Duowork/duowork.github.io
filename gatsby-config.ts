require("dotenv").config({ path: `./.env.development` });

module.exports = {
  // Document head meta configuration
  siteMetadata: {
    title: `Duowork`,
    description: `Tailor-made design and software solutions for business success. At Duowork, we specialize in crafting customized and robust solutions for startups and businesses. our mission is to help build and maintain digital ideas and ventures.`,
    siteUrl: `https://duowork.tech`,
    author: {
      name: `Romeo Peter | Isaac Olugbenga`,
      summary: `Founder and co-founder of Duowork.`,
    },
    socialMedia: {
      twitter: `duoworkhq`,
      instagram: `duoworkhq`,
      thread: `duoworkhq`,
      linkedIn: `duowork`
    },
  },

  // Your site config here
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          placeholder: "blurred",
        },
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        verbose: true,
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
        url:
          process.env.NODE_ENV === `development`
            ? `http://duowork-headless-backend.local/graphql`
            : process.env.WPGRAPHQL_URL,
        html: {
          // Determines the image quality that Sharp will use when generating inline html image thumbnails.
          imageQuality: 80,
        },
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
          // The number of concurrent GraphQL requests to make at any time during node sourcing.
          requestConcurrency: 10,
          // The amount of time in ms before GraphQL requests will time out.
          timeout: 50000,
        },
        // develop: {
        //   //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
        //   hardCacheMediaFiles: true,
        // },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
  ],
  // proxy: [{
  //   prefix: "api/subscribe",
  //   url: "https://api.getresponse.com/v3/campaigns"
  // }]
};
