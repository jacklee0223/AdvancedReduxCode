import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import App from './components/App';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import logger from 'redux-logger';
import stateValidator from 'middlewares/stateValidator';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator, logger)
  );

  return <Provider store={store}>{children}</Provider>;
};
