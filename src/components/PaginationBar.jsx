import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRepos from '../fethcingData/fetchRepos';

const PaginationBar = () => {
  const btns = [];
  const [page, setPage] = useState('1');
  const repos = useSelector((state) => state.reposReducer.repos);
  const dispatch = useDispatch();
  const handelPagination = (e) => {
    setPage(e.target.textContent);
    dispatch(fetchRepos(e.target.textContent));
  };

  for (let i = 1; i <= 34; i += 1) {
    btns.push(
      page === `${i}`
        ? (
          <button type="button" onClick={handelPagination} key={i} className="active">
            {i}
          </button>
        )
        : (
          <button type="button" onClick={handelPagination} key={i}>
            {i}
          </button>
        ),
    );
  }
  return (
    <div className="pagination">
      {
        repos.length
          ? btns
          : null
      }
    </div>
  );
};

export default PaginationBar;
