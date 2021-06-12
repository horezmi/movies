import React, { useEffect, useState } from 'react';

import { CardList } from 'components';
import { getRatedFilms, postRatedFilm } from 'helpers/Api';
import { MoviesType } from 'types/interfaces';

const RatingTab = () => {
  const [ratedMovies, setRatedMovies] = useState<MoviesType[]>([]);
  const [rated, setRated] = useState<any>({ movieId: 0, rating: 0 });
  const getRatedMovies = async () => {
    const { results } = await getRatedFilms();
    console.log(results, 'rated');
    setRatedMovies(results);
  };
  useEffect(() => {
    getRatedMovies();
  }, []);

  const hangleRatedFilm = (movieId: number, rating: number) => {
    setRated({ movieId, rating });
  };

  useEffect(() => {
    if (rated.rating) postRatedFilm(rated);
  }, [rated]);
  return (
    <div className="search-tab">
      <CardList movies={ratedMovies} onChangeStar={hangleRatedFilm} />
    </div>
  );
};

export default RatingTab;
