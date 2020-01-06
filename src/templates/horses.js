import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { colors, niborHorizontalGradient } from '@spec/colors/';
import { setActivePage } from '@state/navigation/actions';
import { breakpoints, spacing } from '@spec/ui-spec';
import pedigrees from '../horses/pedigrees';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer, Grid, resetStyle } from '@components/Grid';
import { HeroSection } from '@components/sections/hero';
import { Display1, Intro, Title1 } from '@components/Typography';
import Pedigree from '@components/Pedigree';

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

const HorseName = styled(Display1)({
  [breakpoints.tablet]: {
    maxWidth: 455,
  },

  [breakpoints.desktopHuge]: {
    maxWidth: 800,
  },
});

const Images = styled(Grid)(
  {
    gridRowGap: '0 !important',
    gridColumnGap: '0 !important',
  },
  resetStyle
);

const Image = styled(Img)({
  maxHeight: 450,
});

const DividerHeader = styled(Title1)({
  fontSize: 18,
  marginBottom: 2,

  [breakpoints.tablet]: {
    fontSize: 20,
  },
});

const DividerLine = styled('div')({
  borderTop: `1px solid ${colors.primary_yellow}`,
  paddingTop: 16,
});

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class HorsesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.HORSES) {
      setActivePage(routes.HORSES);
    }
  }

  render() {
    const { markdownRemark } = this.props.data;

    const {
      born,
      title,
      gender,
      images,
      breeder,
      education,
      heroImage,
      horsesSlug,
      decorations,
      withersHeight,
      offsprings = false,
    } = markdownRemark.frontmatter;

    const pedigree = pedigrees[horsesSlug];

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
              <HorseName color={colors.primary_yellow}>{title}</HorseName>
              <Intro medium>{gender}</Intro>
              <Intro medium>{born}</Intro>
              <Intro medium>{withersHeight}</Intro>
              <Intro medium>{education}</Intro>
              <Intro medium>{breeder}</Intro>
              {!!decorations && <Intro medium>{decorations}</Intro>}
              {!!offsprings && <Intro medium>{offsprings}</Intro>}
            </HeroContent>
          </HeroSection>
          {!!images && (
            <Banner>
              <MainContainer pt={spacing.l} pb={spacing.l}>
                <DividerHeader bold color={colors.primary_blue}>
                  Bilder
                </DividerHeader>
                <DividerLine />

                <Images numberColumns="2">
                  {images.map((image, key) => (
                    <Image
                      key={key}
                      fluid={image.childImageSharp.fluid}
                      loading="eager"
                    />
                  ))}
                </Images>
              </MainContainer>
            </Banner>
          )}

          {!!pedigree && (
            <Banner>
              <MainContainer pb={spacing.l}>
                <DividerHeader bold color={colors.primary_blue}>
                  Stamtavla
                </DividerHeader>
                <DividerLine />

                <Pedigree pedigree={pedigree} />
              </MainContainer>
            </Banner>
          )}
          <div style={{ height: 12 }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HorsesPage);

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
        breeder
        education
        decorations
        offsprings
        horsesSlug
        withersHeight
        coverImage {
          childImageSharp {
            fluid(maxWidth: 730, maxHeight: 520) {
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
            fluid(maxWidth: 720, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
