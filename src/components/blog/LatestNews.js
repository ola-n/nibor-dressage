// @flow
import React from 'react';
import styled from '@emotion/styled';

import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer, Grid } from '@components/Grid';
import NewsCard from '@components/blog/NewsCard';

const Root = styled(Banner)({
  color: colors.primary_blue,
});

type Props = {
  latestNews: Array<Object>,
};

export const LatestNews = ({ latestNews }: Props) => {
  return (
    <Root color={colors.secondary_white} py={spacing.l}>
      <MainContainer>
        <Grid numberColumns={2}>
          {!!latestNews &&
            latestNews.map((article, key) => {
              const {
                date,
                title,
                image,
                slug,
                categoryLabel,
                categorySlug,
              } = article.node.frontmatter;
              console.log(
                'article.node.frontmatter ',
                article.node.frontmatter
              );
              return (
                <NewsCard
                  key={key}
                  title={title}
                  image={image}
                  slug={slug}
                  date={date}
                  category={categoryLabel}
                  categorySlug={categorySlug}
                ></NewsCard>
              );
            })}
        </Grid>
      </MainContainer>
    </Root>
  );
};

export default LatestNews;
