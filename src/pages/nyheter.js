// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { setActivePage } from '@state/navigation/actions';
import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import { Display1 } from '@components/Typography';
import BlogEntry from '@components/blog/BlogEntry';
import LatestNews from '@components/blog/LatestNews';
import AllNews from '@components/blog/AllNews';

const Root = styled.div({
  '& #hero-root': {
    [breakpoints.desktopSmall]: {
      minHeight: 500,
    },
  },
});

const HeroContent = styled.div({});

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class NewsPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.NEWS) {
      setActivePage(routes.NEWS);
    }
  }

  render() {
    const { edges } = this.props.data.articles;
    const { heroImageDesktop } = this.props.data;
    const latestEntry = edges[0].node;
    const latestNews = edges.slice(1, 9);
    const cats = [
      {
        slug: '',
        totalCount: 1337, // TODO: Add totalCount from each child
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
    ].concat(this.props.data.categories.group);

    return (
      <Layout page={routes.NEWS}>
        <SEO
          title="Nyheter"
          meta={[
            {
              name: `og:url`,
              content: `https://www.nibor.se${routes.NEWS}`,
            },
          ]}
        />
        <Root>
          <HeroSection
            backgroundColor={colors.secondary_white}
            heroImageDesktop={heroImageDesktop}
          >
            <HeroContent>
              <Header mb={0} mt={spacing.t} color={colors.primary_blue}>
                Nyheter
              </Header>
            </HeroContent>
          </HeroSection>
          <BlogEntry latestEntry={latestEntry} />
          {!!latestNews && (
            <LatestNews latestNews={latestNews} categories={cats} />
          )}
          <AllNews allNews={edges} />
        </Root>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);

export const query = graphql`
  query NewsPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/single-colored.png" }
    ) {
      ...fragmentDesktop
    }
    articles: allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
            date
            slug
            path
            layout
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
        }
      }
    }
    categories: allMarkdownRemark {
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
