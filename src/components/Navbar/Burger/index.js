// @flow
import React from 'react';
import styled from '@emotion/styled';

import { zIndexDefinition } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

const StyledBurger = styled.button({
  position: 'absolute',
  top: 28,
  right: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '2rem',
  height: '2rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: zIndexDefinition.aboveAll,
  transform: 'rotate(180deg)',

  '&:focus': {
    outline: 'none',
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
    };
  }
});
const Line2 = styled.div(lineProps, ({ open }) => {
  if (open) {
    return {
      opacity: 0,
      transform: 'translateX(20px)',
    };
  }
});
const Line3 = styled.div(lineProps, ({ open }) => {
  if (open) {
    return {
      transform: 'rotate(-45deg)',
    };
  }
});

/*
':first-of-type': {
          transform: 'rotate(45deg)',
        },
        ':nth-of-type(1)': {
          opacity: 0,
          transform: 'translateX(20px)',
        },
        ':nth-of-type(2)': {
          transform: 'rotate(-45deg)',
        },
*/

type Props = {
  navMenuOpen: boolean,
  setOpen: Function,
};

const Burger = ({ navMenuOpen, setOpen }: Props) => {
  console.log('navMenuOpen ', navMenuOpen);
  return (
    <StyledBurger open={navMenuOpen} onClick={() => setOpen(!navMenuOpen)}>
      <Line1 open={navMenuOpen} />
      <Line2 open={navMenuOpen} />
      <Line3 open={navMenuOpen} />
    </StyledBurger>
  );
};

export default Burger;
