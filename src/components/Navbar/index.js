// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { breakpoints, navbarSpec, zIndexDefinition } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer } from '@components/Grid/grid';
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
const Logo = styled('img')({
  margin: 0,
});

const Navbar = () => {
  return (
    <NavbarPlaceholder>
      <FixedNavbar color={colors.primary_blue}>
        <NavbarContent>
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </NavbarContent>
      </FixedNavbar>
    </NavbarPlaceholder>
  );
};

export default Navbar;
