// @flow
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import './layout.css';
import { Banner, MainContainer } from '@components/Grid/grid';

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
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <footer>
        <MainContainer>© {new Date().getFullYear()} Nibor AB</MainContainer>
      </footer>
    </>
  );
};

export default Layout;
