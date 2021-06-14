import React, { useEffect, useState } from 'react';

import { SearchPanel, CardList, Pagination, Loader } from 'components';
import { getRatedFilms, postRatedFilm } from 'helpers/Api';
import { MoviesType } from 'types/interfaces';

const RatingTab = () => {
  const [ratedMovies, setRatedMovies] = useState<MoviesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getRatedMovies = async () => {
    const { results } = await getRatedFilms();
    setRatedMovies(results);
  };
  useEffect(() => {
    getRatedMovies();
    setLoading(false);
  }, []);

  const hangleRatedFilm = (movieId: number, rating: number) => {
    postRatedFilm({ movieId, rating });
  };
  const onSearch = (value: string) => {
    console.log('onSearch');
  };
  const handleChangePagination = (pageNumber: number) => {
    console.log('onPagination');
  };
  return (
    <div className="rating-tab">
      <div className="rearch-tab__header">
        <SearchPanel onSearch={onSearch} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="search-tab__main">
          <CardList movies={ratedMovies} onChangeStar={hangleRatedFilm} />
          <Pagination onChange={handleChangePagination} totalPages={10} />
        </div>
      )}
    </div>
  );
};

export default RatingTab;
