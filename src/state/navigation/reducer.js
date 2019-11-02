// @flow
import { type NavigationState, SET_ACTIVE_PAGE } from './types';
import { type Action } from '../types';

const initialState: NavigationState = {
  currentPage: 'none',
};

export const navigationReducer = (
  state: NavigationState = initialState,
  action: Action
): NavigationState => {
  switch (action.type) {
    case SET_ACTIVE_PAGE: {
      const { page } = action.payload || {};

      return {
        ...state,
        currentPage: page,
      };
    }

    default:
      return state;
  }
};

export default navigationReducer;
