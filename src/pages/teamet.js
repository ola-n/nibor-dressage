// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

import { setActivePage } from '@state/navigation/actions';
import { spacing } from '@spec/ui-spec';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid/grid';

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
};

class TeamPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.TEAM) {
      setActivePage(routes.TEAM);
    }
  }

  render() {
    return (
      <Layout>
        <Banner>
          <MainContainer py={spacing.m}>
            <SEO title="Teamet" />
            <h1>Hej från teamet</h1>
            <p>paragraf</p>
            <Link to="/">Till landningssida</Link>
          </MainContainer>
        </Banner>
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
)(TeamPage);
