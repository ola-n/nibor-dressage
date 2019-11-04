// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActivePage } from '@state/navigation/actions';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { HeroSection } from '@components/sections/hero';
import { HorsesSection } from '@components/sections/horses';

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
};

class LandingPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.HOME) {
      setActivePage(routes.HOME);
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Hem" />
        <HeroSection />
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
