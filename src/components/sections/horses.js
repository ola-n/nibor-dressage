// @flow
import React from 'react';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { breakpoints, spacing } from '@spec/ui-spec';
import { easeOut500 } from '@spec/animations';
import { colors } from '@spec/colors/';
import routes from '../../routes';

import { Banner, MainContainer } from '@components/Grid';
import { Display3, Body1 } from '@components/Typography';
import { Button } from '../Button';

const Root = styled(Banner)({
  backgroundColor: colors.primary_white,
  color: colors.primary_blue,
  position: 'relative',
});

const MainGrid = styled.div({
  display: 'grid',
  gridColumnGap: '25px',
  gridRowGap: '15px',
  gridTemplateColumns: '1fr',

  [breakpoints.desktopSmall]: {
    gridColumnGap: 0,
    gridRowGap: '15px',
    gridTemplateColumns: '1fr 1.4fr',
  },
  [breakpoints.desktopLarge]: {
    gridColumnGap: '65px',
  },
});

const HorseGrid = styled.div({
  display: 'grid',
  gridColumnGap: '15px',
  gridTemplateColumns: '1fr 1fr 1fr',

  [breakpoints.desktopLarge]: {
    //gridColumnGap: '30px',
  },
});

const Image = styled(Img)({
  display: 'none',

  [breakpoints.desktopSmall]: {
    transform: 'translateY(-50px)',
    minWidth: 400,
    display: 'block',
  },
});

const Thumb = styled(Img)({
  transition: `transform 200ms ${easeOut500}`,
  maxWidth: 122,
  height: 'auto',

  [breakpoints.landscapePhone]: {
    maxWidth: 300,
  },

  [breakpoints.desktopSmall]: {
    maxWidth: 200,
  },
});

const HorseContent = styled.div({
  paddingTop: 30,
  paddingBottom: 50,
  paddingLeft: 0,

  [breakpoints.desktopSmall]: {
    paddingTop: 40,
    paddingLeft: 50,
  },
  [breakpoints.desktopLarge]: {
    paddingTop: 60,
    paddingLeft: 20,
  },
});

export const HorsesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      horsesImage: file(relativePath: { eq: "flygfoto/hagar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 593) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb1: file(relativePath: { eq: "hastar/thumb1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb2: file(relativePath: { eq: "hastar/thumb2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb3: file(relativePath: { eq: "hastar/thumb3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Root>
      <MainContainer pb={spacing.l}>
        <MainGrid>
          <Image fluid={data.horsesImage.childImageSharp.fluid}></Image>

          <HorseContent>
            <Display3>Våra hästar</Display3>
            <HorseGrid>
              <Link to={routes.HORSES}>
                <Thumb fluid={data.thumb1.childImageSharp.fluid}></Thumb>
              </Link>
              <Link to={routes.HORSES}>
                <Thumb fluid={data.thumb2.childImageSharp.fluid}></Thumb>
              </Link>
              <Link to={routes.HORSES}>
                <Thumb fluid={data.thumb3.childImageSharp.fluid}></Thumb>
              </Link>
            </HorseGrid>
            <Body1 mt={spacing.s} mb={spacing.m}>
              Vi har valt att satsa på PRE-hästar med extra hög kvalité både
              gällande hållbarhet och ridbarhet. Hästarna är väl uppföda på
              stora kuperade ytor, röntgade och gås regelbundet igenom av
              veterinär och equiterapeut.
            </Body1>

            <Button to={routes.HORSES}>Se alla våra hästar</Button>
          </HorseContent>
        </MainGrid>
      </MainContainer>
    </Root>
  );
};

export default HorsesSection;
