// @flow
import { getIn } from 'timm';

type State = Object;

export const getNavigationState = (state: State) =>
  getIn(state, ['navigation', 'state']);
