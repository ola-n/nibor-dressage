import React from 'react';

import { colors } from '@spec/colors';
import { spacing } from '@spec/ui-spec';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer } from '@components/Grid/grid';
import { Display1 } from '@components/Typography';

const LandingPage = () => {
  return (
    <Layout>
      <Banner>
        <MainContainer py={spacing.m}>
          <SEO title="Hem" />
          {/*<Display1 mb={spacing.t} color={colors.primary_yellow}>
            PRE med kvalitét
          </Display1>*/}
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
          <p style={{ marginBottom: 80 }}>Här kommer mer info inom kort.</p>
        </MainContainer>
      </Banner>
    </Layout>
  );
};

export default LandingPage;
