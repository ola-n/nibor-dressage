// @flow
import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, spacing, articleWidth } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer } from '@components/Grid';
import { Display2, Body2 } from '@components/Typography';
import ClippedImage from '@components/ClippedImage';

const Root = styled(Banner)({
  color: colors.primary_blue,
  position: 'relative',

  '& #markdown > h2, h3': {
    marginBottom: 6,
    marginTop: 32
  },
});

const BlogContent = styled('div')({  
  [breakpoints.desktopSmall]: {
    maxWidth: 600,
  },
  '@media screen and (min-width: 1100px)': {
    maxWidth: 700,
  },
  [breakpoints.desktopLarge]: {
    ...articleWidth,
  },
});

const BlogImage = styled(ClippedImage)({
  [breakpoints.desktopSmall]: {
    marginTop: -278,
  },
});

const MarkDown = styled('div')({
  paddingTop: 18, 
  
  '& > h1:nth-child(1)': {
    marginTop: '0 !important',
  },
  '& > h2:nth-child(1)': {
    marginTop: '0 !important',
  },
  '& > h3:nth-child(1)': {
    marginTop: '0 !important',
  },
});

type Props = {
  latestEntry: {
    html: String,

    frontmatter: {
      image: Object,
      title: String,
      date: String,
    },
  },
};

export const BlogEntry = ({ latestEntry }: Props) => {
  const { image, title, date } = latestEntry.frontmatter;
  const { html } = latestEntry;

  return (
    <Root>
      <MainContainer pb={spacing.l}>
        <BlogContent>
          <BlogImage
            image={image}
            imgStyle={{ objectPosition: `80% center` }}
            paddingReset
            mb={spacing.m}
            clipperPos="tr"
          />
          <Display2 style={{marginBottom: 4}}>{title}</Display2>
          <Body2 bold>{date}</Body2>
          <MarkDown id="markdown" dangerouslySetInnerHTML={{ __html: html }}></MarkDown>
        </BlogContent>
      </MainContainer>
    </Root>
  );
};

export default BlogEntry;
