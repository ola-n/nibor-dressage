import { combineReducers } from 'redux';
import app from './app/reducer';
import { AppState } from './app/types';
import navigation from './navigation/reducer';
import { NavigationState } from './navigation/types';

export type GlobalState = {|
  app: AppState,
  navigation: NavigationState,
|};

export default combineReducers({ app, navigation });
