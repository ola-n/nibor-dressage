// @flow
import React from 'react';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import { spacing, breakpoints } from '@spec/ui-spec';
import routes from '../../routes';

import { CategoryButton } from '@components/Button';
import { Body3 } from '@components/Typography';

const Categories = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: -16,

    [breakpoints.tablet]: {
      marginLeft: 0,
    },

    [breakpoints.desktopSmall]: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    '& a': {
      paddingLeft: 16,

      [breakpoints.tablet]: {
        paddingLeft: 30,
      },
    },
  },
  space
);

const Category = styled('div')({
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
});

const Divider = styled(Body3)({
  margin: '4px 8px 0 8px',
  display: 'none',

  [breakpoints.desktopSmall]: {
    display: 'block',
  },
});

type Props = {
  categories: Array<Object>,
};

export const CategoryPicker = ({ categories }: Props) => {
  return (
    <Categories mb={spacing.s}>
      {!!categories &&
        categories.map((category, key) => {
          const { slug } = category;

          return (
            <Category key={key}>
              <CategoryButton to={`${routes.NEWS}${slug}`} type={'ghost'}>
                <span style={{ position: 'absolute' }}>
                  {category.edges[0].node.frontmatter.categoryLabel}
                </span>
                <span style={{ opacity: 0 }}>
                  {category.edges[0].node.frontmatter.categoryLabel}
                </span>
              </CategoryButton>
              {key + 1 < categories.length && <Divider>|</Divider>}
            </Category>
          );
        })}
    </Categories>
  );
};

export default CategoryPicker;
