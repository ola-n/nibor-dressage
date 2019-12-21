import React from 'react';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';

import routes from '../routes';
import { colors } from '@spec/colors/';
import { breakpoints } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import BlogEntry from '@components/blog/BlogEntry';
import { Subhead } from '@components/Typography';
import ArrowNav from '@components/ArrowNav';

const Root = styled.div({
  '& #hero-root': {
    [breakpoints.desktopSmall]: {
      minHeight: 500,
    },
  },
  '& #hero-text': {
    paddingTop: 16,
    paddingBottom: 16,

    [breakpoints.desktopSmall]: {
      paddingTop: 56,
      paddingBottom: 92,
    },
  },
});

const HeroContent = styled.div({});

type Props = {
  data: Object,
};

class BlogPost extends React.Component<Props> {
  render() {
    const { markdownRemark } = this.props.data;
    const { title, categoryLabel, categorySlug } = markdownRemark.frontmatter;
    const { heroImageDesktop } = this.props.data;

    return (
      <Layout>
        <SEO title={`${title}`} />
        <Root>
          <HeroSection
            backgroundColor={colors.secondary_white}
            heroImageDesktop={heroImageDesktop}
          >
            <HeroContent>
              <ArrowNav
                items={[
                  <Link key="blog-home" to={routes.NEWS}>
                    Nyheter
                  </Link>,
                  <Link
                    to={`${routes.NEWS}${categorySlug}`}
                    key="blog-category"
                  >
                    {categoryLabel}
                  </Link>,
                  <Subhead key="blog-entry" color={colors.primary_yellow}>
                    {title}
                  </Subhead>,
                ]}
              />
            </HeroContent>
          </HeroSection>
          <BlogEntry latestEntry={markdownRemark} />
          <div style={{ height: 12 }}></div>
        </Root>
      </Layout>
    );
  }
}

// to={`${routes.BLOG_CATEGORY}${category.id}/`}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/single-colored.png" }
    ) {
      ...fragmentDesktop
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;
