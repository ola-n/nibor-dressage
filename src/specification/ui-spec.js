export const spacing = {
  xt: [8, null, null, 12],
  t: [12, null, null, 16],
  xs: [16, null, null, 24],
  s: [24, null, null, 32],
  m: [32, null, null, 40],
  l: [48, null, null, 64],
  xl: [64, null, null, 96],
  xxl: [64, null, null, 96, 128, 160],
  // Horizontal spacing used when resizing
  maxWidthDesktopLarge: 1440,
  sidePaddingPhoneSmall: 12,
  sidePaddingPhone: 16,
  sidePaddingPhoneLarge: 24,
  sidePaddingTablet: 32,
  sidePaddingDesktopSmall: 64,
  sidePaddingDesktopLarge: 64,
};

// Breakpoints
export const breakpointValues = {
  smallPhone: 320,
  regularPhone: 370,
  landscapePhone: 479,
  tablet: 767,
  desktopSmall: 991,
  desktopLarge: 1281,
  desktopHuge: 1700,
};
export const breakpoints = {
  smallPhone: `@media screen and (min-width: ${breakpointValues.smallPhone}px)`,
  regularPhone: `@media screen and (min-width: ${breakpointValues.regularPhone}px)`,
  landscapePhone: `@media screen and (min-width: ${breakpointValues.landscapePhone}px)`,
  tablet: `@media screen and (min-width: ${breakpointValues.tablet}px)`,
  desktopSmall: `@media screen and (min-width: ${breakpointValues.desktopSmall}px)`,
  desktopLarge: `@media screen and (min-width: ${breakpointValues.desktopLarge}px)`,
  desktopHuge: `@media screen and (min-width: ${breakpointValues.desktopHuge}px)`,
  onlySmallPhone: `@media screen and (max-width: ${breakpointValues.regularPhone}px)`,
  onlyPhone: `@media screen and (max-width: ${breakpointValues.tablet}px)`,
  onlyMobile: `@media screen and (max-width: ${breakpointValues.desktopSmall}px)`,
  onlyBelowMaxWidth: `@media screen and (max-width: ${spacing.maxWidthDesktopLarge}px)`,
};

export const navbarSpec = {
  heightSmall: 76,
  heightLarge: 90,
};

export const zIndexDefinition = {
  content: 1,
  navbar: 3,
  popup: 4,
  aboveAll: 50,
};

export const articleWidth = {
  maxWidth: 750,
};

export const articleWide = {
  maxWidth: 842,
};
