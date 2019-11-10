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

class NewsPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.NEWS) {
      setActivePage(routes.NEWS);
    }
  }

  render() {
    return (
      <Layout page={routes.NEWS}>
        <Banner>
          <MainContainer py={spacing.m}>
            <SEO title="Nyheter" />
            <Display2 color={colors.secondary_blue}>
              Här kommer en nyhetssektion inom kort
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
)(NewsPage);
