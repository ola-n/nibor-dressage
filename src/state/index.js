import { combineReducers } from 'redux';
import app from './app/reducer';
import { AppState } from './app/types';

export type GlobalState = {|
  app: AppState,
|};

export default combineReducers({ app });
