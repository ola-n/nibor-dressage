// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space } from 'styled-system';

import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import logo from '@images/logo/nibor-footer.svg';
import { MainContainer } from '@components/Grid/grid';
import { Display4, Body2, Body3 } from '@components/typography';

const FooterRoot = styled.footer(
  {
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: colors.secondary_grey_200,
  },
  space
);
const FooterContent = styled(MainContainer)({
  width: '100%',
});

const Row = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [breakpoints.tablet]: {
      flexDirection: 'row',
    },
  },
  space
);

const Row2 = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [breakpoints.desktopSmall]: {
      flexDirection: 'row',
    },
  },
  space
);

const LeftSideRow = styled.div(
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  space
);

const ContactCol = styled.div({
  display: 'flex',
  flexDirection: 'column',
  order: 1,
  marginBottom: 12,

  [breakpoints.tablet]: { order: 0, flexDirection: 'row', marginBottom: 0 },
});
const ColumnLogo = styled.div(
  {
    display: 'inline-block',
    order: 0,
    marginBottom: 32,

    [breakpoints.tablet]: { order: 1, marginBottom: 0 },
  },
  space
);
const Column = styled.div({ display: 'inline-block' }, space);

const Logo = styled('img')({
  margin: 0,
});

const FooterLink = styled(Link)(
  {
    color: colors.secondary_grey_800,
    textDecoration: 'none',
    marginRight: 16,
    lineHeight: '24px',

    '&:hover': {
      color: colors.primary_blue,
    },
  },
  space
);

const FooterComponent = () => {
  return (
    <FooterRoot py={spacing.m}>
      <FooterContent>
        <Row pb={spacing.m}>
          <ContactCol>
            <Column pr={spacing.m} mb={spacing.s}>
              <Display4 mb={'2px'} color={colors.primary_blue}>
                Kontakta oss
              </Display4>
              <Body2
                color={colors.tertiary_blue}
                style={{ margin: 0, marginBottom: 2 }}
              >
                mika.nordstroem@gmail.com
              </Body2>
              <Body2
                color={colors.tertiary_blue}
                style={{ margin: 0, marginBottom: 2 }}
              >
                0707 - 17 89 17
              </Body2>
            </Column>
            <Column>
              <Display4 color={colors.primary_blue} mb={'2px'}>
                Adress
              </Display4>
              <Body2
                color={colors.tertiary_blue}
                style={{ margin: 0, marginBottom: 2 }}
              >
                Nibor Dressage PRE
              </Body2>
              <Body2
                color={colors.tertiary_blue}
                style={{ margin: 0, marginBottom: 2 }}
              >
                Gränskullavägen 7
              </Body2>
              <Body2
                color={colors.tertiary_blue}
                style={{ margin: 0, marginBottom: 2 }}
              >
                218 75 Tygelsjö
              </Body2>
            </Column>
          </ContactCol>
          <ColumnLogo logoCol>
            <Logo src={logo} />
          </ColumnLogo>
        </Row>

        <Row2>
          <LeftSideRow mb={spacing.s}>
            <FooterLink to={'/hastarna/'}>Hästarna</FooterLink>
            <FooterLink to={'/nyheter/'}>Nyheter</FooterLink>
            <FooterLink to={'/anlaggningen/'}>Anläggningen</FooterLink>
            <FooterLink to={'/teamet/'}>Teamet</FooterLink>
            <FooterLink to={'/tjanster/'}>Tjänster</FooterLink>
            <FooterLink to={'/kontakt/'}>Kontakt</FooterLink>
            <FooterLink to={'/cookies/'}>Cookies</FooterLink>
          </LeftSideRow>
          <Column>
            <Body3 color={colors.secondary_grey_800}>
              © {new Date().getFullYear()} Alla rättigheter förbehållna.
            </Body3>
          </Column>
        </Row2>
      </FooterContent>
    </FooterRoot>
  );
};

export default FooterComponent;
