/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

//export { default as wrapRootElement } from './src/state/ReduxWrapper';
import reduxWrapper from './src/state/ReduxWrapper';
export const wrapRootElement = reduxWrapper;
