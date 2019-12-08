// @flow
import React from 'react';
import styled from '@emotion/styled';

import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer } from '@components/Grid';
import { Display2, Subhead } from '@components/Typography';

const Root = styled(Banner)({
  color: colors.primary_blue,
  position: 'relative',
});

type Props = {
  latestNews: Array<Object>,
};

export const LatestNews = ({ latestNews }: Props) => {
  console.log('latestNews ', latestNews);
  return (
    <Root color={colors.secondary_white} py={spacing.l}>
      <MainContainer>
        <Display2>Work in progress </Display2>
        <Subhead>Sektion för de 10 senaste nyheterna</Subhead>
        Teaser Bild/titel/datum
      </MainContainer>
    </Root>
  );
};

export default LatestNews;
