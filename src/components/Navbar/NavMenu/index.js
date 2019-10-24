// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { zIndexDefinition } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

const StyledMenu = styled.nav(
  {
    transform: 'translateX(100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: colors.primary_blue,
    height: '100vh',
    textAlign: 'left',
    padding: '2rem',

    transition: 'transform 0.3s ease-in-out',
    width: '100%',
    maxWidth: 480,
    zIndex: zIndexDefinition.aboveAll,
  },
  ({ open }) => {
    if (open) return { transform: 'translateX(0)' };
  }
);

const StyledLink = styled(Link)({
  fontSize: '2rem',
  textTransform: 'uppercase',
  padding: '2rem 0',
  fontWeight: 'bold',
  letterSpacing: '0.5rem',
  color: colors.primary_white,
  textDecoration: 'none',
  transition: 'color 0.3s linear',

  '&:hover': {
    color: colors.primary_yellow,
  },
});

type Props = {
  navMenuOpen: boolean,
};

const NavMenu = ({ navMenuOpen }: Props) => {
  return (
    <StyledMenu open={navMenuOpen}>
      <StyledLink to={'/hastarna/'}>
        <span role="img" aria-label="horses">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Hästarna
      </StyledLink>
      <StyledLink to={'/nyheter/'}>
        <span role="img" aria-label="news">
          &#x1f4b8;
        </span>
        Nyheter
      </StyledLink>
      <StyledLink to={'/anlaggningen/'}>
        <span role="img" aria-label="facilities">
          &#x1f4e9;
        </span>
        Anläggningen
      </StyledLink>
    </StyledMenu>
  );
};
export default NavMenu;
