// @flow
import type { Action } from '../types';
import { NAVIGATE } from './types';

export const navigate = (toPage: string): Action => {
  console.log('toPage in action ', toPage);
  return {
    type: NAVIGATE,
    payload: { toPage: toPage },
  };
};
