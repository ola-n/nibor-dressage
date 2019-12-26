import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
// import Carousel from 'react-images';

import { colors, niborHorizontalGradient } from '@spec/colors/';
import { breakpoints } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import { Display1, Intro } from '@components/Typography';

const Root = styled.div({});

const HeroContent = styled.div({
  color: colors.primary_white,

  '& h1': {
    fontSize: '38px !important',

    [breakpoints.tablet]: {
      fontSize: '56px !important',
    },
  },

  '& p': {
    [breakpoints.tablet]: {
      marginBottom: 16,
    },
  },
});

type Props = {
  data: Object,
};

class HorsesPage extends React.Component<Props> {
  render() {
    const { markdownRemark } = this.props.data;

    const {
      heroImage,
      title,
      gender,
      born,
      withersHeight,
      education,
      decorations,
      offsprings,
      images,
    } = markdownRemark.frontmatter;

    console.log('images ', images);

    return (
      <Layout page={'horsesPage'}>
        <SEO title={`${title}`} />
        <Root>
          <HeroSection
            background={niborHorizontalGradient}
            heroImageDesktop={heroImage}
            wide
          >
            <HeroContent>
              <Display1 color={colors.primary_yellow}>{title}</Display1>
              <Intro medium>{gender}</Intro>
              <Intro medium>{born}</Intro>
              <Intro medium>{withersHeight}</Intro>
              <Intro medium>{education}</Intro>
              {!!decorations && <Intro medium>{decorations}</Intro>}
              {!!offsprings && <Intro medium>{offsprings}</Intro>}
            </HeroContent>
          </HeroSection>

          <div style={{ height: 12 }}></div>
        </Root>
      </Layout>
    );
  }
}

export default HorsesPage;

export const query = graphql`
  query HorsesQuery($horsesSlug: String!) {
    markdownRemark(fields: { horsesSlug: { eq: $horsesSlug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        gender
        born
        withersHeight
        education
        decorations
        offsprings
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1280, maxHeight: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1280, maxHeight: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images
      }
    }
  }
`;

/*
goes boom:

images {
  childImageSharp {
    fluid(maxWidth: 1200, quality: 100) {
      ...GatsbyImageSharpFluid
    }
  }
}
*/
