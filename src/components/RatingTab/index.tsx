import React, { memo, useState, useCallback } from 'react';
import { CardList, Loader, Error } from 'components';
import { postRatedFilm } from 'api';
import { RatingTabPropsType } from 'types/interfaces';

import './index.scss';

const RatingTab = ({ ratedMovies }: RatingTabPropsType): JSX.Element => {
  const [error, setError] = useState<boolean>(false);

  const hangleRatedFilm = useCallback(async (movieId: number, rating: number) => {
    const data = await postRatedFilm({ movieId, rating });
    if (!data) setError(true);
  }, []);

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

  if (error) return <Error />;

  return <div className="rating-tab">{ratedMovies ? content : <Loader />}</div>;
};

export default memo(RatingTab);
