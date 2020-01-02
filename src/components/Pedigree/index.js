import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space, color } from 'styled-system';

import { colors } from '@spec/colors/';
import { breakpoints } from '@spec/ui-spec';
import { fontWeight } from '@components/Typography';

import colorBrown from '@images/pedigree/color_brown.svg';
import colorWhite from '@images/pedigree/color_white.svg';
import colorPalomina from '@images/pedigree/color_palomina.svg';

import prizeRed from '@images/pedigree/prize_red.svg';
import prizeBlue from '@images/pedigree/prize_blue.svg';
import prizeGreen from '@images/pedigree/prize_green.svg';
import prizeOrange from '@images/pedigree/prize_orange.svg';
import prizeYellow from '@images/pedigree/prize_yellow.svg';

const PedigreeScroller = styled('div')({
  overflowY: 'hidden',
  overflowX: 'scroll',

  // Template literals not allowed, breakpoint is kind of 1280 + sidePaddingDesktopLarge * 2
  '@media screen and (min-width: 1425px)': {
    overflowX: 'hidden',
  },
});

const PedigreeRoot = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 24,
});

const Box = styled('div')(
  {
    padding: '8px 14px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: -1,
    zIndex: 1,
    width: 328,
  },
  ({ gender }) => {
    if (gender === 'male') {
      return {
        backgroundColor: '#F1F7FE',
        border: '1px solid #92AFD1',
      };
    } else {
      return {
        backgroundColor: '#FCF0F4',
        border: '1px solid #D86289',
      };
    }
  },
  ({ hero }) => hero && { padding: '20px 24px', marginLeft: 0, marginRight: -1 }
);

const Text = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const nameStyle = css({
  fontSize: 12,
  lineHeight: 1.5,
  fontWeight: fontWeight.bold,
  textTransform: 'none',

  [breakpoints.desktopSmall]: { fontSize: 12 },
});

export const NameText = styled.div(
  nameStyle,
  color,
  space,
  ({ hero }) => hero && { fontSize: '18px !important' }
);

const Name = NameText.withComponent('h4');

const idStyle = css({
  fontSize: 10,
  lineHeight: 1.5,
  fontWeight: fontWeight.regular,
  textTransform: 'none',

  [breakpoints.desktopSmall]: { fontSize: 10 },
});

export const Id = styled.div(
  idStyle,
  color,
  space,
  ({ hero }) => hero && { fontSize: '12px !important' }
);

const Column = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ({ border }) => border && { borderLeft: `1px solid ${border}` },
  ({ col2 }) =>
    col2 && {
      minHeight: 486,
      zIndex: 1,
      transform: 'translateX(-230px)',

      [breakpoints.tablet]: { transform: 'translateX(0)' },
    },
  ({ col3 }) =>
    col3 && {
      minHeight: 696,
      transform: 'translateX(-460px)',

      [breakpoints.tablet]: { transform: 'translateX(0)' },
    },
  ({ col4 }) =>
    col4 && {
      minHeight: 798,
      zIndex: 1,
      transform: 'translateX(-460px)',

      [breakpoints.tablet]: { transform: 'translateX(0)' },
    }
);

const ParentBox = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({ border }) => border && { borderLeft: `1px solid ${border}` }
);

const Spacer1 = styled('div')({
  height: 163,
});

const Spacer2 = styled('div')({
  height: 50,
});

const Decorations = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: 28,
});

const Decoration = styled('img')({
  height: '100%',
  width: 'auto',
  marginLeft: 3,
});

type Props = {
  pedigree: Object,
};

class Pedigree extends React.Component<Props> {
  getDecoration = decoration => {
    switch (decoration) {
      case 'prizeYellow':
        return prizeYellow;
      case 'prizeBlue':
        return prizeBlue;
      case 'prizeOrange':
        return prizeOrange;
      case 'prizeRed':
        return prizeRed;
      case 'prizeGreen':
        return prizeGreen;

      case 'colorBrown':
        return colorBrown;
      case 'colorWhite':
        return colorWhite;
      case 'colorPalomina':
        return colorPalomina;
    }
  };

