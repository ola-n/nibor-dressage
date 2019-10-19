import React from 'react';
import { Link } from 'gatsby';

import { spacing } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid/grid';

const SecondPage = () => (
  <Layout>
    <Banner>
      <MainContainer py={spacing.m}>
        <SEO title="Sida 2" />
        <h1>Hej från sida 2</h1>
        <p>paragraf</p>
        <Link to="/">Till landningssida</Link>
      </MainContainer>
    </Banner>
  </Layout>
);

export default SecondPage;
