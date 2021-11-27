import React from 'react';
import propTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Repo = ({
  ownerName, avatar, repoName, description, stars, issues,
}) => (
  <li className="repo">
    <LazyLoadImage effect="blur" src={avatar} alt={ownerName} />
    <div>
      <h2 className="repo-name">
        {repoName}
      </h2>
      <p className="desc">
        {description === null ? 'There is no description' : description}
      </p>
      <span className="stars">
        Stars:
        {' '}
        {stars}
      </span>
      <span className="issues">
        Issues:
        {' '}
        {issues}
      </span>
      <span className="owner-name">
        Submitted 30 days ago by
        {' '}
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
