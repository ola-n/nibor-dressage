// @flow
import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { breakpoints, spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../../routes';

import { Banner, MainContainer, Grid } from '@components/Grid';
import { Body2 } from '@components/Typography';
import ArrowLink from '@components/ArrowLink';

const Root = styled(Banner)({
  color: colors.primary_white,
  position: 'relative',
  overflow: 'hidden',
});

const SaleGrid = styled(Grid)({
  gridRowGap: 0,

  [breakpoints.tablet]: {
    gridTemplateColumns: '1.4fr 1fr',
  },
  [breakpoints.desktopSmall]: {
    gridTemplateColumns: '1.6fr 1fr',
  },
  [breakpoints.desktopLarge]: {
    gridTemplateColumns: '1.3fr 1fr',
  },
});

const TextWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 180,

  [breakpoints.tablet]: {
    minHeight: 'auto',
  },
});

const Text = styled(Body2)({
  marginBottom: 12,

  [breakpoints.tablet]: {
    marginBottom: 4,
  },
});

const ImageWrap = styled('div')(
  {
    position: 'relative',
  },
  {
    [breakpoints.onlySmallPhone]: {
      marginRight: `${-spacing.sidePaddingPhoneSmall}px !important`,
      marginLeft: `${-spacing.sidePaddingPhoneSmall}px !important`,
    },
    [breakpoints.onlyPhone]: {
      marginRight: -spacing.sidePaddingPhone,
      marginLeft: -spacing.sidePaddingPhone,
    },
    [breakpoints.onlyMobile]: {
      marginRight: -spacing.sidePaddingTablet,
    },
  }
);

const Image = styled(Img)({
  maxHeight: 280,
  '& img': { objectPosition: '50% 53% !important' },

  [breakpoints.tablet]: {
    maxHeight: 200,
    '& img': { objectPosition: '50% 55% !important' },
  },
  [breakpoints.desktopSmall]: {
    '& img': { objectPosition: '50% 50% !important' },
  },
});

const ImageCover = styled('div')({
  backgroundColor: colors.primary_black,
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0.4,
  width: '100%',
  height: '100%',
});

export const ForSaleSection = () => {
  const data = useStaticQuery(graphql`
    query {
      horseImage: file(relativePath: { eq: "hastar/for-sale.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 593) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Root color={colors.primary_blue}>
      <MainContainer>
        <SaleGrid numberColumns={2}>
          <TextWrap>
            <Text>
              Vi har alltid hästar till salu i olika prisklasser
              och&nbsp;utbildningsnivåer.
            </Text>
            <ArrowLink inverted={'true'} to={routes.CONTACT}>
              Kontakta oss för mer info
            </ArrowLink>
          </TextWrap>
          <ImageWrap>
            <Image fluid={data.horseImage.childImageSharp.fluid} />
            <ImageCover />
          </ImageWrap>
        </SaleGrid>
      </MainContainer>
    </Root>
  );
};

export default ForSaleSection;
