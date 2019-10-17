import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

import { toggleDarkMode } from '../state/app/actions';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ isDarkMode, dispatch }) => {
  console.log('isDarkMode ', isDarkMode);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Testing continuous deployment</p>
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
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
}))(IndexPage);
