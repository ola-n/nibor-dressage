// @flow
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors';
import { buttonTextCSS } from '../Typography';
import { space } from 'styled-system';

export const ButtonLink = styled.a(
  buttonTextCSS,
  {
    backgroundColor: colors.button_blue,
    paddingTop: 14,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'block',
    color: colors.primary_white,
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    transition: 'all linear 70ms',
    minWidth: 0,
    minHeight: 50,
    maxHeight: 50,
    textTransform: 'uppercase',

    [':hover:not(:disabled)']: {
      color: colors.primary_white,
      backgroundColor: colors.tertiary_blue,
      cursor: 'pointer',
    },
    '&.hero': {
      padding: '12px 42px 14px',
      fontSize: 20,
    },
    '&.petit': {
      fontSize: 13,
      padding: '8px 20px 10px',
      minHeight: 'auto',
      position: 'relative',
      // increase tappable area
      '&:after': {
        content: '""',
        position: 'absolute',
        top: -12,
        left: -12,
        right: -12,
        bottom: -12,
        background: 'transparent',
      },
    },

    '& a': {
      // gatsby link
      color: colors.primary_white,
    },

    '&:focus': {
      outline: 0,
    },

    [breakpoints.tablet]: {
      minWidth: 300,
      paddingLeft: 30,
      paddingRight: 30,
      display: 'inline-block',
    },
  },
  ({ type }) => {
    if (type === 'ghost') {
      return {
        color: colors.secondary_grey_700,
        backgroundColor: 'transparent',
        border: '1px solid #283D46',

        [':hover:not(:disabled)']: {
          color: colors.secondary_grey_700,
          backgroundColor: colors.primary_coolgrey,
        },
        '& a': {
          // gatsby link
          color: colors.secondary_grey_700,
        },
      };
    }

    if (type === 'flat') {
      return {
        color: colors.secondary_grey_700,
        backgroundColor: 'transparent',

        [':hover:not(:disabled)']: {
          color: colors.primary_black,
          backgroundColor: colors.primary_coolgrey,
        },
      };
    }
  },
  ({ light }) => {
    if (light) {
      return {
        color: colors.primary_black,
        backgroundColor: colors.primary_white,

        [':hover:not(:disabled)']: {
          color: colors.primary_black,
          backgroundColor: colors.primary_coolgrey,
        },
      };
    }
  },
  ({ width }) =>
    width && {
      maxWidth: width,
      [breakpoints.tablet]: {
        minWidth: 0,
      },
    },
  space
);

// Button to use in forms
const ButtonForForms = ButtonLink.withComponent('button');
export const FormButton = styled(ButtonForForms)({
  ['&:disabled']: {
    opacity: 0.15,
  },
});

// Link that looks like a button used for internal navigation
export const Button = ButtonLink.withComponent(Link);
