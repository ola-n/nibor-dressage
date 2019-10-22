// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { breakpoints, navbarSpec } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import logo from '@images/logo/nibor.svg';
import { Banner, MainContainer } from '@components/Grid/grid';

const Navbar = styled(MainContainer)({
  height: navbarSpec.heightSmall,
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  [breakpoints.desktopSmall]: {
    height: navbarSpec.heightLarge,
  },
});
const Logo = styled('img')({
  margin: 0,
});

const NavbarComponent = () => {
  return (
    <header>
      <Banner color={colors.primary_blue}>
        <Navbar>
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </Navbar>
      </Banner>
    </header>
  );
};

export default NavbarComponent;
