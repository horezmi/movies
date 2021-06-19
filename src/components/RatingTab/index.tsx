import React from 'react';

import { CardList, Loader } from 'components';
import { postRatedFilm } from 'helpers/Api';

const RatingTab = ({ ratedMovies }: any) => {
  const hangleRatedFilm = (movieId: number, rating: number) => {
    postRatedFilm({ movieId, rating });
  };

  return (
    <div className="rating-tab">
      {ratedMovies?.length < 1 ? (
        <Loader />
      ) : (
        <div className="search-tab__main">
          <CardList movies={ratedMovies} onChangeStar={hangleRatedFilm} />
        </div>
      )}
    </div>
  );
};

export default RatingTab;
