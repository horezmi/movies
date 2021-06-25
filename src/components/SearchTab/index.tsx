import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination, Loader, Error } from 'components';
import { getSearchedMovies, postRatedFilm } from 'Api';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const DEFAULT_SEARCH = 'return';

const SearchTab: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>(DEFAULT_SEARCH);
  const [error, setError] = useState<boolean>(false);

  const getMoviesData = async () => {
    const data = await getSearchedMovies(search, page);
    if (!data) {
      setError(true);
      return;
    }
    const { total_results, results } = data;
    setTotalPages(total_results);
    setMovies(results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMoviesData();
  }, [page, search]);

  const handleChangePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const onSearch = (value: string) => {
    if (value === '') value = DEFAULT_SEARCH;
    setLoading(true);
    setSearch(value);
  };
  const hangleRatedFilm = async (movieId: number, rating: number) => {
    const data = await postRatedFilm({ movieId, rating });
    if (!data) setError(true);
  };

  if (error) return <Error />;

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
      <Pagination onChange={handleChangePagination} currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default SearchTab;
