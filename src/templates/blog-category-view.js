import React from 'react';
import { graphql } from 'gatsby';

import { spacing } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer, Grid } from '@components/Grid';
import CategoryPicker from '@components/blog/CategoryPicker';
import NewsCard from '@components/blog/NewsCard';

type Props = {
  data: Object,
};

class BlogCategoryView extends React.Component<Props> {
  render() {
    const { posts } = this.props.data;
    const cats = [
      {
        slug: '',
        totalCount: 1337, // check length of arrays
        edges: [
          {
            node: {
              frontmatter: {
                categoryLabel: 'alla kategorier',
                categorySlug: '',
              },
            },
          },
        ],
      },
    ].concat(this.props.data.allCategories.group);

    return (
      <Layout page={'CategoryView'}>
        <SEO title={'Kategorisida'} />
        <Banner>
          <MainContainer py={spacing.l}>
            <CategoryPicker categories={cats} />
            <Grid numberColumns={2}>
              {!!posts.edges &&
                posts.edges.map((article, key) => {
                  const {
                    date,
                    title,
                    image,
                    slug,
                    categoryLabel,
                    categorySlug,
                  } = article.node.frontmatter;

                  return (
                    <NewsCard
                      key={key}
                      title={title}
                      image={image}
                      slug={slug}
                      date={date}
                      category={categoryLabel}
                      categorySlug={categorySlug}
                    ></NewsCard>
                  );
                })}
            </Grid>
          </MainContainer>
        </Banner>
      </Layout>
    );
  }
}

export default BlogCategoryView;

export const query = graphql`
  query BlogCategoryQuery($categorySlug: String!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { categorySlug: { eq: $categorySlug } } }
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
            image {
              childImageSharp {
                fluid(maxWidth: 1280, maxHeight: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    allCategories: allMarkdownRemark {
      group(field: frontmatter___categorySlug) {
        slug: fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              categoryLabel
            }
          }
        }
      }
    }
  }
`;
