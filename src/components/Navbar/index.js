// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import {
  breakpoints,
  navbarSpec,
  zIndexDefinition,
  animationTimings,
} from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer } from '@components/Grid/grid';
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
  height: navbarSpec.heightSmall,

  [breakpoints.desktopSmall]: {
    height: navbarSpec.heightLarge,
  },
});

const NavLinks = styled.div({
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

type Props = {
  navMenuOpen: boolean,
  setOpen: Function,
};

const Navbar = ({ navMenuOpen, setOpen }: Props) => {
  return (
    <NavbarPlaceholder>
      <FixedNavbar
        color={colors.primary_blue}
        className={navMenuOpen ? 'pad-for-removed-scrollbar' : ''}
      >
        <NavbarContent>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <NavLinks>
            <Burger navMenuOpen={navMenuOpen} setOpen={setOpen} />
          </NavLinks>
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

export default Navbar;
