import React, { useEffect, useState } from 'react';
import { CardList } from 'components';
import { getRatedFilms } from 'helpers/Api';
import { MoviesType } from 'types/interfaces';

const RatingTab = () => {
  const [ratedMovies, setRatedMovies] = useState<MoviesType[]>([]);

  const getRatedMovies = async () => {
    const data = await getRatedFilms();
    console.log(data);
    setRatedMovies(data.results);
  };
  useEffect(() => {
    getRatedMovies();
  }, []);

  const hangleRatedFilm = () => console.log('t');
  return (
    <div className="search-tab">
      <CardList movies={ratedMovies} onChangeStar={hangleRatedFilm} />
    </div>
  );
};

export default RatingTab;
