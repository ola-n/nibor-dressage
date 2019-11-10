// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../../routes';

import logo from '@images/logo/nibor-footer.svg';
import { MainContainer } from '@components/Grid/grid';
import { Display4, Body2, Body3 } from '@components/Typography';

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

const NavigationRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: 16,

  [breakpoints.tablet]: {
    marginBottom: 0,
  },
});

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
    fontSize: 12,

    '&:hover': {
      color: colors.primary_yellow,
    },

    [breakpoints.desktopSmall]: {
      fontSize: 14,
    },
  },
  space
);

const TextLink = styled.a(
  {
    color: colors.primary_blue,
    textDecoration: 'none',
    marginRight: 16,

    '&:hover': {
      color: colors.primary_yellow,
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
              <Body2 color={colors.tertiary_blue} style={{ marginBottom: 2 }}>
                <TextLink href="mailto:mika@nibor.se">mika@nibor.se</TextLink>
              </Body2>
              <Body2 color={colors.tertiary_blue} style={{ marginBottom: 2 }}>
                <TextLink href="tel:+46707178917">0707 - 17 89 17</TextLink>
              </Body2>
            </Column>
            <Column>
              <Display4 color={colors.primary_blue} mb={'2px'}>
                Adress
              </Display4>
              <Body2 color={colors.tertiary_blue} style={{ marginBottom: 2 }}>
                Nibor Dressage PRE
              </Body2>
              <Body2 color={colors.tertiary_blue} style={{ marginBottom: 2 }}>
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
          <NavigationRow>
            <FooterLink to={routes.HORSES}>Hästarna</FooterLink>
            <FooterLink to={routes.NEWS}>Nyheter</FooterLink>
            <FooterLink to={routes.FACILITY}>Anläggningen</FooterLink>
            <FooterLink to={routes.TEAM}>Teamet</FooterLink>
            <FooterLink to={routes.SERVICES}>Tjänster</FooterLink>
            <FooterLink to={routes.CONTACT}>Kontakt</FooterLink>
            <FooterLink to={routes.COOKIES}>Cookies</FooterLink>
          </NavigationRow>
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
