import React from 'react';
import propTypes from 'prop-types';

const Repo = ({
  ownerName, avatar, repoName, description, stars, issues,
}) => (
  <li>
    <img src={avatar} alt={ownerName} />
    <div>
      <h2 className="repo-name">
        {repoName}
      </h2>
      <p className="desc">
        {description === null ? 'there is no description' : description}
      </p>
      <span className="stars">
        {stars}
      </span>
      <span className="issues">
        {issues}
      </span>
      <span className="owner-name">
        Submitted 30 days ago by
        {ownerName}
      </span>
    </div>
  </li>
);

Repo.defaultProps = {
  description: '',
};

Repo.propTypes = {
  ownerName: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  repoName: propTypes.string.isRequired,
  description: propTypes.string,
  stars: propTypes.number.isRequired,
  issues: propTypes.number.isRequired,
};
export default Repo;