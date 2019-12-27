import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { colors, niborHorizontalGradient } from '@spec/colors/';
import { breakpoints, spacing } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer, Grid, resetStyle } from '@components/Grid';
import { HeroSection } from '@components/sections/hero';
import { Display1, Intro, Title1 } from '@components/Typography';

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

const Images = styled(Grid)(
  {
    borderTop: `1px solid ${colors.primary_yellow}`,
    paddingTop: 16,
    gridRowGap: '0 !important',
    gridColumnGap: '0 !important',
  },
  resetStyle
);

const Image = styled(Img)({
  maxHeight: 450,
});

const Header = styled(Title1)({
  fontSize: 16,
  marginBottom: 2,

  [breakpoints.tablet]: {
    fontSize: 18,
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
          <Banner>
            <MainContainer pt={spacing.l} pb={spacing.xl}>
              {!!images && (
                <div>
                  <Header bold color={colors.primary_blue}>
                    Bilder
                  </Header>
                  <Images numberColumns="2">
                    {images.map((image, key) => (
                      <Image key={key} fluid={image.childImageSharp.fluid} />
                    ))}
                  </Images>
                </div>
              )}
            </MainContainer>
          </Banner>

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
        images {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
