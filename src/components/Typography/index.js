import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { breakpoints } from '@spec/ui-spec';
import { space, color } from 'styled-system';
import { Link } from 'gatsby';

import { colors } from '@spec/colors';

// source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const display1 = css({
  lineHeight: 1.1,
  fontWeight: fontWeight.bold,
  fontSize: 32,
  marginTop: 0,

  // hyphens: 'auto',
  [breakpoints.tablet]: { fontSize: 42 },
  [breakpoints.desktopSmall]: { fontSize: 52 },
  [breakpoints.desktopLarge]: { fontSize: 62 },
});

const display2 = css({
  lineHeight: 1.1,
  fontWeight: fontWeight.bold,
  fontSize: 22,
  marginTop: 0,

  // hyphens: 'auto',
  [breakpoints.tablet]: { fontSize: 28 },
  [breakpoints.desktopSmall]: { fontSize: 32 },
  [breakpoints.desktopLarge]: { fontSize: 36 },
});

const display3 = css({
  lineHeight: 1.1,
  fontWeight: fontWeight.semiBold,
  fontSize: 18,
  marginTop: 0,

  // hyphens: 'auto',
  [breakpoints.tablet]: {
    fontWeight: fontWeight.bold,
    fontSize: 22,
  },
  [breakpoints.desktopSmall]: { fontSize: 22 },
  [breakpoints.desktopLarge]: { fontSize: 24 },
});

const display4 = css({
  lineHeight: 1.1,
  fontWeight: fontWeight.semiBold,
  fontSize: 16,
  marginTop: 0,
  // hyphens: 'auto',

  [breakpoints.tablet]: {
    fontWeight: fontWeight.bold,
    fontSize: 18,
  },
  [breakpoints.desktopSmall]: { fontSize: 19 },
  [breakpoints.desktopLarge]: { fontSize: 20 },
});

const title1 = css({
  lineHeight: 1.1,
  fontWeight: fontWeight.medium,
  marginTop: 0,
  marginBottom: 12,
  fontSize: 24,

  [breakpoints.tablet]: { fontSize: 28 },
  [breakpoints.desktopSmall]: { fontSize: 32 },
  [breakpoints.desktopLarge]: { fontSize: 36 },
});

const subhead = css({
  lineHeight: 1.1,
  fontWeight: fontWeight.medium,
  textTransform: 'none',
  fontSize: 16,
  marginTop: 0,

  [breakpoints.desktopSmall]: { fontSize: 22 },
  [breakpoints.desktopLarge]: { fontSize: 24 },
});

const intro = css({
  lineHeight: 1.5,
  fontWeight: fontWeight.regular,
  textTransform: 'none',
  fontSize: 16,
  marginTop: 0,

  [breakpoints.tablet]: { fontSize: 18 },
  [breakpoints.desktopSmall]: { fontSize: 20 },
});

const body1 = css({
  lineHeight: 1.5,
  fontWeight: fontWeight.regular,
  textTransform: 'none',
  fontSize: 16,

  [breakpoints.desktopSmall]: { fontSize: 18 },
});

const body2 = css({
  lineHeight: 1.5,
  fontWeight: fontWeight.regular,
  textTransform: 'none',
  fontSize: 14,

  [breakpoints.tablet]: { fontSize: 15 },
  [breakpoints.desktopSmall]: { fontSize: 16 },
});

const body3 = css({
  fontSize: 12,
  lineHeight: 1.5,
  fontWeight: fontWeight.regular,
  textTransform: 'none',

  [breakpoints.desktopSmall]: { fontSize: 14 },
});

const navBarText = css({
  fontSize: 13,
  marginLeft: 42,
  lineHeight: 1.5,
  display: 'none',
  fontWeight: fontWeight.regular,
  fontFamily: 'Poppins, sans-serif',
  textTransform: 'none',
  textDecoration: 'none',
  color: colors.primary_white,

  '&:hover': {
    color: colors.primary_yellow,
  },

  [breakpoints.desktopSmall]: {
    display: 'block',
  },
});

const navMenuText = css({
  fontSize: 26,
  cursor: 'pointer',
  marginBottom: 8,
  lineHeight: 1.5,
  display: 'block',
  fontWeight: fontWeight.regular,
  fontFamily: 'Poppins, sans-serif',
  textTransform: 'none',
  textDecoration: 'none',
  color: colors.primary_blue,

  '&:hover': {
    color: colors.primary_yellow,
  },

  [breakpoints.desktopSmall]: {
    display: 'none',
  },
});

// make the raw classNames available for extending elsewhere
// as an alternative to the `withComponent` syntax
export const cls = {
  display1,
  display2,
  display3,
  display4,
  title1,
  subhead,
  intro,
  body1,
  body2,
  body3,
  navBarText,
  navMenuText,
};

// exported Components:
export const Display1 = styled.h1(display1, space, color);
export const Display2 = styled.h1(display2, space, color);
export const Display3 = styled.h3(
  display3,
  color,
  space,
  ({ regular }) =>
    !!regular && { fontWeight: `${fontWeight.regular} !important` }
);
export const Display4 = styled.h4(
  display4,
  color,
  space,
  ({ light }) => !!light && { fontWeight: `${fontWeight.light} !important` }
);
export const Title1 = styled.h2(
  title1,
  color,
  space,
  ({ light }) => !!light && { fontWeight: `${fontWeight.light} !important` }
);
export const Subhead = styled.h3(
  subhead,
  color,
  space,
  ({ bold }) => !!bold && { fontWeight: `${fontWeight.semiBold} !important` }
);
export const Intro = styled.p(
  intro,
  color,
  space,
  ({ bold }) => !!bold && { fontWeight: `${fontWeight.semiBold} !important` }
);

export const Body1 = styled.div(
  body1,
  space,
  color,
  ({ bold }) => !!bold && { fontWeight: `${fontWeight.semiBold} !important` },
  ({ light }) => !!light && { fontWeight: `${fontWeight.light} !important` },
  ({ italic }) => !!italic && { fontStyle: `italic` }
);
export const Body2 = styled.div(
  body2,
  space,
  color,
  ({ light }) => !!light && { fontWeight: `${fontWeight.light} !important` },
  ({ bold }) => !!bold && { fontWeight: `${fontWeight.semiBold} !important` }
);
export const Body3 = styled.div(
  body3,
  color,
  space,
  ({ bold }) => !!bold && { fontWeight: `${fontWeight.semiBold} !important` }
);
export const NavbarLink = styled(Link)(
  navBarText,
  color,
  space,
  ({ selected }) =>
    !!selected && {
      fontWeight: `${fontWeight.bold} !important`,
      color: colors.primary_yellow,
    }
);
export const NavMenuLink = styled.div(
  navMenuText,
  color,
  space,
  ({ selected }) =>
    !!selected && {
      fontWeight: `${fontWeight.bold} !important`,
      color: colors.primary_yellow,
    }
);

export default {
  Display1,
  Display2,
  Display3,
  Title1,
  Subhead,
  Intro,
  Body1,
  Body2,
  Body3,
  NavbarLink,
  NavMenuLink,
};
