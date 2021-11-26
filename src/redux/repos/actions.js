export const START_FETCHING_REPOS = 'START_FETCHING_REPOS';
export const FETCHING_REPOS_SUCCEED = 'FETCHING_REPOS_SUCCEED';
export const FETCHING_REPOS_FAILED = 'FETCHING_REPOS_FAILED';

export const startFetchingRepos = () => ({
  type: START_FETCHING_REPOS,
});

export const fetchingReposSucceed = (repos) => ({
  type: FETCHING_REPOS_SUCCEED,
  payload: repos,
});

export const fetchingReposFailed = (err) => ({
  type: FETCHING_REPOS_FAILED,
  payload: err,
});
