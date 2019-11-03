// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import {
  breakpoints,
  navbarSpec,
  zIndexDefinition,
  animationTimings,
} from '@spec/ui-spec';
import { colors, niborHorizontalGradient } from '@spec/colors/';
import routes from '../../routes';

import { Banner, MainContainer } from '@components/Grid/grid';
import { NavbarLink } from '@components/Typography';
import Burger from './Burger';
import Navmenu from './NavMenu';
import logo from '@images/logo/nibor.svg';

export const NavbarPlaceholder = styled.div({
  width: '100%',
  position: 'relative',
  height: navbarSpec.heightSmall,

  [breakpoints.desktopSmall]: {
    height: navbarSpec.heightLarge,
  },
});

export const FixedNavbar = styled(Banner)({
  background: niborHorizontalGradient,
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: zIndexDefinition.navbar,
  color: colors.primary_white,
  overflow: 'visible',
});

const NavbarContent = styled(MainContainer)({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: navbarSpec.heightSmall,

  [breakpoints.desktopSmall]: {
    height: navbarSpec.heightLarge,
  },
});

const NavLinks = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
  width: '100%',
});

const Logo = styled('img')({
  margin: 0,
});

const ContentCover = styled.div({
  width: '100%',
  height: '100vh',
  backgroundColor: colors.primary_black,
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0.6,
  transition: `opacity ${animationTimings.navMenuAnimationTime}ms linear`,
});

const LinkContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const LinkLine = styled.div({
  width: '100%',
  height: 1,
  paddingLeft: 42,
  marginTop: 7,

  '& div': {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary_yellow,
  },
});

type Props = {
  navMenuOpen: boolean,
  setOpen: Function,
  currentPage: string,
};

class Navbar extends React.Component<Props> {
  render() {
    const { navMenuOpen, setOpen, currentPage } = this.props;

    return (
      <NavbarPlaceholder>
        <FixedNavbar className={navMenuOpen ? 'pad-for-removed-scrollbar' : ''}>
          <NavbarContent>
            <Link to={routes.HOME}>
              <Logo src={logo} />
            </Link>

            <LinkContainer>
              <NavLinks>
                <NavbarLink
                  to={routes.HORSES}
                  selected={currentPage === routes.HORSES}
                >
                  HÄSTARNA
                </NavbarLink>
                <NavbarLink
                  to={routes.NEWS}
                  selected={currentPage === routes.NEWS}
                >
                  NYHETER
                </NavbarLink>
                <NavbarLink
                  to={routes.FACILITY}
                  selected={currentPage === routes.FACILITY}
                >
                  ANLÄGGNINGEN
                </NavbarLink>
                <NavbarLink
                  to={routes.TEAM}
                  selected={currentPage === routes.TEAM}
                >
                  TEAMET
                </NavbarLink>
                <NavbarLink
                  to={routes.SERVICES}
                  selected={currentPage === routes.SERVICES}
                >
                  TJÄNSTER
                </NavbarLink>
                <NavbarLink
                  to={routes.CONTACT}
                  selected={currentPage === routes.CONTACT}
                >
                  KONTAKT
                </NavbarLink>
                <Burger navMenuOpen={navMenuOpen} setOpen={setOpen} />
              </NavLinks>

              <LinkLine>
                <div />
              </LinkLine>
            </LinkContainer>
          </NavbarContent>

          <Navmenu navMenuOpen={navMenuOpen} setOpen={setOpen} />
          <ContentCover
            style={{
              opacity: navMenuOpen ? 0.6 : 0,
              cursor: navMenuOpen ? 'pointer' : 'auto',
              pointerEvents: navMenuOpen ? 'all' : 'none',
            }}
            onClick={() => setOpen()}
          />
        </FixedNavbar>
      </NavbarPlaceholder>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
