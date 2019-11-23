// @flow
import styled from '@emotion/styled';
import { breakpoints, spacing } from '@spec/ui-spec';
import { css } from '@emotion/core';
import { space } from 'styled-system';

export const Banner = styled.div(
  {
    position: 'relative',
    width: '100%',
  },
  ({ color }) => ({
    backgroundColor: color,
  }),
  space
);

export const MainContainer = styled.div(
  {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: spacing.sidePaddingPhoneSmall,
    paddingLeft: spacing.sidePaddingPhoneSmall,
    minWidth: 0,

    [breakpoints.regularPhone]: {
      paddingRight: spacing.sidePaddingPhone,
      paddingLeft: spacing.sidePaddingPhone,
    },
    [breakpoints.landscapePhone]: {
      paddingRight: spacing.sidePaddingPhoneLarge,
      paddingLeft: spacing.sidePaddingPhoneLarge,
    },
    [breakpoints.tablet]: {
      paddingRight: spacing.sidePaddingTablet,
      paddingLeft: spacing.sidePaddingTablet,
    },
    [breakpoints.desktopSmall]: {
      paddingRight: spacing.sidePaddingDesktopSmall,
      paddingLeft: spacing.sidePaddingDesktopSmall,
    },
    [breakpoints.desktopLarge]: {
      paddingRight: spacing.sidePaddingDesktopLarge,
      paddingLeft: spacing.sidePaddingDesktopLarge,
      maxWidth: spacing.maxWidthDesktopLarge,
    },
  },
  space
);

export const resetStyle = css({
  [breakpoints.onlySmallPhone]: {
    marginRight: `${-spacing.sidePaddingPhoneSmall}px !important`,
    marginLeft: `${-spacing.sidePaddingPhoneSmall}px !important`,
  },
  [breakpoints.onlyPhone]: {
    marginRight: -spacing.sidePaddingPhone,
    marginLeft: -spacing.sidePaddingPhone,
  },
});

export const Grid = styled.div(
  {
    display: 'grid',
    gridColumnGap: '25px',
    gridRowGap: '15px',
    gridTemplateColumns: '1fr',

    [breakpoints.tablet]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))',
      gridColumnGap: '30px',
      gridRowGap: '20px',
    },
    [breakpoints.desktopSmall]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))',
      gridColumnGap: '50px',
      gridRowGap: '50px',
    },
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(325px, 1fr))',
    },
  },
  ({ numberColumns }) => ({
    gridTemplateColumns: '1fr',

    [breakpoints.tablet]: {
      gridTemplateColumns: `repeat(${numberColumns}, 1fr)`,
    },
  }),
  space
);
