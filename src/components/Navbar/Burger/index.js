// @flow
import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, zIndexDefinition } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

const BurgerRoot = styled.div(
  { position: 'relative', animationFillMode: 'forwards' },
  ({ open, navMenuButton }) => {
    if (open && !navMenuButton) {
      return {
        [breakpoints.desktopLarge]: {
          animation: 'fade-hide-element 0.1s',
          animationFillMode: 'forwards',
        },
      };
    }
  },
  ({ navMenuButton }) => {
    if (navMenuButton) {
      return {
        display: 'none',

        [breakpoints.desktopLarge]: {
          display: 'block',
        },
      };
    }
  }
);

const StyledBurger = styled.button({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '2rem',
  height: '2rem',
  background: 'transparent',
  transition: 'opacity 0.3s linear',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: zIndexDefinition.aboveAll,
  transform: 'rotate(180deg)',

  '&:focus': {
    outline: 'none',
  },

  ':hover div': {
    background: colors.primary_yellow,
  },
});

const lineProps = {
  width: '2rem',
  height: '0.25rem',
  background: colors.primary_white,
  borderRadius: 10,
  transition: 'all 0.3s linear',
  position: 'relative',
  transformOrigin: 1,
};

const Line1 = styled.div(lineProps, ({ open }) => {
  if (open) {
    return {
      transform: 'rotate(45deg)',
      background: colors.primary_blue,
    };
  }
});
const Line2 = styled.div(lineProps, ({ open }) => {
  if (open) {
    return {
      opacity: 0,
      transform: 'translateX(20px)',
      background: colors.primary_blue,
    };
  }
});
const Line3 = styled.div(lineProps, ({ open }) => {
  if (open) {
    return {
      transform: 'rotate(-45deg)',
      background: colors.primary_blue,
    };
  }
});

type Props = {
  navMenuOpen: boolean,
  setOpen: Function,
  navMenuButton?: boolean,
};

const Burger = ({ navMenuOpen, setOpen, navMenuButton }: Props) => {
  console.log('navMenuOpen ', navMenuOpen);
  return (
    <BurgerRoot open={navMenuOpen} navMenuButton={navMenuButton}>
      <StyledBurger open={navMenuOpen} onClick={() => setOpen(!navMenuOpen)}>
        <Line1 open={navMenuOpen} />
        <Line2 open={navMenuOpen} />
        <Line3 open={navMenuOpen} />
      </StyledBurger>
    </BurgerRoot>
  );
};

export default Burger;
