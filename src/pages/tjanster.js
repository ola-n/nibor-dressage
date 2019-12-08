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
import { Button } from '@components/Button';

const HeroContent = styled.div({});

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

class ServicesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.SERVICES) {
      setActivePage(routes.SERVICES);
    }
  }

  render() {
    const { heroImageDesktop, heroImageMobile } = this.props.data;

    return (
      <Layout page={routes.SERVICES}>
        <SEO title="Tjänster" />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <HeroContent>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Tjänster
            </Header>
            <Lead color={colors.primary_blue} mb={spacing.m}>
              Vi erbjuder många typer av ställtjänster. Vi erbjuder många typer
              av ställtjänster.Vi erbjuder många typer av ställtjänster.Vi
              erbjuder många typer av ställtjänster.
            </Lead>

            <Button to={routes.CONTACT} mb={spacing.t}>
              Kontakta oss för tidsbokning
            </Button>
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
)(ServicesPage);

export const query = graphql`
  query ServicesPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-tjanster.png" }
    ) {
      ...fragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-tjanster.jpg" }
    ) {
      ...fragmentMobile
    }
  }
`;
