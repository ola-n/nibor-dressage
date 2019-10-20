// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import logo from '@images/logo/nibor-footer.svg';
import { MainContainer } from '@components/Grid/grid';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space
);
const LeftSideRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const Column = styled.div({ display: 'inline-block' }, space);

const Logo = styled('img')({
  margin: 0,
});

const FooterComponent = () => {
  return (
    <FooterRoot py={spacing.m}>
      <FooterContent>
        <Row pb={spacing.m}>
          <LeftSideRow>
            <Column pr={spacing.m}>
              <h4 style={{ margin: 0, marginBottom: 12 }}>Kontakta oss</h4>
              <p style={{ margin: 0, marginBottom: 2 }}>
                mika.nordstroem@gmail.com
              </p>
              <p style={{ margin: 0, marginBottom: 2 }}>0707 - 17 89 17</p>
            </Column>
            <Column>
              <h4 style={{ margin: 0, marginBottom: 12 }}>Adress</h4>
              <p style={{ margin: 0, marginBottom: 2 }}>Nibor Dressage PRE</p>
              <p style={{ margin: 0, marginBottom: 2 }}>Gränskullavägen 7</p>
              <p style={{ margin: 0, marginBottom: 2 }}>218 75 Tygelsjö</p>
            </Column>
          </LeftSideRow>
          <Column>
            <Logo src={logo} />
          </Column>
        </Row>

        <Row>
          <LeftSideRow>
            <Link to={'/hastarna/'} style={{ marginRight: 12 }}>
              Hästarna
            </Link>
            <Link to={'/nyheter/'} style={{ marginRight: 12 }}>
              Nyheter
            </Link>
            <Link to={'/anlaggningen/'} style={{ marginRight: 12 }}>
              Anläggningen
            </Link>
            <Link to={'/teamet/'} style={{ marginRight: 12 }}>
              Teamet
            </Link>
            <Link to={'/tjanster/'} style={{ marginRight: 12 }}>
              Tjänster
            </Link>
            <Link to={'/kontakt/'} style={{ marginRight: 12 }}>
              Kontakt
            </Link>
            <Link to={'/cookies/'} style={{ marginRight: 12 }}>
              Cookies
            </Link>
          </LeftSideRow>
          <Column>
            © {new Date().getFullYear()} Alla rättigheter förbehållna.
          </Column>
        </Row>
      </FooterContent>
    </FooterRoot>
  );
};

export default FooterComponent;
