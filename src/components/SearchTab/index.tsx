import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination } from 'components';

import { getSearchedMovies } from 'helpers/fetchData';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const SearchTab = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchedMovies('return', page);
      setTotalPages(data.total_results);
      console.log(data);
      setMovies(data.results);
    };
    getData();
  }, [page]);

  const handleChangePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className="search-tab">
      <SearchPanel />
      <CardList movies={movies} />
      <Pagination onChange={handleChangePagination} totalPages={totalPages} />
    </div>
  );
};

export default SearchTab;
