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
    paddingTop: 15,
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
        color: colors.primary_blue,
        backgroundColor: 'transparent',
        border: '1px solid #283D46',

        [':hover:not(:disabled)']: {
          color: colors.primary_yellow,
          backgroundColor: colors.primary_coolgrey,

          ' &::before': {
            transform: 'scaleX(1)',
          },
        },
        '& a': {
          // gatsby link
          color: colors.primary_blue,
        },

        '&::before': {
          display: 'block',
          position: 'absolute',
          content: `''`,
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          background: 'hsl(120, 100%, 41%)',
          transform: 'scaleX(0)',
          transition: '0.25s',
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

export const CategoryButton = styled(Link)({
  position: 'relative',
  paddingTop: 16,
  paddingRight: 22,
  paddingBottom: 12,
  paddingLeft: 30,
  fontSize: '14px',
  color: colors.primary_blue,
  letterSpacing: '6px',
  textTransform: 'uppercase',
  transition: 'all 600ms cubic-bezier(0.77, 0, 0.175, 1)',
  cursor: 'pointer',
  userSelect: 'none',

  '&:hover': {
    color: colors.primary_yellow,
    transitionDelay: '.6s',
  },

  '& > span': {
    zIndex: 1,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    transition: 'inherit',
    zIndex: 0,
    top: 0,
    width: 0,
    height: '100%',
    right: 0,
    border: `1px solid ${colors.primary_blue}`,
    borderLeft: 0,
    borderRight: 0,
    display: 'inline-block',
  },

  '&:hover::before': {
    transitionDelay: '0s',
    width: '100%',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    transition: 'inherit',
    zIndex: 0,
    top: 2,
    width: 0,
    height: 'calc(100% - 2px);',
    left: 0,
    display: 'inline-block',
  },
  '&:hover::after': {
    background: colors.primary_blue,
    transitionDelay: '.4s',
    width: '100%',
  },
});

export default Button;
