// @flow
import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, spacing, articleWidth } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer } from '@components/Grid';
import { Display2, Subhead } from '@components/Typography';
import ClippedImage from '@components/ClippedImage';

const Root = styled(Banner)({
  color: colors.primary_blue,
  position: 'relative',
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
          <Display2 mb={spacing.t}>{title}</Display2>
          <Subhead>{date}</Subhead>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </BlogContent>
      </MainContainer>
    </Root>
  );
};

export default BlogEntry;
