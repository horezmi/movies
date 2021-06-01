import React, { useState, useEffect } from 'react';
import { SearchPanel, CardList, Pagination, Loader } from 'components';

import { getSearchedMovies, createGuestSession, postRatedFilm } from 'helpers/Api';
import { setLocalStorage, getLocalStorage } from 'helpers/LocalStorage';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const SearchTab = ({ onChangeStar }: any) => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('return');
  const [sessionId, setSessionId] = useState<string>(getLocalStorage('sessionId') || '');

  const getMoviesData = async () => {
    const data = await getSearchedMovies(search, page);
    setTotalPages(data.total_results);
    setMovies(data.results);
    setLoading(false);
  };

  postRatedFilm();

  const getSessionData = async () => {
    const { guest_session_id } = await createGuestSession();
    setLocalStorage('sessionId', guest_session_id);
    setSessionId(guest_session_id);
  };

  useEffect(() => {
    getMoviesData();
  }, [page, search]);

  useEffect(() => {
    if (!sessionId) {
      getSessionData();
    }
  }, []);

  const handleChangePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const onSearch = (value: string) => {
    if (value === '') {
      value = 'return';
      setMovies([]);
    }
    setSearch(value);
  };

  const hanglePostRatedFilm = () => {
    console.log('e12e21e');
  };
  // onChangeStar={hanglePostRatedFilm}
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
