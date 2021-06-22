import React from 'react';
import { CardList, Loader } from 'components';
import { postRatedFilm } from 'helpers/Api';
import { RatingTabPropsType } from 'types/interfaces';

import './index.scss';

const RatingTab = ({ ratedMovies }: RatingTabPropsType): JSX.Element => {
  const hangleRatedFilm = (movieId: number, rating: number) => {
    postRatedFilm({ movieId, rating });
  };

  let content;
  if (ratedMovies?.length === 0) {
    content = (
      <div className="rating-tab__no-movies">
        <h1>No movies</h1>
      </div>
    );
  } else {
    content = (
      <div className="rating-tab__main">
        <CardList movies={ratedMovies} onChangeStar={hangleRatedFilm} />
      </div>
    );
  }

  return <div className="rating-tab">{ratedMovies ? content : <Loader />}</div>;
};

export default RatingTab;
