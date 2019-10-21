import React from 'react';
import { spacing } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid/grid';

const LandingPage = () => {
  return (
    <Layout>
      <Banner>
        <MainContainer py={spacing.m}>
          <SEO title="Hem" />
          <h1>Hej!</h1>
          <p>Här kommer mer info inom kort.</p>
        </MainContainer>
      </Banner>
    </Layout>
  );
};

export default LandingPage;
