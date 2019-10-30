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
          {/*<Display1 mb={spacing.t} color={colors.primary_yellow}>
            PRE med kvalitét
          </Display1>*/}
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
          <p style={{ marginBottom: 120 }}>Mycket info så att det scrollar</p>
        </MainContainer>
      </Banner>
    </Layout>
  );
};

export default LandingPage;
