// @flow
//import * as actions from './actions';
import { type AppState, TOGGLE_DARKMODE } from './types';
import { type Action } from '../types';

const initialState: AppState = {
  ready: false,
  apiError: false,
  isDarkMode: false,
};

export const appReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  console.log('action app ', action);
  switch (action.type) {
    case TOGGLE_DARKMODE: {
      const { isDarkMode } = action.payload || {};

      return {
        ...state,
        isDarkMode: isDarkMode,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
