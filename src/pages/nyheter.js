// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import { setActivePage } from '@state/navigation/actions';
import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid';
import { Display2, Subhead } from '@components/Typography';

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

const TestLink = styled(Link)({
  color: colors.primary_blue,
  textDecoration: 'none',

  '&:hover': {
    color: colors.primary_yellow,
  },
});

class NewsPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.NEWS) {
      setActivePage(routes.NEWS);
    }
  }

  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    console.log('data ', this.props.data.allMarkdownRemark);

    return (
      <Layout page={routes.NEWS}>
        <Banner>
          <MainContainer py={spacing.m}>
            <SEO title="Nyheter" />
            <Display2 color={colors.secondary_blue} mb={spacing.l}>
              Här kommer en nyhetssektion inom kort
            </Display2>
            {!!edges &&
              edges.map((edge, key) => {
                console.log('hallå ellor ', edge.node.frontmatter.path);
                return (
                  <Subhead key={key}>
                    <TestLink to={edge.node.frontmatter.path}>
                      {`${edge.node.frontmatter.title}`}
                    </TestLink>
                  </Subhead>
                );
              })}
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

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            slug
            title
          }
        }
      }
    }
  }
`;
