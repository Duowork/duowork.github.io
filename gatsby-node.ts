/*const path = require("path");
const { slash } = require("gatsby-core-utils");

exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions;

  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `);

  const postTemplate = path.resolve("./src/sharedComponents/posts.ts");

  allPosts.forEach((post: any) =>
    createPage({
      // URL for the blog post page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  );
};
*/