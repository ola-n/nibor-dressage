// @flow
import React from 'react';
import styled from '@emotion/styled';
import { space } from 'styled-system';
import { Link } from 'gatsby';

import { breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import chevron from '@images/common/chevron.svg';
import chevronInverted from '@images/common/chevron_yellow.svg';
import { Body2, Body3 } from '@components/Typography';

const Root = styled.div(
  {
    padding: '0 3px 0 0',
    display: 'flex',
    flexDirection: 'row',
  },
  space
);

const ArrowLink = styled(Link)(
  {
    paddingRight: 10,
    margin: 0,
    display: 'inline',
    transition: 'all 200ms',
    // this margin will go away on :hover
    // marginRight: '0.75rem',
    fontWeight: 500,

    '&:hover': {
      color: `${colors.primary_blue} !important`,
    },

    '& + img': {
      transition: 'all ease-in-out 200ms',
      transform: 'translateX(-4px)',
    },
    '&:hover+img': {
      transform: 'translateX(0)',
    },
  },
  ({ inverted }) => {
    if (inverted) {
      return {
        color: `${colors.primary_yellow} !important`,

        '&:hover': {
          color: `${colors.primary_yellow} !important`,
        },
      };
    }
  },
  space
);

const ArrowA = ArrowLink.withComponent('a');

const Chevron = styled('img')(
  {
    verticalAlign: 'middle',
    display: 'inline-block',
    pointerEvents: 'none',
    marginTop: 2,
    width: 8,
    height: 19,

    [breakpoints.desktopSmall]: {
      marginTop: 4,
    },
  },
  ({ smallText }) => {
    if (smallText) {
      return {
        width: 7,
        height: 17,
        marginTop: 1,

        [breakpoints.desktopSmall]: {
          marginTop: 3,
        },
      };
    }
  }
);

type Props = {
  trackingId?: string,
  to?: string,
  href?: string,
  children: any,
  mb?: any,
  className?: ?Object,
  rootClass?: any,
  target?: string,
  onClick?: Function,
  inverted: string,
  smallText: string,
  bold: string,
};

const Arrow = ({
  trackingId,
  to,
  children,
  href,
  mb,
  rootClass,
  className,
  target,
  onClick,
  inverted,
  smallText,
  bold,
}: Props) => {
  if (!href && !to) {
    return null;
  }

  return (
    <Root mb={mb} className={rootClass}>
      {!!href && (
        <ArrowA
          target={target}
          href={href}
          data-tracking-id={trackingId}
          className={className}
          onClick={onClick}
          inverted={inverted}
        >
          {!smallText && !bold && <Body2>{children}</Body2>}
          {!smallText && !!bold && <Body2 bold>{children}</Body2>}
          {!!smallText && !bold && <Body3>{children}</Body3>}
          {!!smallText && !!bold && <Body3 bold>{children}</Body3>}
        </ArrowA>
      )}
      {!!to && !href && (
        <ArrowLink
          onClick={onClick}
          to={to}
          data-tracking-id={trackingId}
          className={className}
          inverted={inverted}
        >
          {!smallText && !bold && <Body2>{children}</Body2>}
          {!smallText && !!bold && <Body2 bold>{children}</Body2>}
          {!!smallText && !bold && <Body3>{children}</Body3>}
          {!!smallText && !!bold && <Body3 bold>{children}</Body3>}
        </ArrowLink>
      )}
      <Chevron
        smallText={smallText}
        src={!inverted ? chevron : chevronInverted}
        alt=""
      />
    </Root>
  );
};

export default Arrow;
