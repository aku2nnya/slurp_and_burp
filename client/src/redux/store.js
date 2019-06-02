import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import allReviewsReducer from './allReviewsReducer';


const store = createStore(
  allReviewsReducer,
  applyMiddleware(createLogger(), thunk, createPromise()),
);


export default store;
