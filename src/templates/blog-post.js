import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid';

type Props = {
  data: Object,
};

class BlogPost extends React.Component<Props> {
  render() {
    const { data } = this.props;
    console.log('this.props.pageContext.slug ', this.props.pageContext.slug);

    return (
      <Layout>
        <SEO title="blog-post-title-here" />
        <Banner>
          <MainContainer>
            <div>asdsadasd </div>
          </MainContainer>
        </Banner>
      </Layout>
    );
  }
}

export default BlogPost;

export const query = graphql`
  {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
        slug
        path
        layout
      }
    }
  }
`;
