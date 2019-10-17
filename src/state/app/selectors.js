// @flow
import { getIn } from 'timm';

type State = Object;

export const getAppState = (state: State) => getIn(state, ['app', 'state']);
