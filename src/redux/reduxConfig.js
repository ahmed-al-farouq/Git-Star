import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { startFetchingRepos } from './repos/actions';
import reposReducer from './repos/reposReducer';

const rootReducer = combineReducers({
  reposReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(startFetchingRepos());
export default store;
