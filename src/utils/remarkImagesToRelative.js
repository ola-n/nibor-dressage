const path = require('path');
const deepMap = require('deep-map');

const ASSET_PATH = '/assets/images';
const STATIC_PATH = path.join(__dirname, '../../static/');

// Convert paths in frontmatter to relative
const makeRelative = function makeRelative(relPath, value) {
  let newValue = value;
  if (typeof value === 'string' && value.startsWith(ASSET_PATH)) {
    newValue = path.join(relPath, value);
    return newValue;
  }
  return value;
};

module.exports = function remarkImagesToRelative(node) {
  if (node.internal.type === 'MarkdownRemark') {
    const relPath = path.relative(
      path.join(node.fileAbsolutePath, '../'),
      STATIC_PATH
    );
    deepMap(
      node.frontmatter,
      function(value) {
        return makeRelative(relPath, value);
      },
      {
        inPlace: true,
      }
    );
  }
};
