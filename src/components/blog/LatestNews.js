// @flow
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints, spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../../routes';

import { Banner, MainContainer } from '@components/Grid';
import { Display2, Subhead, Body1 } from '@components/Typography';
import ClippedImage from '@components/ClippedImage';

const Root = styled(Banner)({
  //backgroundColor: colors.primary_white,
  color: colors.primary_blue,
  position: 'relative',
});

type Props = {
  latestNews: Array<Object>,
};

export const LatestNews = ({ latestNews }: Props) => {
  //const { image, title, date } = latestEntry.frontmatter;

  console.log('props ', latestNews);
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
