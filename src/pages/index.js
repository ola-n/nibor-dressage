import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

import { toggleDarkMode } from '@state/app/actions';
import { spacing } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import Image from '@components/image';
import { Banner, MainContainer } from '@components/Grid/grid';

const IndexPage = ({ isDarkMode, dispatch }) => {
  return (
    <Layout>
      <Banner>
        <MainContainer py={spacing.m}>
          <SEO title="Home" />
          <h1>Hej!</h1>
          <p>Här kommer mer info inom kort.</p>
          <button
            style={
              isDarkMode
                ? { background: 'black', color: 'white', marginBottom: 32 }
                : { marginBottom: 32 }
            }
            onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
          >
            Testing redux: Dark Mode {isDarkMode ? 'on' : 'off'}
          </button>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Sida 2</Link>
        </MainContainer>
      </Banner>
    </Layout>
  );
};

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
}))(IndexPage);
