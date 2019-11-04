// @flow
import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { spacing, breakpoints } from '@spec/ui-spec';
import { niborHorizontalGradient, colors } from '@spec/colors/';
//import routes from '../routes';

import { Banner, MainContainer } from '@components/Grid/grid';
import { Display1, Intro } from '@components/Typography';

const HeroRoot = styled(Banner)({
  background: niborHorizontalGradient,
  color: colors.primary_white,
  position: 'relative',
  overflow: 'hidden',
});

const HeroContent = styled(MainContainer)({
  display: 'flex',
  flexDirection: 'column',

  [breakpoints.desktopSmall]: {
    flexDirection: 'row',
  },
});

const TextContainer = styled.div({
  paddingTop: 16,
  paddingBottom: 42,
  paddingRight: 8,

  [breakpoints.desktopSmall]: {
    paddingTop: 32,
    paddingBottom: 112,
    paddingRight: 0,
  },

  [breakpoints.desktopLarge]: {
    paddingTop: 64,
    maxWidth: 1160,
  },
});

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)({
  minWidth: 'auto',

  [breakpoints.desktopSmall]: {
    minWidth: 441,
  },
});

const Spacer = styled.div({
  width: '100%',
  height: '100%',
  marginRight: -64,
  minWidth: 600,
  display: 'none',

  [breakpoints.desktopSmall]: {
    display: 'block',
  },
});

const TildedImage = styled(Img)({
  width: '100%',
  height: '100%',
  minWidth: 724,
  maxWidth: 724,
  position: 'absolute !important',
  top: 0,
  right: 0,
  display: 'none',

  [breakpoints.desktopSmall]: {
    minWidth: 720,
    maxWidth: 720,
    transform: 'translateX(70px)',
    display: 'block',
  },

  '@media screen and (min-width: 1170px)': {
    minWidth: 660,
    maxWidth: 660,
    transform: 'translateX(0)',
  },

  [breakpoints.desktopLarge]: {
    minWidth: 750,
    maxWidth: 750,
  },

  [breakpoints.desktopHuge]: {
    minWidth: 1080,
    maxWidth: 1080,
  },
});

const MobileImage = styled(Img)({
  width: '100%',
  height: 'auto',
  maxHeight: 290,

  [breakpoints.landscapePhone]: {
    maxHeight: 450,
  },

  [breakpoints.desktopSmall]: {
    display: 'none',
  },
});

export const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-images/temp-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroImageMobile: file(
        relativePath: { eq: "hero-images/decidido-low-res.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroRoot>
      <HeroContent>
        <TextContainer>
          <Header mb={spacing.m} color={colors.primary_yellow}>
            PRE med kvalitét
          </Header>
          <Lead>
            Nibor Dressage PRE drivs av Mika Nordström som satsar på att få fram
            konkurrenskraftiga PRE-hästar för dressyrsporten. Hästarna har bästa
            möjliga blodslinjer framtagna för såväl hållbarhet som gångarter och
            utstrålning.
          </Lead>
          <Lead mb={0}>Vår anläggning finns i Tygelsjö, utanför Malmö.</Lead>
        </TextContainer>
        <Spacer />
      </HeroContent>

      <MobileImage
        fluid={data.heroImageMobile.childImageSharp.fluid}
      ></MobileImage>
      <TildedImage
        imgStyle={{ objectPosition: 'left center' }}
        fluid={data.heroImage.childImageSharp.fluid}
      />
    </HeroRoot>
  );
};

export default HeroSection;
