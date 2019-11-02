// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
        <Banner>
          <MainContainer py={spacing.m}>
            <SEO title="Hem" />
            {/*<Display1 mb={spacing.t} color={colors.primary_yellow}>
            PRE med kvalitét
          </Display1>*/}
            <p style={{ marginBottom: 120 }}>Mer info kommer snart</p>
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
)(LandingPage);
