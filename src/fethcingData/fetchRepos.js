import moment from 'moment';
import { startFetchingRepos, fetchingReposSucceed, fetchingReposFailed } from '../redux/repos/actions';

const fetchRepos = () => async (dispatch) => {
  dispatch(startFetchingRepos());
  const date = moment().subtract(30, 'days').format('Y-M-D');
  await fetch(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`)
    .then((res) => res.json())
    .then((repos) => {
      const filteredRepos = repos.items.map((repo) => ({
        id: repo.id,
        ownerName: repo.owner.login,
        avatar: repo.owner.avatar_url,
        repoName: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        issues: repo.open_issues_count,
      }));
      dispatch(fetchingReposSucceed(filteredRepos));
    }).catch((err) => dispatch(fetchingReposFailed(err)));
};

export default fetchRepos;
