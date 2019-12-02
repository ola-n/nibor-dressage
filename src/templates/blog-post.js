import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid';
import { Display2, Subhead } from '@components/Typography';

const TempLink = styled('a')({
  cursor: 'pointer',
  color: colors.primary_blue,

  '&:hover': { color: colors.primary_yellow },
});

type Props = {
  data: Object,
};

class BlogPost extends React.Component<Props> {
  render() {
    const { html } = this.props.data.markdownRemark;
    const { frontmatter } = this.props.data.markdownRemark;
    const { title, intro } = this.props.data.markdownRemark.frontmatter;
    const image = frontmatter.image && frontmatter.image.childImageSharp;

    return (
      <Layout>
        <SEO title={`${title} ${intro}`} />
        <Banner>
          <MainContainer>
            <br />
            <TempLink
              onClick={() => {
                typeof history !== 'undefined' && history.go(-1);
              }}
            >
              {'Tillbaks'}
            </TempLink>
            <br />
            <br />
            <br />
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <Display2>{title}</Display2>
              <Subhead mb={spacing.m}>{intro}</Subhead>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
              <p>Image from markdown:</p>
              <Image fluid={image.fluid}></Image>
            </div>
          </MainContainer>
        </Banner>
      </Layout>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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