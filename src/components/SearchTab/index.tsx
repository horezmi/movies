import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination, Loader } from 'components';
import { getSearchedMovies, postRatedFilm } from 'helpers/Api';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const DEFAULT_SEARCH = 'return';

const SearchTab = (): JSX.Element => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>(DEFAULT_SEARCH);

  const getMoviesData: Function = async () => {
    const { total_results, results } = await getSearchedMovies(search, page);
    setTotalPages(total_results);
    setMovies(results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMoviesData();
  }, [page, search]);

  const handleChangePagination: Function = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const onSearch: Function = (value: string) => {
    if (value === '') value = DEFAULT_SEARCH;
    setLoading(true);
    setSearch(value);
  };

  const hangleRatedFilm: Function = (movieId: number, rating: number) => {
    postRatedFilm({ movieId, rating });
  };

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
        </div>
      )}

      <Pagination onChange={handleChangePagination} current={page} totalPages={totalPages} />
    </div>
  );
};

export default SearchTab;