  render() {
    const { pedigree } = this.props;

    return (
      <PedigreeScroller>
        <PedigreeRoot>
          {/******** #1 ********/}
          <Column style={{ zIndex: 2 }}>
            <Box gender={'male'} hero>
              <Text>
                <Name mb={0} hero color={colors.primary_blue}>
                  <a href={pedigree.href}>{pedigree.name}</a>
                </Name>

                <Id hero color={colors.primary_blue}>
                  <a href={pedigree.href}>{pedigree.ueln}</a>
                </Id>
              </Text>

              <Decorations>
                {pedigree.decorations.map((decoration, key) => (
                  <Decoration key={key} src={this.getDecoration(decoration)} />
                ))}
              </Decorations>
            </Box>
          </Column>

          {/******** #2 ********/}
          <Column col2 border={'#B4B4B4'}>
            {pedigree.line1.map((horse, key) => (
              <Box key={key} gender={horse.gender} style={{ marginRight: -1 }}>
                <Text>
                  <Name mb={0}>
                    <a href={horse.href}>{horse.name}</a>
                  </Name>
                  <Id>
                    <a href={horse.href}>{horse.ueln}</a>
                  </Id>
                </Text>

                <Decorations>
                  {horse.decorations.map((decoration, key) => (
                    <Decoration
                      key={key}
                      src={this.getDecoration(decoration)}
                    />
                  ))}
                </Decorations>
              </Box>
            ))}
          </Column>

          {/******** #3********/}
          <Column col3>
            <ParentBox border={'#B4B4B4'}>
              {pedigree.line2a.map((horse, key) => (
                <div key={key}>
                  <Box gender={horse.gender} style={{ marginRight: -1 }}>
                    <Text>
                      <Name mb={0}>
                        <a href={horse.href}>{horse.name}</a>
                      </Name>
                      <Id>
                        <a href={horse.href}>{horse.ueln}</a>
                      </Id>
                    </Text>

                    <Decorations>
                      {horse.decorations.map((decoration, key) => (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                        />
                      ))}
                    </Decorations>
                  </Box>
                  {key === 0 && <Spacer1 />}
                </div>
              ))}
            </ParentBox>

            <ParentBox border={'#B4B4B4'}>
              {pedigree.line2b.map((horse, key) => (
                <div key={key}>
                  <Box gender={horse.gender} style={{ marginRight: -1 }}>
                    <Text>
                      <Name mb={0}>
                        <a href={horse.href}>{horse.name}</a>
                      </Name>
                      <Id>
                        <a href={horse.href}>{horse.ueln}</a>
                      </Id>
                    </Text>

                    <Decorations>
                      {horse.decorations.map((decoration, key) => (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                        />
                      ))}
                    </Decorations>
                  </Box>
                  {key === 0 && <Spacer1 />}
                </div>
              ))}
            </ParentBox>
          </Column>

          {/******** #4 ********/}
          <Column col4>
            <ParentBox>
              {pedigree.line3a.map((horse, key) => (
                <div key={key}>
                  <Box gender={horse.gender} style={{ marginLeft: 0 }}>
                    <Text>
                      <Name mb={0}>
                        <a href={horse.href}>{horse.name}</a>
                      </Name>
                      <Id>
                        <a href={horse.href}>{horse.ueln}</a>
                      </Id>
                    </Text>

                    <Decorations>
                      {horse.decorations.map((decoration, key) => (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                        />
                      ))}
                    </Decorations>
                  </Box>
                  {key === 0 && <Spacer2 />}
                </div>
              ))}
            </ParentBox>

            <ParentBox>
              {pedigree.line3b.map((horse, key) => (
                <div key={key}>
                  <Box gender={horse.gender} style={{ marginLeft: 0 }}>
                    <Text>
                      <Name mb={0}>
                        <a href={horse.href}>{horse.name}</a>
                      </Name>
                      <Id>
                        <a href={horse.href}>{horse.ueln}</a>
                      </Id>
                    </Text>

                    <Decorations>
                      {horse.decorations.map((decoration, key) => (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                        />
                      ))}
                    </Decorations>
                  </Box>
                  {key === 0 && <Spacer2 />}
                </div>
              ))}
            </ParentBox>

            <ParentBox>
              {pedigree.line3c.map((horse, key) => (
                <div key={key}>
                  <Box gender={horse.gender} style={{ marginLeft: 0 }}>
                    <Text>
                      <Name mb={0}>
                        <a href={horse.href}>{horse.name}</a>
                      </Name>
                      <Id>
                        <a href={horse.href}>{horse.ueln}</a>
                      </Id>
                    </Text>

                    <Decorations>
                      {horse.decorations.map((decoration, key) => (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                        />
                      ))}
                    </Decorations>
                  </Box>
                  {key === 0 && <Spacer2 />}
                </div>
              ))}
            </ParentBox>

            <ParentBox>
              {pedigree.line3d.map((horse, key) => (
                <div key={key}>
                  <Box gender={horse.gender} style={{ marginLeft: 0 }}>
                    <Text>
                      <Name mb={0}>
                        <a href={horse.href}>{horse.name}</a>
                      </Name>
                      <Id>
                        <a href={horse.href}>{horse.ueln}</a>
                      </Id>
                    </Text>

                    <Decorations>
                      {horse.decorations.map((decoration, key) => (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                        />
                      ))}
                    </Decorations>
                  </Box>
                  {key === 0 && <Spacer2 />}
                </div>
              ))}
            </ParentBox>
          </Column>
        </PedigreeRoot>
      </PedigreeScroller>
    );
  }
}

export default Pedigree;
