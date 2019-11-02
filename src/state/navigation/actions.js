// @flow
import type { Action } from '../types';
import { SET_ACTIVE_PAGE } from './types';

export const setActivePage = (page: string): Action => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: { page: page },
  };
};
