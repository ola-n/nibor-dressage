// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { setActivePage } from '@state/navigation/actions';
import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import { Display1, Intro } from '@components/Typography';

const ContentWrap = styled.div({ width: '100%' });

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)({
  minWidth: 'auto',
  marginBottom: 4,

  [breakpoints.desktopSmall]: {
    width: '100%',
    maxWidth: 421,
    marginBottom: 8,
  },
  [breakpoints.desktopLarge]: {
    width: '100%',
    maxWidth: 688,
  },
});

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class FacilitiesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.FACILITY) {
      setActivePage(routes.FACILITY);
    }
  }

  render() {
    const { heroImageDesktop, heroImageMobile } = this.props.data;

    return (
      <Layout>
        <SEO title="Anläggningen" />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <ContentWrap>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Anläggningen
            </Header>
            <Lead color={colors.primary_blue}>Gränskullavägen Tygelsjö</Lead>
            <Lead color={colors.primary_blue}>Grundad 2017</Lead>
            <Lead color={colors.primary_blue}>5ha hagar</Lead>
            <Lead color={colors.primary_blue}>Ridhus med 8 boxar</Lead>
            <Lead color={colors.primary_blue}>
              Ridbana med värmeslingor, fibersand & automatisk betvattning
            </Lead>
          </ContentWrap>
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
)(FacilitiesPage);

export const query = graphql`
  query FacilitiesPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-anlaggningen.png" }
    ) {
      ...heroFragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-anlaggningen.jpg" }
    ) {
      ...heroFragmentMobile
    }
  }
`;
