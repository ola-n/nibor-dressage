import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space, color } from 'styled-system';

import { colors } from '@spec/colors/';
import { breakpoints, spacing } from '@spec/ui-spec';
import { Body1, Body2, Body3, fontWeight } from '@components/Typography';

import { Grid } from '@components/Grid';

import colorBaya from '@images/pedigree/color_baya.svg';
import colorPerla from '@images/pedigree/color_perla.svg';
import colorTorda from '@images/pedigree/color_torda.svg';
import colorNegra from '@images/pedigree/color_negra.svg';
import colorOvera from '@images/pedigree/color_overa.svg';
import colorRuana from '@images/pedigree/color_ruana.svg';
import colorBlanca from '@images/pedigree/color_blanca.svg';
import colorAlbina from '@images/pedigree/color_albina.svg';
import colorPerlina from '@images/pedigree/color_perlina.svg';
import colorAlazana from '@images/pedigree/color_alazana.svg';
import colorCastana from '@images/pedigree/color_castana.svg';
import colorIsabela from '@images/pedigree/color_isabela.svg';
import colorPalomina from '@images/pedigree/color_palomina.svg';
import colorCremella from '@images/pedigree/color_cremella.svg';
import colorNegraCeniza from '@images/pedigree/color_negra_ceniza.svg';
import colorCremaCeniza from '@images/pedigree/color_crema_ceniza.svg';

import prizeRed from '@images/pedigree/prize_red.svg';
import prizeBlue from '@images/pedigree/prize_blue.svg';
import prizeGreen from '@images/pedigree/prize_green.svg';
import prizeOrange from '@images/pedigree/prize_orange.svg';
import prizeYellow from '@images/pedigree/prize_yellow.svg';

const leyendaCapas = [
  { src: colorAlazana, label: 'Alazana' },
  { src: colorAlbina, label: 'Albina' },
  { src: colorBaya, label: 'Baya' },
  { src: colorBlanca, label: 'Blanca' },
  { src: colorCastana, label: 'Castana' },
  { src: colorCremaCeniza, label: 'Crema ceniza' },
  { src: colorCremella, label: 'Cremella' },
  { src: colorIsabela, label: 'Isabela' },
  { src: colorNegraCeniza, label: 'Negra ceniza' },
  { src: colorNegra, label: 'Negra' },
  { src: colorOvera, label: 'Overa' },
  { src: colorPalomina, label: 'Palomina' },
  { src: colorPerla, label: 'Perla' },
  { src: colorPerlina, label: 'Perlina' },
  { src: colorRuana, label: 'Ruana' },
  { src: colorTorda, label: 'Torda' },
];

const leyendaEscarapelas = [
  { src: prizeRed, label: 'Reproductor basico' },
  { src: prizeBlue, label: 'Reproductor calificado' },
  { src: prizeGreen, label: 'Reproductor mejorante' },
  { src: prizeOrange, label: 'Joven Reproductor Recomendado' },
  { src: prizeYellow, label: 'Reproductor elite' },
];

const PedigreeScroller = styled('div')({
  display: 'flex',
  flexDirection: 'column',
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

const Explanation = styled(Grid)({
  backgroundColor: '#FCF0F4',
  border: '1px solid #D86289',
  padding: '32px 24px',

  [breakpoints.desktopSmall]: { padding: 24 },
});

const ExplanationCol = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Items = styled('div')({
  display: 'flex',
  flex: '1 1 25%',
  flexDirection: 'column',
  maxHeight: 280,
  flexFlow: 'column wrap',
  paddingTop: 12,

  [breakpoints.landscapePhone]: { maxHeight: 180 },
  [breakpoints.desktopSmall]: { maxHeight: 165 },
  [breakpoints.desktopLarge]: { maxHeight: 150 },
});

const Item = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '6px 0',
});

const ExplanationIcon = styled('img')({
  height: 20,
  width: 20,
  marginRight: 6,
});

