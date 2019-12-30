import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import { colors } from '@spec/colors/';
import { breakpoints } from '@spec/ui-spec';
import { resetStyle } from '@components/Grid';
import { easeOut500 } from '@spec/animations';

const Root = styled.div(
  { position: 'relative', overflow: 'hidden' },
  ({ paddingReset }) => {
    if (paddingReset) {
      return resetStyle;
    }
  },
  space
);

const Clipper = styled.div(
  {
    width: 150,
    height: 150,
    backgroundColor: colors.primary_white,
    position: 'absolute',
  },
  ({ clipperPos }) => {
    if (clipperPos === 'tl') {
      return {
        top: 0,
        left: 0,
        transform: 'rotate(45deg) translateX(-106px)',
      };
    }
    if (clipperPos === 'br') {
      return {
        bottom: 0,
        right: 0,
        transform: 'rotate(135deg) translateY(-106px)',

        [breakpoints.tablet]: {
          top: 0,
          left: 0,
          transform: 'rotate(45deg) translateX(-106px)',
        },
      };
    }
    if (clipperPos === 'tr') {
      return {
        top: -149,
        right: 0,
        transform: 'rotate(135deg) translateY(-106px)',

        [breakpoints.tablet]: {
          top: 0,
          left: 0,
          transform: 'rotate(45deg) translateX(-106px)',
        },
      };
    }
  }
);

const Image = styled(Img)(
  ({ animated }) => {
    if (animated) {
      return {
        transform: 'scale(1)',
        transition: `.3s ${easeOut500}`,

        '&:hover': {
          transform: 'scale(1.07)',
          cursor: 'pointer',
        },
      };
    }
  },
  ({ desktopSquare }) => {
    if (desktopSquare) {
      return {
        paddingBottom: '40%',
      };
    }
  },
  ({ style }) => style
);

/*
 * clipperPos: Currently only configurable on mobile. Can take the following values:
 *             tl = top left / tr = top right / bl = bottom left / br = bottom right
 * paddingReset: Should be used if the image should stretch out to the edges
 *               of the page ie not get padded by MainContainer on mobile.
 */
type Props = {
  image: Object,
  desktopSquare: boolean,
  imgStyle: Object,
  paddingReset: boolean,
  clipperPos: string,
  style: Object,
  animated: boolean,
};

const ClippedImage = (props: Props) => {
  const {
    desktopSquare,
    paddingReset,
    clipperPos = 'tl',
    animated,
    imgStyle,
    image,
    style,
  } = props;

  return (
    <Root {...props}>
      <Image
        fluid={image.childImageSharp.fluid}
        desktopSquare={desktopSquare}
        imgStyle={imgStyle}
        paddingReset={paddingReset}
        style={style}
        animated={animated}
        loading="eager"
      />
      <Clipper clipperPos={clipperPos} />
    </Root>
  );
};

export default ClippedImage;
