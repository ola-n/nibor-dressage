// import React from 'react';
// @flow
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '@spec/colors/';
//import chevron from '@docly/web-ui/images/icons/chevron.svg';

export const listLink = css({
  display: 'block',
  padding: '0.8rem 0.5rem',
  transition: 'color 200ms',
});

export const List = styled('ul')({
  listStyle: 'none',
  margin: '1rem -0.5rem',
  padding: 0,

  li: {
    borderTop: `1px solid ${colors.secondary_grey_200}`,
  },

  a: listLink,
});

export const ListItem = styled('li')(({ arrow }) =>
  arrow
    ? {
        a: {
          paddingLeft: '1.5rem',
          //backgroundImage: `url(${chevron})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0.5rem 1.2rem',
        },
        'a:hover': {
          backgroundPosition: '0.6rem 1.2rem',
        },
      }
    : { '&:hover': { backgroundColor: colors.secondary_grey_100 } }
);

export const DateField = styled('span')({
  float: 'right',
  fontWeight: 500,
  color: '#999',
  paddingLeft: '0.5rem',
  fontVariantNumeric: 'tabular-nums',
});

export default List;
