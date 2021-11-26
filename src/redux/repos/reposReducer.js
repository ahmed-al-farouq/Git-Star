import { FETCHING_REPOS_FAILED, FETCHING_REPOS_SUCCEED, START_FETCHING_REPOS } from './actions';

const initState = {
  loading: false,
  repos: [],
  error: '',
};

const reposReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_REPOS:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_REPOS_SUCCEED:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case FETCHING_REPOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reposReducer;
