/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import reduxWrapper from './src/state/ReduxWrapper';
export const wrapRootElement = reduxWrapper;
