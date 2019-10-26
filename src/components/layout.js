// @flow
import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';

// import { useStaticQuery, graphql } from 'gatsby';

// Theme variables
import { spacing } from '@spec/ui-spec';

/* Components */
import Navbar from './Navbar';
import Footer from './Footer';

/* CSS */
import '../styling/normalize.css';
import '../styling/global.css';
import '../styling/animations.css';

type Props = {
  children: ?React.Node,
};
const Root = styled.div({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  position: 'relative',
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
  const [navMenuOpen, setOpen] = useState(false);

  return (
    <Root>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar navMenuOpen={navMenuOpen} setOpen={setOpen} />

      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default Layout;
