// @flow
import React from 'react';
import styled from '@emotion/styled';

import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer, Grid } from '@components/Grid';
import NewsCard from '@components/blog/NewsCard';
import CategoryPicker from '@components/blog/CategoryPicker';

const Root = styled(Banner)({
  color: colors.primary_blue,
});

type Props = {
  latestNews: Array<Object>,
  categories: Array<Object>,
};

export const LatestNews = ({ latestNews, categories }: Props) => {
  return (
    <Root color={colors.secondary_white} pt={spacing.s} pb={spacing.l}>
      <MainContainer>
        <CategoryPicker categories={categories} />
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
