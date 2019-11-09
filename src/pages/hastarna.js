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

const ContentWrap = styled.div({});

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)({
  minWidth: 'auto',

  [breakpoints.desktopSmall]: {
    minWidth: 421,
  },
});

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class HorsesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.HORSES) {
      setActivePage(routes.HORSES);
    }
  }

  render() {
    const { heroImageDesktop, heroImageMobile } = this.props.data;

    return (
      <Layout>
        <SEO title="Hästarna" />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <ContentWrap>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Hästarna
            </Header>
            <Lead color={colors.primary_blue} mb={0}>
              Vi har valt att satsa på PRE-hästar med extra hög kvalité både
              gällande hållbarhet och ridbarhet. Hästarna är väl uppföda på
              stora kuperade ytor, röntgade och gås regelbundet igenom av
              veterinär och equiterapeut. Alla rids på varierande underlag och
              är vana vid uteritt och olika miljöer.
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
)(HorsesPage);

export const query = graphql`
  query HorsesPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-hastarna.png" }
    ) {
      ...heroFragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-hastarna.jpg" }
    ) {
      ...heroFragmentMobile
    }
  }
`;
