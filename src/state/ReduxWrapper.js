import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore as reduxCreateStore,
  compose,
  applyMiddleware,
} from 'redux';
import rootReducer from './';

const middlewares = [];

// if REDUX_DEVTOOLS is running, feed it with info.
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const createStore = () => reduxCreateStore(rootReducer, undefined, enhancers);

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
