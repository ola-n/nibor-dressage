// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { space } from 'styled-system';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { setActivePage } from '@state/navigation/actions';
import { niborHorizontalGradient, colors } from '@spec/colors/';
import { spacing, breakpoints } from '@spec/ui-spec';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import { HorsesSection } from '@components/sections/horses';
import { Display1, Intro } from '@components/Typography';

const HeroContent = styled.div({
  [breakpoints.desktopSmall]: {
    paddingBottom: 30,
  },
});

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)(
  {
    minWidth: 'auto',

    [breakpoints.desktopSmall]: {
      minWidth: 441,
    },
  },
  space
);

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class LandingPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.HOME) {
      setActivePage(routes.HOME);
    }
  }

  render() {
    const { heroImageDesktop, heroImageMobile } = this.props.data;

    return (
      <Layout page={routes.HOME}>
        <SEO title="Hem" />
        <HeroSection
          background={niborHorizontalGradient}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <HeroContent>
            <Header mb={spacing.m} color={colors.primary_yellow}>
              PRE med kvalitét
            </Header>
            <Lead>
              Nibor Dressage PRE drivs av Mika Nordström som satsar på att få
              fram konkurrenskraftiga PRE-hästar för dressyrsporten. Hästarna
              har bästa möjliga blodslinjer framtagna för såväl hållbarhet som
              gångarter och utstrålning.
            </Lead>
            <Lead mb={spacing.t}>
              Vår anläggning finns i Tygelsjö, utanför Malmö.
            </Lead>
          </HeroContent>
        </HeroSection>
        <HorsesSection />
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
)(LandingPage);

export const query = graphql`
  query LandingPageQuery {
    heroImageDesktop: file(relativePath: { eq: "hero-images/temp-hero.png" }) {
      ...fragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/decidido-low-res.jpg" }
    ) {
      ...fragmentMobile
    }
  }
`;
