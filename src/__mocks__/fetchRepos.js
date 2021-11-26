import reposAPI from './reposAPI';

const fetchRepos = () => reposAPI()
  .then((repos) => {
    const filteredRepos = repos.map((repo) => ({
      id: repo.id,
      owner_name: repo.owner.login,
      avatar: repo.owner.avatar_url,
      repo_name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      issues: repo.open_issues_count,
    }));
    return filteredRepos;
  });

export default fetchRepos;
