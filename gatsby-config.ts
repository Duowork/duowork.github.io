require("dotenv").config({ path: `./.env${process.env.NODE_ENV}` });

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
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL ||
          `http://duowork-headless-backend.local/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
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
