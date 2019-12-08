// @flow
import React from 'react';
import { Link } from 'gatsby';
import { space } from 'styled-system';
import styled from '@emotion/styled';

import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
// import routes from '../../routes';
import chevron from '@images/common/chevron.svg';

import { Subhead } from '@components/Typography';

const Nav = styled('nav')(space, {
  img: {
    paddingRight: 6,
    paddingLeft: 6,
    transform: 'translateY(1px)',
  },
});

const ArrowText = styled(Subhead)({
  fontSize: 16,
  lineHeight: 1.5,

  [breakpoints.desktopSmall]: { fontSize: 17 },
  [breakpoints.desktopLarge]: { fontSize: 20 },

  '& h3': {
    fontSize: 16,
    display: 'inline',
    //marginBottom: 0,

    [breakpoints.desktopSmall]: { fontSize: 17 },
    [breakpoints.desktopLarge]: { fontSize: 20 },
  },
});

type Props = {
  items: Array<Link>,
  children: Object,
};

class ArrowNav extends React.Component<Props> {
  render() {
    const { items, children } = this.props;

    return (
      <Nav>
        <Nav my={spacing.m}>
          <ArrowText color={colors.primary_blue} mb={0}>
            {items &&
              items.map((item, i) => {
                console.log('item ', item.props);
                return (
                  <span key={'link-' + i}>
                    <item.type {...item.props} />
                    {i < items.length - 1 && <img src={chevron} alt="" />}
                  </span>
                );
              })}
            {children}
          </ArrowText>
        </Nav>
      </Nav>
    );
  }
}

export default ArrowNav;
