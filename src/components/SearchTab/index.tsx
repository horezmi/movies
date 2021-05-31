import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination, Loader } from 'components';

import { getSearchedMovies } from 'helpers/fetchData';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const SearchTab = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('return');

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchedMovies(search, page);
      setTotalPages(data.total_results);
      setMovies(data.results);
      setLoading(false);
    };
    getData();
  }, [page, search]);

  const handleChangePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const onSearch = (value: string) => {
    if (value === '') value = 'return';
    setSearch(value);
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="search-tab">
      <SearchPanel onSearch={onSearch} />
      <CardList movies={movies} />
      <Pagination onChange={handleChangePagination} totalPages={totalPages} />
    </div>
  );
};

export default SearchTab;
