// @flow
import * as actions from './actions';
import { type NavigationState, NAVIGATE } from './types';
import { type Action } from '../types';

const initialState: NavigationState = {
  currentPage: 'none',
};

export const navigationReducer = (
  state: NavigationState = initialState,
  action: Action
): NavigationState => {
  switch (action.type) {
    case NAVIGATE: {
      const { toPage } = action.payload || {};
      console.log('actions ', actions);

      console.log('toPage in reducer ', toPage);
      return {
        ...state,
        currentPage: toPage,
      };
    }

    default:
      return state;
  }
};

export default navigationReducer;

// { payload = {}, type }: Action
