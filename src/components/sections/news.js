// @flow
import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { breakpoints, spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../../routes';

import { Banner, MainContainer } from '@components/Grid';
import { Display3, Display4, Body2 } from '@components/Typography';
import { Button } from '../Button';
import ArrowLink from '@components/ArrowLink';

import largeArrowBlue from '@images/common/arrow-large-blue.svg';
//import largeArrowYellow from '@images/common/arrow-large-yellow.svg';

const cardWidth = {
  xTiny: 270,
  tiny: 300,
  xsmall: 340,
  small: 550,
  medium: 690,
  large: 778,
};

const cardSpacing = {
  xTiny: 6,
  tiny: 8,
  small: 16,
  medium: 24,
  large: 32,
};

const Root = styled(Banner)({
  color: colors.primary_white,
  position: 'relative',
  overflow: 'hidden',
});

const Scroller = styled('div')({
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  margin: '0 -12px',

  [breakpoints.regularPhone]: {
    margin: '0 -16px',
  },

  [breakpoints.tablet]: {
    margin: 0,
    overflowX: 'hidden',
  },
});

const Wrapper = styled('div')({
  maxWidth: cardWidth.xTiny + cardSpacing.xTiny * 2,
  display: 'block',
  margin: '0 auto',

  [breakpoints.regularPhone]: {
    maxWidth: cardWidth.tiny + cardSpacing.xTiny * 2,
  },

  [breakpoints.landscapePhone]: {
    maxWidth: cardWidth.xsmall + cardSpacing.tiny * 2,
  },

  [breakpoints.tablet]: {
    maxWidth: cardWidth.small + cardSpacing.small * 2,
  },

  [breakpoints.desktopSmall]: {
    maxWidth: cardWidth.medium + cardSpacing.small * 2,
  },

  [breakpoints.desktopLarge]: {
    maxWidth: cardWidth.large + cardSpacing.large * 2,
  },
});

const NewsList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'visible',
  paddingBottom: 32,
  color: colors.primary_blue,
  transition: `all .4s ease-in-out`,
});

const Padder = styled('div')({
  padding: `0 ${cardSpacing.xTiny}px`,

  [breakpoints.landscapePhone]: {
    padding: `0 ${cardSpacing.tiny}px`,
  },

  [breakpoints.tablet]: {
    padding: `0 ${cardSpacing.small}px`,
  },

  [breakpoints.desktopSmall]: {
    padding: `0 ${cardSpacing.small}px`,
  },

  [breakpoints.desktopLarge]: {
    padding: `0 ${cardSpacing.large}px`,
  },
});

const NewsCard = styled('div')({
  minWidth: cardWidth.xTiny,
  minHeight: 515,
  backgroundColor: colors.blue_bg,
  display: 'flex',
  flexDirection: 'column',
  scrollSnapAlign: 'center',

  [breakpoints.regularPhone]: {
    minHeight: 480,
    minWidth: cardWidth.tiny,
  },

  [breakpoints.landscapePhone]: {
    minWidth: cardWidth.xsmall,
    minHeight: 460,
  },

  [breakpoints.tablet]: {
    minWidth: cardWidth.small,
    minHeight: 430,
  },

  [breakpoints.desktopSmall]: {
    minWidth: cardWidth.medium,
    flexDirection: 'row',
    minHeight: 360,
  },

  [breakpoints.desktopLarge]: {
    minWidth: cardWidth.large,
    minHeight: 344,
  },
});

const Image = styled(Img)({
  width: '100%',
  height: 150,

  [breakpoints.tablet]: {
    width: 327,
    height: 150,
  },

  [breakpoints.desktopSmall]: {
    minWidth: 280,
    maxWidth: 280,
    height: 173,
  },
});

const TextWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  flex: 1,

  [breakpoints.desktopSmall]: {
    padding: 24,
  },

  [breakpoints.desktopLarge]: {
    padding: '32px 48px 24px 40px',
  },
});

const Controls = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const NavArrows = styled('div')({
  display: 'none',
  flexDirection: 'row',
  position: 'relative',

  [breakpoints.tablet]: {
    display: 'flex',
  },
});

const ArrowPrev = styled('img')(
  {
    transform: 'rotate(180deg)',
    cursor: 'pointer',
    width: 78,
    height: 50,
  },
  ({ selected }) => selected && { position: 'absolute', left: 0, top: 0 }
);

const ArrowNext = styled('img')(
  {
    transition: `opacity .2 linear`,
    cursor: 'pointer',
    width: 78,
    height: 50,

    '&:hover': {
      opacity: 1,
    },
  },
  ({ selected }) =>
    selected && {
      transition: `opacity .2 linear`,
      position: 'absolute',
      cursor: 'pointer',
      right: 0,
      top: 0,
      opacity: 0,

      '&:hover': {
        opacity: 1,
      },
    }
);

type Props = {
  firstArticles: Array<Object>,
};

export class NewsSection extends React.Component<Props> {
  state = {
    selectedIndex: 0,
  };

  prev = () => {
    this.setState({ selectedIndex: this.state.selectedIndex - 1 });
  };

  next = () => {
    this.setState({ selectedIndex: this.state.selectedIndex + 1 });
  };

  render() {
    const { firstArticles } = this.props;
    const { selectedIndex } = this.state;

    const transform = -1 * 100 * selectedIndex;

    return (
      <Root pb={spacing.xl}>
        <MainContainer>
          <Wrapper>
            <Padder>
              <Display3 color={colors.primary_blue}>Senaste nytt</Display3>
            </Padder>
          </Wrapper>
          <Scroller>
            <Wrapper>
              <NewsList style={{ transform: `translateX(${transform}%)` }}>
                {!!firstArticles &&
                  firstArticles.map((article, key) => (
                    <Padder key={key}>
                      <NewsCard>
                        <Image
                          fluid={
                            article.node.frontmatter.image.childImageSharp.fluid
                          }
                        />
                        <TextWrap>
                          <Display4>{article.node.frontmatter.title}</Display4>
                          <Body2>{article.node.excerpt}</Body2>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row-reverse',
                              alignItems: 'flex-end',
                              height: '100%',
                              flex: 1,
                            }}
                          >
                            <ArrowLink
                              bold
                              inverted={'true'}
                              to={article.node.frontmatter.path}
                            >
                              Till inlägget
                            </ArrowLink>
                          </div>
                        </TextWrap>
                      </NewsCard>
                    </Padder>
                  ))}
                {/* This last item is needed to get snapping to work properly in mobile */}
                <div
                  style={{
                    backgroundColor: 'red',
                    opacity: 0,
                  }}
                >
                  asdasdasdasdasdad
                </div>
              </NewsList>
            </Wrapper>
          </Scroller>

          <Wrapper>
            <Padder>
              <Controls>
                <Button to={routes.NEWS}>Läs alla nyheter</Button>
                <NavArrows>
                  <div style={{ width: 78, height: '100%', marginRight: 18 }}>
                    <ArrowPrev
                      style={{
                        display: selectedIndex > 0 ? 'block' : 'none',
                      }}
                      src={largeArrowBlue}
                      alt="arrowePrev"
                      onClick={() => this.prev()}
                    />
                  </div>

                  <div style={{ width: 78, height: '100%' }}>
                    <ArrowNext
                      style={{
                        display: selectedIndex < 7 ? 'block' : 'none',
                      }}
                      src={largeArrowBlue}
                      alt="arroweNext"
                      onClick={() => this.next()}
                    />
                  </div>
                </NavArrows>
              </Controls>
            </Padder>
          </Wrapper>
        </MainContainer>
      </Root>
    );
  }
}

export default NewsSection;
