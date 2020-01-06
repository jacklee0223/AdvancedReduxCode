import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, logger)
  );

  return <Provider store={store}>{children}</Provider>;
};
