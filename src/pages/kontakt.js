// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { space } from 'styled-system';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { setActivePage } from '@state/navigation/actions';
import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import { Display1, Title1, Intro } from '@components/Typography';

const HeroContent = styled.div({});

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)(
  {
    minWidth: 'auto',
    marginBottom: 0,

    [breakpoints.desktopSmall]: {
      minWidth: 421,
    },

    '& a': {
      textDecoration: 'none',
      color: colors.primary_blue,

      '&:hover': {
        color: colors.primary_yellow,
      },
    },
  },
  space
);

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class ContactPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.CONTACT) {
      setActivePage(routes.CONTACT);
    }
  }

  render() {
    const { heroImageDesktop, heroImageMobile } = this.props.data;

    return (
      <Layout page={routes.CONTACT}>
        <SEO title="Kontakt" />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <HeroContent>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Kontakt
            </Header>
            <Title1 color={colors.primary_blue} medium>
              Nibor Dressage PRE
            </Title1>
            <Lead color={colors.primary_blue}>Gränskullavägen 7</Lead>
            <Lead color={colors.primary_blue}>218 75 Tygelsjö</Lead>
            <Lead color={colors.primary_blue} mb={spacing.t}>
              <a href="mailto:mika@nibor.se">mika@nibor.se</a>
            </Lead>
          </HeroContent>
        </HeroSection>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage);

export const query = graphql`
  query ContactPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-kontakt.png" }
    ) {
      ...fragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-kontakt.jpg" }
    ) {
      ...fragmentMobile
    }
  }
`;
