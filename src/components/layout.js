// @flow
import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
// import { useStaticQuery, graphql } from 'gatsby';

import { getScrollBarWidth } from '../utils/getScrollBarWidth';

/* Components */
import Navbar from './Navbar';
import Footer from './Footer';

/* CSS */
import '../styling/normalize.css';
import '../styling/global.css';
import '../styling/animations.css';

const scrollbarWidth = getScrollBarWidth();

const globalStyles = css`
  .no-scroll {
    overflow: hidden !important;
    margin-right: ${scrollbarWidth}px;
  }
  .pad-for-removed-scrollbar {
    padding-right: ${scrollbarWidth}px;
  }
`;

const Root = styled.div({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  position: 'relative',
});

type Props = {
  children: ?React.Node,
};

const Layout = (props: Props) => {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  */

  const { children } = props;
  const [navMenuOpen, setOpen] = useState(false);

  function toggleNavMenu() {
    setOpen(!navMenuOpen);
  }

  return (
    <Root>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:500,600,700&display=swap"
          rel="stylesheet"
        />
        <body className={navMenuOpen ? 'no-scroll' : ''} />
      </Helmet>
      <Global styles={globalStyles} />
      <Navbar navMenuOpen={navMenuOpen} setOpen={toggleNavMenu} />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default Layout;
