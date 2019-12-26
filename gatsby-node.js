const path = require(`path`);
const slugify = require('slugify');
const { createFilePath } = require('gatsby-source-filesystem');
const routes = require('./src/routes');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Create slugs for blog entries
    let slug = createFilePath({ node, getNode });

    if (slug) {
      createNodeField({
        node,
        name: `slug`,
        value: slugify(slug, { lower: true }),
      });
    }

    // Create slugs for blog categories
    let categorySlug = node.frontmatter.categorySlug;

    if (categorySlug) {
      createNodeField({
        node,
        name: `categorySlug`,
        value: slugify(categorySlug, { lower: true }),
      });
    }

    // Create slugs for the horses page
    let horsesSlug = node.frontmatter.horsesSlug;

    if (horsesSlug) {
      createNodeField({
        node,
        name: `horsesSlug`,
        value: slugify(horsesSlug, { lower: true }),
      });
    }
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      images: [String]
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await graphql(`
    query {
      blogPosts: allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "blog" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              date: date(formatString: "YYYY-MM-DD")
              layout
              slug
              title
              path
              intro
              categoryLabel
              categorySlug
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
      horses: allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "horses" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              date: date(formatString: "YYYY-MM-DD")
              layout
              horsesSlug
              title
              gender
              born
              withersHeight
              education
              decorations
              offsprings
              images
              path
            }
            excerpt
            fields {
              horsesSlug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    if (!data) {
      console.error('No data to create pages with');
      return;
    }

    /************  Create news-pages ************/
    const blogTemplate = path.resolve(`./src/templates/blog-post.js`);
    const blogPosts = data.blogPosts.edges;

    blogPosts.forEach(({ node }, index) => {
      const {
        fields: { slug },
      } = node;

      //since most recent(date) is first, "prev" is "next" and vice versa
      const next = index === 0 ? null : blogPosts[index - 1].node;
      const prev =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;

      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          ...node, // TODO: Remove!
          prev,
          next,
          slug,
        },
      });
    });

    /************  Create category-pages ************/
    const blogCategoryTemplate = path.resolve(
      `./src/templates/blog-category-view.js`
    );
    const categories = blogPosts.reduce(
      (acc, current) => {
        acc.push(current.node.frontmatter.categorySlug);
        return acc;
      },
      [] // initial value
    );

    categories.forEach(category => {
      createPage({
        path: `${routes.NEWS}${category}`,
        component: blogCategoryTemplate,
        context: {
          categorySlug: category,
        },
      });
    });

    /************  Create horses-pages ************/
    const horseTemplate = path.resolve(`./src/templates/horses.js`);
    const horsesPosts = data.horses.edges;

    horsesPosts.forEach(({ node }) => {
      const {
        fields: { horsesSlug },
      } = node;

      createPage({
        path: node.frontmatter.path,
        component: horseTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          horsesSlug,
          node,
        },
      });
    });
  });
};
