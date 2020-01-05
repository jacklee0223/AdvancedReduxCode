import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import App from './components/App';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import logger from 'redux-logger';

export default ({ children, initialState = {} }) => {
  const middleware = [async, logger];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );

  return <Provider store={store}>{children}</Provider>;
};
