import { Suspense } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Repo from './components/Repo';
import './css/app.css';

const App = () => {
  const repos = useSelector((state) => state.reposReducer.repos);
  const date = moment().subtract(30, 'days').format('Y-M-D');
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ul className="App">
        {
          repos.length
            ? (
              repos.map((repo) => (
                <Repo
                  key={repo.id}
                  ownerName={repo.ownerName}
                  avatar={repo.avatar}
                  repoName={repo.repoName}
                  description={repo.description}
                  stars={repo.stars}
                  issues={repo.issues}
                />
              ))
            )
            : `There are no repos provide in ${date}`
        }
      </ul>
    </Suspense>
  );
};

export default App;