const MobileSpacer = styled('div')({
  height: 12,

  [breakpoints.tablet]: { display: 'none' },
});

type Props = {
  pedigree: Object,
};

class Pedigree extends React.Component<Props> {
  getDecoration = decoration => {
    switch (decoration) {
      // Prizes/decorations
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

      // Colors
      case 'colorBaya':
        return colorBaya;
      case 'colorTorda':
        return colorTorda;
      case 'colorRuana':
        return colorRuana;
      case 'colorPerla':
        return colorPerla;
      case 'colorOvera':
        return colorOvera;
      case 'colorNegra':
        return colorNegra;
      case 'colorAlbina':
        return colorAlbina;
      case 'colorBlanca':
        return colorBlanca;
      case 'colorPerlina':
        return colorPerlina;
      case 'colorIsabela':
        return colorIsabela;
      case 'colorCastana':
        return colorCastana;
      case 'colorAlazana':
        return colorAlazana;
      case 'colorCremella':
        return colorCremella;
      case 'colorPalomina':
        return colorPalomina;
      case 'colorCremaCeniza':
        return colorCremaCeniza;
      case 'colorNegraCeniza':
        return colorNegraCeniza;

      default:
        return colorCastana;
    }
  };

  render() {
    const { pedigree } = this.props;

    return (
      <div>
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
                    <Decoration
                      key={key}
                      src={this.getDecoration(decoration)}
                      alt={decoration}
                    />
                  ))}
                </Decorations>
              </Box>
            </Column>

            {/******** #2 ********/}
            <Column col2 border={'#B4B4B4'}>
              {pedigree.line1.map((horse, key) => (
                <Box
                  key={key}
                  gender={horse.gender}
                  style={{ marginRight: -1 }}
                >
                  <Text>
                    <Name mb={0}>
                      <a href={horse.href}>{horse.name}</a>
                    </Name>
                    <Id>
                      <a href={horse.href}>{horse.ueln}</a>
                    </Id>
                  </Text>

                  <Decorations>
                    {horse.decorations.map((decoration, key) => {
                      return (
                        <Decoration
                          key={key}
                          src={this.getDecoration(decoration)}
                          alt={decoration}
                        />
                      );
                    })}
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
                            alt={decoration}
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
                            alt={decoration}
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
                            alt={decoration}
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
                            alt={decoration}
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
                            alt={decoration}
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
                            alt={decoration}
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
        <Explanation numberColumns={2} mt={spacing.m}>
          <ExplanationCol>
            <Body1 bold color={colors.primary_blue}>
              Leyenda Capas
            </Body1>
            <Items>
              {!!leyendaCapas &&
                leyendaCapas.map((color, key) => {
                  return (
                    <Item key={key}>
                      <ExplanationIcon src={color.src} alt={color.label} />
                      <Body3 color={colors.primary_blue}>{color.label}</Body3>
                    </Item>
                  );
                })}
            </Items>
          </ExplanationCol>

          <MobileSpacer></MobileSpacer>

          <ExplanationCol>
            <Body1 bold color={colors.primary_blue}>
              Leyenda Escarapelas
            </Body1>
            <Items>
              {!!leyendaEscarapelas &&
                leyendaEscarapelas.map((color, key) => {
                  return (
                    <Item key={key}>
                      <ExplanationIcon src={color.src} alt={color.label} />
                      <Body3 color={colors.primary_blue}>{color.label}</Body3>
                    </Item>
                  );
                })}
            </Items>
          </ExplanationCol>
        </Explanation>
        <Body3
          color={colors.primary_blue}
          style={{ maxWidth: 650, marginTop: 16 }}
        >
          Eftersom ANCCE inte har något öppet API där vi kan hämta data från,
          hoppas vi att vi fört över datan korrekt. Samtliga hästar är klickbara
          med länk till korresponderande sida hos ANCCE. Skulle där visa sig
          vara någon skillnad i träden så är det ANCCE som gäller.
        </Body3>
      </div>
    );
  }
}

export default Pedigree;
