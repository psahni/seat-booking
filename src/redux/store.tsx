import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
/*
import rootReducer from './root-reducer';

const middlewares = [logger, thunk];

if (process.env.NODE_ENV !== 'development') {
  middlewares.shift();
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

*/