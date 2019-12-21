const path = require(`path`);
const slugify = require('slugify');
const { createFilePath } = require('gatsby-source-filesystem');
const routes = require('./src/routes');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Create slugs for blog entries if there are non in the md-file
    let slug = createFilePath({ node, getNode, basePath: 'pages' });
    let categorySlug = node.frontmatter.categorySlug;
    if (!node.frontmatter.slug) {
      node.frontmatter.slug = slugify(slug, { lower: true });
    }

    createNodeField({
      node,
      name: `slug`,
      value: slugify(slug, { lower: true }),
    });

    createNodeField({
      node,
      name: `categorySlug`,
      value: slugify(categorySlug, { lower: true }),
    });
  }
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
  });
};
