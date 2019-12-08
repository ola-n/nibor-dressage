// @flow
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { spacing } from '@spec/ui-spec';
import { colors } from '@spec/colors/';

import { Banner, MainContainer } from '@components/Grid';
import { Display3 } from '@components/Typography';
import { List, ListItem, DateField } from '@components/lists';

const Root = styled(Banner)({
  //backgroundColor: colors.primary_white,
  color: colors.primary_blue,
  position: 'relative',
});

const NewsLink = styled(Link)({
  color: colors.primary_blue,
  textDecoration: 'none',

  '&:hover': {
    color: colors.primary_yellow,
  },
});

type Props = {
  allNews: Array<Object>,
};

export const BlogEntry = ({ allNews }: Props) => {
  return (
    <Root py={spacing.m}>
      <MainContainer>
        <Display3>Alla nyheter</Display3>
        <List>
          {allNews.map(({ node: { frontmatter: { title, date, path } } }) => (
            <ListItem key={`${path}`}>
              <NewsLink to={path}>
                <DateField>{date}</DateField>
                {title}
              </NewsLink>
            </ListItem>
          ))}
        </List>
      </MainContainer>
    </Root>
  );
};

export default BlogEntry;
