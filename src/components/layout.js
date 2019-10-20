// @flow
import * as React from 'react';
import styled from '@emotion/styled';
// import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css';

type Props = {
  children: ?React.Node,
};
const Root = styled.div({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

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
    <Root>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default Layout;
