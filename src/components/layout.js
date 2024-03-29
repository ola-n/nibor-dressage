// @flow
import * as React from 'react';
import { useState } from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import { getScrollBarWidth } from '../utils/getScrollBarWidth';
import config from '../config/siteConfig';

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

const Root = styled('div')({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  position: 'relative',
});

type Props = {
  page?: string,
  children: ?React.Node,
};

const Layout = ({ page, children }: Props) => {
  const [navMenuOpen, setOpen] = useState(false);
  const mixpanel = useMixpanel();

  // Seems fubar and not really happy during SSR
  if (typeof window !== 'undefined' && window) {
    mixpanel.track('Page.Seen', { page: page });
  }

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
        <html lang={config.siteLang} />
      </Helmet>
      <Global styles={globalStyles} />
      <Navbar navMenuOpen={navMenuOpen} setOpen={toggleNavMenu} />
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <Footer />
    </Root>
  );
};

export default Layout;
