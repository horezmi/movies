import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination } from 'components';

import { fetchData, getSearchedMovies, BASE_URL, API_KEY } from 'helpers/fetchData';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const SearchTab = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const take = async () => {
      const taked = await getSearchedMovies('return', page);
      setMovies(taked.results.slice(0, 6));
    };
    take();
  }, [page]);

  const handlePagination = (page: number) => {
    setPage(page);
  };

  return (
    <div className="search-tab">
      <SearchPanel />
      <CardList movies={movies} />
      <Pagination />
    </div>
  );
};

export default SearchTab;
