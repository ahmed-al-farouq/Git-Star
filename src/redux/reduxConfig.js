import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fetchRepos from '../fethcingData/fetchRepos';
import reposReducer from './repos/reposReducer';

const rootReducer = combineReducers({
  reposReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(fetchRepos());
export default store;
