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

type Props = {
  data: Object,
};

class BlogCategoryView extends React.Component<Props> {
  render() {
    //const { markdownRemark } = this.props.data;
    console.log('this.props.data ', this.props.data);

    return (
      <Layout>
        <SEO title={`${'title'}`} />
        <Root>Category view</Root>
      </Layout>
    );
  }
}

export default BlogCategoryView;

export const query = graphql`
  query BlogCategoryQuery($categorySlug: String!) {
    categories: allMarkdownRemark(
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
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
