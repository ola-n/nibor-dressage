// @flow
import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
//import routes from '../routes';

import { Banner, MainContainer } from '@components/Grid';

const HeroRoot = styled(Banner)(
  {
    color: colors.primary_white,
    position: 'relative',
    overflow: 'hidden',
  },
  ({ background }) => !!background && { background: background },
  ({ backgroundColor }) =>
    !!backgroundColor && { backgroundColor: backgroundColor }
);

const HeroContent = styled(MainContainer)({
  display: 'flex',
  flexDirection: 'column',

  [breakpoints.desktopSmall]: {
    flexDirection: 'row',
  },
});

const TextContainer = styled.div({
  paddingTop: 16,
  paddingBottom: 32,
  paddingRight: 8,
  width: '100%',

  [breakpoints.desktopSmall]: {
    paddingTop: 32,
    paddingBottom: 92,
    paddingRight: 0,
  },

  [breakpoints.desktopLarge]: {
    paddingTop: 64,
    maxWidth: 1160,
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

type Props = {
  background?: string,
  backgroundColor?: string,
  children: Object,
  heroImageDesktop: Object,
  heroImageMobile?: Object,
};

export const HeroSection = ({
  background,
  backgroundColor,
  heroImageDesktop,
  heroImageMobile,
  children,
}: Props) => {
  return (
    <HeroRoot
      id={'hero-root'}
      background={background}
      backgroundColor={backgroundColor}
    >
      <HeroContent>
        <TextContainer id={'hero-text'}>{children}</TextContainer>
        <Spacer />
      </HeroContent>

      {!!heroImageMobile && (
        <MobileImage
          fluid={heroImageMobile.childImageSharp.fluid}
        ></MobileImage>
      )}
      <TildedImage
        imgStyle={{ objectPosition: 'left center' }}
        fluid={heroImageDesktop.childImageSharp.fluid}
        loading="eager"
      />
    </HeroRoot>
  );
};

export default HeroSection;
