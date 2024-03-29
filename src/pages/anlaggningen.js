// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { space } from 'styled-system';

import { setActivePage } from '@state/navigation/actions';
import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer, Grid } from '@components/Grid';
import { HeroSection } from '@components/sections/hero';
import { Display1, Intro, Body2 } from '@components/Typography';
import ClippedImage from '@components/ClippedImage';

const HeroContent = styled.div({ width: '100%' });

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)(
  {
    minWidth: 'auto',
    marginBottom: 4,

    [breakpoints.desktopSmall]: {
      width: '100%',
      maxWidth: 421,
      marginBottom: 8,
    },
    [breakpoints.desktopLarge]: {
      width: '100%',
      maxWidth: 688,
    },
  },
  space
);

const FacilityGrid = styled(Grid)({
  [breakpoints.tablet]: {
    gridTemplateColumns: '1.5fr 1fr',
  },
});

const TextContainer = styled.div({});
const ImageContainer = styled.div({
  [breakpoints.tablet]: {
    paddingBottom: 96,
  },
  [breakpoints.desktopLarge]: {
    paddingLeft: 64,
    paddingRight: 64,
  },
});

const topImageStyle = css({
  [breakpoints.tablet]: {
    marginBottom: 64,
  },
});

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class FacilitiesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.FACILITY) {
      setActivePage(routes.FACILITY);
    }
  }

  render() {
    const {
      heroImageDesktop,
      heroImageMobile,
      losdrift,
      ridhus,
    } = this.props.data;

    return (
      <Layout page={routes.FACILITY}>
        <SEO title="Anläggningen" />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <HeroContent>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Anläggningen
            </Header>
            <Lead color={colors.primary_blue}>Gränskullavägen Tygelsjö</Lead>
            <Lead color={colors.primary_blue}>Grundad 2017</Lead>
            <Lead color={colors.primary_blue}>5ha hagar</Lead>
            <Lead color={colors.primary_blue}>
              Ridhus, stall med 8 boxar och lösdrift
            </Lead>
            <Lead color={colors.primary_blue} mb={spacing.t}>
              Ridbana med värmeslingor, fibersand & automatisk bevattning
            </Lead>
          </HeroContent>
        </HeroSection>
        <Banner>
          <MainContainer pt={spacing.m}>
            <FacilityGrid numberColumns={2}>
              <TextContainer>
                <Body2 color={colors.secondary_blue} mb={spacing.s}>
                  2008 köpte vi gården på Gränskullavägen i Tygelsjö, den bestod
                  då endast av ett gammalt bostadshus och 5ha åkermark. Vi
                  byggde ett litet utestall med fyra boxar och hästarna hade
                  stora, gröna hagar att röra sig på. Eftersom vi stått
                  inackorderade på diverse ställen genom åren visste vi hur
                  viktigt det var att ha en bra utebana. Tillsammans med HJ-gräv
                  anlades en av Sveriges mest väldrenerade ridbanor med
                  värmeslingor, fibersand och automatisk bevattning. Den är än
                  idag, tio år senare, i toppskick och har sällan en endaste
                  vattenpöl.{' '}
                </Body2>
                <Body2 color={colors.secondary_blue} mb={spacing.s}>
                  2017 blev drömmen om ett ridhus sann. Ett stort, isolerat
                  ridhus som är svalt på sommaren och håller runt 10 grader på
                  vintern. För att få fram bästa möjliga underlag gjordes
                  mängder av experiment, där vi fyllde behållare med olika typer
                  av sand och tillsatte vatten för att se hur underlagets svikt,
                  konsistens och rörligthet blev. När vi hittat en kombination
                  av sander som vi var nöjda med, bestämde vi oss för ett high-
                  tide system där underlaget vattnas underifrån.
                </Body2>
                <Body2 color={colors.secondary_blue} mb={spacing.s}>
                  Givetvis var vår egen uppfinnarjocke Robin tvungen till att
                  göra en del förbättringar av systemet vilket resulterade i att
                  vi idag har en underlag med perfekt doserad vattenmängd jämt
                  fördelat över ridbanans yta. Själva systemet är nu i stort
                  sett underhållsfritt. I samband med ridhusbygget byggdes
                  stallet ut till åtta boxar. Det blev ett luftigt stall med
                  alla förnödenheter. Även solpaneler placerades på stallets
                  tak, vilka idag försörjer både stall och ridhus med
                  elektricitet.
                </Body2>
                <Body2 color={colors.secondary_blue} mb={spacing.m}>
                  Det senaste projektet har varit att vi byggt en lösdrift för
                  de hästar som är i behov av det. Vi har även fått arrendera
                  mer mark som vi använder till fler hagar åt hästarna samt att
                  vi nu har egenproducerat hö.
                </Body2>
              </TextContainer>
              <ImageContainer>
                <ClippedImage
                  image={losdrift}
                  imgStyle={{ objectPosition: `80% center` }}
                  desktopSquare
                  paddingReset
                  style={topImageStyle}
                />
                <ClippedImage
                  image={ridhus}
                  imgStyle={{ objectPosition: `80% center` }}
                  desktopSquare
                  paddingReset
                  clipperPos={'br'}
                />
              </ImageContainer>
            </FacilityGrid>
          </MainContainer>
        </Banner>
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
)(FacilitiesPage);

export const query = graphql`
  query FacilitiesPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-anlaggningen.png" }
    ) {
      ...fragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-anlaggningen.jpg" }
    ) {
      ...fragmentMobile
    }
    losdrift: file(relativePath: { eq: "flygfoto/losdrift.jpg" }) {
      ...fragmentMobile
    }
    ridhus: file(relativePath: { eq: "anlaggningen/ridhus.jpg" }) {
      ...fragmentMobile
    }
  }
`;
