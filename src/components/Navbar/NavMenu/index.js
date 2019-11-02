// @flow
import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import routes from '../../../routes';
import { colors } from '@spec/colors/';
import { zIndexDefinition, animationTimings } from '@spec/ui-spec';

import { NavMenuLink } from '@components/Typography';
import Burger from '../Burger';

const StyledMenu = styled.nav(
  {
    transform: 'translateX(100%)',
    display: 'flex',
    flexDirection: 'column',
    background: colors.primary_white,
    height: '100vh',
    textAlign: 'left',
    padding: 32,
    boxShadow: '3px 0 7px 0 rgba(0, 0, 0, 0.2)',

    transition: `transform ${animationTimings.navMenuAnimationTime}ms ease-in-out, opacity ${animationTimings.navMenuAnimationTime}ms linear`,
    width: '100%',
    maxWidth: 480,
    zIndex: zIndexDefinition.aboveAll,
    position: 'fixed',
    top: 0,
    right: 0,
  },
  ({ open }) => {
    if (open) return { transform: 'translateX(0)', opacity: 1 };
  }
);

const BurgerWrap = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

const NavLinks = styled.nav({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 32,
  height: '100%',
  width: '100%',
});

type Props = {
  navMenuOpen: boolean,
  setOpen: Function,
  currentPage: string,
};

class NavMenu extends React.Component<Props> {
  render() {
    const { navMenuOpen, setOpen, currentPage } = this.props;

    return (
      <StyledMenu open={navMenuOpen}>
        <BurgerWrap>
          <Burger
            navMenuOpen={navMenuOpen}
            setOpen={setOpen}
            navMenuButton={true}
          />
        </BurgerWrap>
        <NavLinks>
          <NavMenuLink
            to={routes.HORSES}
            selected={currentPage === routes.HORSES}
            onClick={() => {
              setOpen();

              setTimeout(() => {
                navigate(routes.HORSES);
              }, animationTimings.navMenuAnimationTime);
            }}
          >
            HÄSTARNA
          </NavMenuLink>
          <NavMenuLink
            to={routes.NEWS}
            selected={currentPage === routes.NEWS}
            onClick={() => {
              setOpen();

              setTimeout(() => {
                navigate(routes.NEWS);
              }, animationTimings.navMenuAnimationTime);
            }}
          >
            NYHETER
          </NavMenuLink>
          <NavMenuLink
            to={routes.FACILITY}
            selected={currentPage === routes.FACILITY}
            onClick={() => {
              setOpen();

              setTimeout(() => {
                navigate(routes.FACILITY);
              }, animationTimings.navMenuAnimationTime);
            }}
          >
            ANLÄGGNINGEN
          </NavMenuLink>
          <NavMenuLink
            to={routes.TEAM}
            selected={currentPage === routes.TEAM}
            onClick={() => {
              setOpen();

              setTimeout(() => {
                navigate(routes.TEAM);
              }, animationTimings.navMenuAnimationTime);
            }}
          >
            TEAMET
          </NavMenuLink>
          <NavMenuLink
            to={routes.SERVICES}
            selected={currentPage === routes.SERVICES}
            onClick={() => {
              setOpen();

              setTimeout(() => {
                navigate(routes.SERVICES);
              }, animationTimings.navMenuAnimationTime);
            }}
          >
            TJÄNSTER
          </NavMenuLink>
          <NavMenuLink
            selected={currentPage === routes.CONTACT}
            onClick={() => {
              setOpen();

              setTimeout(() => {
                navigate(routes.CONTACT);
              }, animationTimings.navMenuAnimationTime);
            }}
          >
            KONTAKT
          </NavMenuLink>
        </NavLinks>
      </StyledMenu>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

export default connect(
  mapStateToProps,
  null
)(NavMenu);
