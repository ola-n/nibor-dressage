import { css } from '@emotion/core';

export const articleMaxWidth = 780;

export const maxContentWidth = css({
  maxWidth: articleMaxWidth,
});

// Used on blocks with a lot of text to make them more readable
export const articleWidthCenter = css({
  maxWidth: articleMaxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const centered = css({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const zIndexDefinition = {
  navbar: 1,
  popup: 2,
  aboveAll: 3,
};
