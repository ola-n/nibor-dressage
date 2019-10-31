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
import { colors } from '@spec/colors/';
import routes from '../../routes';
import { navigate } from '@state/navigation/actions';

import { Banner, MainContainer } from '@components/Grid/grid';
import { NavbarLink } from '@components/Typography';
import Burger from './Burger';
import Navmenu from './NavMenu';
import logo from '@images/logo/nibor.svg';

export const NavbarPlaceholder = styled.div({
  width: '100%',
  position: 'relative',
  height: navbarSpec.heightSmall,

  [breakpoints.tablet]: {
    height: navbarSpec.heightLarge,
  },
});

export const FixedNavbar = styled(Banner)({
  background: 'linear-gradient(0.25turn, #01155d, #000924)',
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: zIndexDefinition.navbar,
  color: colors.primary_white,
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
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
  transition: `opacity ${animationTimings.navMenuAnimationTime} linear`,
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
  navigate: typeof navigate,
};

const Navbar = ({ navMenuOpen, setOpen, currentPage, navigate }: Props) => {
  console.log('currentPage ', currentPage);
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
                onClick={() => navigate(routes.HORSES)}
              >
                HÄSTARNA
              </NavbarLink>
              <NavbarLink to={routes.NEWS}>NYHETER</NavbarLink>
              <NavbarLink to={routes.FACILITY}>ANLÄGGNINGEN</NavbarLink>
              <NavbarLink to={routes.TEAM}>TEAMET</NavbarLink>
              <NavbarLink to={routes.SERVICES}>TJÄNSTER</NavbarLink>
              <NavbarLink to={routes.CONTACT}>KONTAKT</NavbarLink>
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
};

const mapStateToProps = state => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

const mapDispatchToProps = () => ({
  navigate,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
