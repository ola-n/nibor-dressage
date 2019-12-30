// @flow
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import routes from '../../routes';
import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import { easeOut500 } from '@spec/animations';

import { Display3, Body3 } from '@components/Typography';

const Root = styled('div')({
  backgroundColor: colors.primary_white,
  boxShadow: '3px 1px 7px 0 rgba(0, 0, 0, 0.1)',
  marginBottom: 24,

  [breakpoints.desktopSmall]: {
    marginBottom: 0,
  },
});

const ImageWrap = styled('div')({
  maxHeight: 354,
  overflow: 'hidden',
});

const Image = styled(Img)({
  transform: 'scale(1)',
  transition: `.3s ${easeOut500}`,

  '&:hover': {
    transform: 'scale(1.07)',
    cursor: 'pointer',
  },
});

const Text = styled('div')(space);

const CardFooter = styled('div')({
  display: 'flex',
  flexDirection: 'row',

  [breakpoints.desktopSmall]: {
    justifyContent: 'flex-end',
  },
});

const CategoryText = styled(Body3)({
  color: colors.primary_yellow,

  '&:hover': { color: colors.primary_blue },
});

type Props = {
  image: Object,
  slug: string,
  title: string,
  category: string,
  date: string,
  categorySlug: string,
};

export const NewsCard = ({
  title,
  image,
  slug,
  category,
  categorySlug,
  date,
}: Props) => {
  return (
    <Root>
      <Link to={`${routes.NEWS}${slug}`}>
        <ImageWrap>
          <Image fluid={image.childImageSharp.fluid} loading="eager"></Image>
        </ImageWrap>
      </Link>
      <Text pt={spacing.s} pb={spacing.t} px={spacing.s}>
        <Link to={`${routes.NEWS}${slug}`}>
          <Display3 style={{ display: 'inline-block' }} mb={spacing.t}>
            {title}
          </Display3>
        </Link>
        <CardFooter>
          <Link to={`${routes.NEWS}${categorySlug}`}>
            <CategoryText>{category}</CategoryText>
          </Link>
          <Body3 style={{ margin: '0 6px' }}>{'-'}</Body3>
          <Body3>{date}</Body3>
        </CardFooter>
      </Text>
    </Root>
  );
};

export default NewsCard;
