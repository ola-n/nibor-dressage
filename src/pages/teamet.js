// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActivePage } from '@state/navigation/actions';
import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid/grid';
import { Display2 } from '@components/Typography';

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
      <Layout page={routes.TEAM}>
        <Banner>
          <MainContainer py={spacing.m}>
            <SEO title="Teamet" />
            <Display2 color={colors.secondary_blue} style={{ maxWidth: 650 }}>
              Här kommer info om teamet bakom Nibor inom kort
            </Display2>
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
