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
  switch (action.type) {
    case TOGGLE_DARKMODE:
      console.log('TOGGLE_DARKMODE ', TOGGLE_DARKMODE);
      const { isDarkMode } = action.payload || {};
      return { ...state, isDarkMode: isDarkMode };

    default:
      return state;
  }
};

/*
const appReducer2 = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case actions.APP_READY: {
      return {
        ...state,
        ready: true,
      };
    }

    case EXPERIMENTS_REQUEST_SUCCESS: {
      return {
        ...state,
        apiError: false,
      };
    }
    case EXPERIMENTS_REQUEST_ERROR: {
      console.warn('state.app.apiError: true');
      return {
        ...state,
        apiError: true,
      };
    }

    default:
      return state;
  }
};
*/

export default appReducer;
