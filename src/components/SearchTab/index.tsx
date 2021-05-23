import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination } from 'components';

import { getSearchedMovies } from 'helpers/fetchData';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const SearchTab = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const take = async () => {
      const taked = await getSearchedMovies('return', page);
      setMovies(taked.results.slice(0, 6));
    };
    take();
  }, [page]);

  const handleChangePagination = (pageNubmer: number) => {
    setPage(pageNubmer);
  };

  return (
    <div className="search-tab">
      <SearchPanel />
      <CardList movies={movies} />
      <Pagination onChange={handleChangePagination} />
    </div>
  );
};

export default SearchTab;
