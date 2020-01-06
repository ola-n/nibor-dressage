// @flow
import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, spacing, navbarSpec } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../../routes';
import resultsObject from '../../horses/results';

import { Banner, MainContainer } from '@components/Grid';
import { Display2, Display4, Body3 } from '@components/Typography';
import { Button } from '../Button';

const Root = styled(Banner)({});

const ResultRoot = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const Container = styled('div')(
  ({ divider }) =>
    !divider && {
      minHeight: 32,
      paddingTop: 10,
      paddingBottom: 10,
    },
  ({ divider }) =>
    divider && {
      marginTop: 24,
      marginBottom: 8,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  ({ explanation }) =>
    explanation && {
      position: 'sticky',
      top: navbarSpec.heightSmall,
      maxHeight: 43,
      borderBottom: `1px solid ${colors.primary_blue}`,
      backgroundColor: colors.blue_bg,

      [breakpoints.onlySmallPhone]: {
        marginRight: `${-spacing.sidePaddingPhoneSmall}px !important`,
        marginLeft: `${-spacing.sidePaddingPhoneSmall}px !important`,
        paddingRight: spacing.sidePaddingPhoneSmall,
        paddingLeft: spacing.sidePaddingPhoneSmall,
      },
      [breakpoints.onlyPhone]: {
        marginRight: -spacing.sidePaddingPhone,
        marginLeft: -spacing.sidePaddingPhone,
        paddingRight: spacing.sidePaddingPhone,
        paddingLeft: spacing.sidePaddingPhone,
      },

      [breakpoints.desktopSmall]: {
        top: navbarSpec.heightLarge,
      },
    }
);

const ResultGrid = styled('div')({
  display: 'grid',
  gridColumnGap: 11,
  gridRowGap: 0,
  width: '100%',
  gridTemplateColumns: '55px 101px 1fr 25px',
  maxWidth: '100%',

  [breakpoints.regularPhone]: {
    gridTemplateColumns: '72px 138px 1fr 25px',
    gridColumnGap: 14,
  },

  [breakpoints.tablet]: {
    gridTemplateColumns: '103px 1fr 196px 55px',
    gridColumnGap: 64,
  },
});

const DividerGrid = styled('div')({
  display: 'grid',
  gridColumnGap: 11,
  marginBottom: 8,
  gridRowGap: 0,
  width: '100%',
  gridTemplateColumns: '140px 1fr',
});

const Divider = styled('div')(
  {
    height: 1,
    width: 64,
    backgroundColor: colors.primary_blue,
    marginRight: 8,
  },
  ({ right }) =>
    right && {
      marginRight: 0,
      marginLeft: 8,
    }
);

const Text = styled(Body3)({ display: 'inline', marginRight: 5 });

const MobileRowBreak = styled('p')({
  display: 'block',
  height: 0,
  margin: 0,

  [breakpoints.tablet]: {
    display: 'none',
  },
});

export const Results = () => {
  return (
    <Root
      color={colors.blue_bg}
      py={spacing.l}
      mb={spacing.s}
      id="tavlings-resultat"
    >
      <MainContainer>
        <Display2 color={colors.primary_blue}>Tävlingsresultat</Display2>

        {!!resultsObject &&
          resultsObject.map((result, key) => {
            // ****** Divider item ******
            if (result.type === 'divider') {
              return (
                <div key={key}>
                  <DividerGrid>
                    <Container key={key} divider>
                      <Divider />
                      <Display4 mb={0} color={colors.primary_blue}>
                        {result.label}
                      </Display4>
                      <Divider right />
                    </Container>
                    <div />
                  </DividerGrid>
                </div>
              );
            }

            // ****** Explanation ******
            if (result.type === 'explanation') {
              return (
                <Container key={key} explanation>
                  <ResultGrid>
                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        Datum
                      </Body3>
                    </Container>

                    <Container>
                      <Text bold color={colors.primary_blue}>
                        Tävling & häst
                      </Text>
                    </Container>

                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        Klass
                      </Body3>
                    </Container>

                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        Plats
                      </Body3>
                    </Container>
                  </ResultGrid>
                </Container>
              );
            }

            // ****** Resultitem and fallback ******
            if (result.type === 'result') {
              return (
                <ResultRoot key={key}>
                  <ResultGrid>
                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        {result.date}
                      </Body3>
                    </Container>

                    <Container>
                      <Text color={colors.primary_blue}>{result.comp}</Text>
                      <MobileRowBreak />
                      <Text bold color={colors.primary_blue}>
                        {result.horse}
                      </Text>
                      {!!result.special && (
                        <div>
                          <MobileRowBreak />
                          <Text color={colors.primary_blue}>
                            {result.special}
                          </Text>
                        </div>
                      )}
                    </Container>

                    <Container>
                      <Body3 color={colors.primary_blue}>
                        {result.difficulty}
                      </Body3>
                    </Container>

                    <Container>
                      <Body3 color={colors.primary_blue}>
                        {result.placement}
                      </Body3>
                    </Container>
                  </ResultGrid>
                </ResultRoot>
              );
            } else {
              return <Body3>Component not found</Body3>;
            }
          })}
      </MainContainer>
    </Root>
  );
};

const latestResultsObject = resultsObject.slice(0, 7);

export const LatestResults = () => {
  return (
    <Root color={colors.blue_bg} py={spacing.l} mb={spacing.s}>
      <MainContainer>
        <Display2 color={colors.primary_blue}>
          Senaste tävlingsresultat
        </Display2>

        {!!latestResultsObject &&
          latestResultsObject.map((result, key) => {
            // ****** Explanation ******
            if (result.type === 'explanation') {
              return (
                <Container key={key} explanation style={{ marginBottom: 8 }}>
                  <ResultGrid>
                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        Datum
                      </Body3>
                    </Container>

                    <Container>
                      <Text bold color={colors.primary_blue}>
                        Tävling & häst
                      </Text>
                    </Container>

                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        Klass
                      </Body3>
                    </Container>

                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        Plats
                      </Body3>
                    </Container>
                  </ResultGrid>
                </Container>
              );
            }

            // ****** Resultitem and fallback ******
            if (result.type === 'result') {
              return (
                <ResultRoot key={key}>
                  <ResultGrid>
                    <Container>
                      <Body3 bold color={colors.primary_blue}>
                        {result.date}
                      </Body3>
                    </Container>

                    <Container>
                      <Text color={colors.primary_blue}>{result.comp}</Text>
                      <MobileRowBreak />
                      <Text bold color={colors.primary_blue}>
                        {result.horse}
                      </Text>
                      {!!result.special && (
                        <div>
                          <MobileRowBreak />
                          <Text color={colors.primary_blue}>
                            {result.special}
                          </Text>
                        </div>
                      )}
                    </Container>

                    <Container>
                      <Body3 color={colors.primary_blue}>
                        {result.difficulty}
                      </Body3>
                    </Container>

                    <Container>
                      <Body3 color={colors.primary_blue}>
                        {result.placement}
                      </Body3>
                    </Container>
                  </ResultGrid>
                </ResultRoot>
              );
            } else {
              // console.log('no item, probably divider');
            }
          })}

        <Button mt={spacing.m} to={`${routes.HORSES}#tavlings-resultat`}>
          Se alla tävlingsresultat
        </Button>
      </MainContainer>
    </Root>
  );
};

export default Results;
