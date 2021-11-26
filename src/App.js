import moment from 'moment';
import { useSelector } from 'react-redux';
import Repo from './components/Repo';
import PaginationBar from './components/PaginationBar';
import './css/app.css';

const App = () => {
  const repos = useSelector((state) => state.reposReducer.repos);
  const loading = useSelector((state) => state.reposReducer.loading);
  const date = moment().subtract(30, 'days').format('Y-M-D');
  return (
    <>
      {
        loading === false
          ? (
            <>
              <ul className="app">
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
                    : (
                      <h1 className="no-repos">
                        There are no repos provided in
                        {' '}
                        {date}
                      </h1>
                    )
                }
              </ul>
            </>
          )
          : (
            <div className="loading">
              <h2>
                loading...
              </h2>
              <span />
            </div>
          )
      }
      <PaginationBar />
    </>
  );
};

export default App;
