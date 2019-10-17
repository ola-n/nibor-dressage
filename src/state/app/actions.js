// @flow
import type { Action } from '../types';
import { TOGGLE_DARKMODE } from './types';

/*export const startApp = (): Action => {
  return {
    type: APP_READY,
  };
};*/

export const toggleDarkMode = (isDarkMode: boolean): Action => ({
  type: TOGGLE_DARKMODE,
  payload: { isDarkMode: isDarkMode },
});
