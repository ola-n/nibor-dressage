// @flow
import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { breakpoints, spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
//import routes from '../routes';

import { Banner, MainContainer } from '@components/Grid/grid';
import { Display3, Body1 } from '@components/Typography';

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
    gridColumnGap: '30px',
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
  maxWidth: 122,
  height: 'auto',

  [breakpoints.tablet]: {
    maxWidth: 200,
    height: 'auto',
  },
});

const HorseContainer = styled.div({
  paddingBottom: 50,
});

const HorseContent = styled.div({
  paddingTop: 30,
  paddingLeft: 0,

  [breakpoints.desktopSmall]: {
    paddingLeft: 60,
  },
  [breakpoints.desktopLarge]: {
    paddingTop: 60,
    paddingLeft: 60,
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
          fluid(maxWidth: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb2: file(relativePath: { eq: "hastar/thumb2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb3: file(relativePath: { eq: "hastar/thumb3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Root>
      <MainContainer>
        <MainGrid>
          <Image fluid={data.horsesImage.childImageSharp.fluid}></Image>
          <HorseContainer>
            <HorseContent>
              <Display3>Våra hästar</Display3>
              <HorseGrid>
                <Thumb fluid={data.thumb1.childImageSharp.fluid}></Thumb>
                <Thumb fluid={data.thumb2.childImageSharp.fluid}></Thumb>
                <Thumb fluid={data.thumb3.childImageSharp.fluid}></Thumb>
              </HorseGrid>
              <Body1 mt={spacing.t}>
                Vi har valt att satsa på PRE-hästar med extra hög kvalité både
                gällande hållbarhet och ridbarhet. Hästarna är väl uppföda på
                stora kuperade ytor, röntgade och gås regelbundet igenom av
                veterinär och equiterapeut.
              </Body1>
            </HorseContent>
          </HorseContainer>
        </MainGrid>
      </MainContainer>
    </Root>
  );
};

export default HorsesSection;
