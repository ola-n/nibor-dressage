// @flow
import * as React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
// import { useStaticQuery, graphql } from 'gatsby';

/* Components */
import Navbar from './Navbar';
import Footer from './Footer';

/* CSS */
import '../styling/normalize.css';
import '../styling/global.css';

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
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default Layout;
