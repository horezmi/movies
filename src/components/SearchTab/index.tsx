import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination, Loader } from 'components';

import { getSearchedMovies, createGuestSession, postRatedFilm } from 'helpers/Api';
import { setLocalStorage, getLocalStorage } from 'helpers/LocalStorage';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const SearchTab = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('return');
  const [rated, setRated] = useState<any>({ movieId: 0, rating: 0 });

  const getMoviesData = async () => {
    const { total_results, results } = await getSearchedMovies(search, page);
    setTotalPages(total_results);
    setMovies(results);
    setLoading(false);
  };

  useEffect(() => {
    getMoviesData();
  }, [page, search]);

  const handleChangePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const onSearch = (value: string) => {
    if (value === '') value = 'return';
    setLoading(true);
    setSearch(value);
  };

  const hangleRatedFilm = (movieId: number, rating: number) => {
    setRated({ movieId, rating });
  };

  useEffect(() => {
    if (rated.rating) postRatedFilm(rated);
  }, [rated]);
  return (
    <div className="search-tab">
      <div className="search-tab__header">
        <SearchPanel onSearch={onSearch} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="search-tab__main">
          <CardList movies={movies} onChangeStar={hangleRatedFilm} />
          <Pagination onChange={handleChangePagination} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
};

export default SearchTab;
