import React, { memo, useState, useCallback, useMemo } from 'react';
import { CardList, Loader, Error } from 'components';
import { postRatedFilm } from 'api';
import { RatingTabPropsType } from 'types/interfaces';

import './index.scss';

const RatingTab = ({ ratedMovies }: RatingTabPropsType): JSX.Element => {
  const [error, setError] = useState<boolean>(false);

  const hangleRatedFilm = useCallback(
    async (movieId: number, rating: number) => {
      const data = await postRatedFilm({ movieId, rating });
      if (!data) setError(true);
    },
    [ratedMovies]
  );

  if (error) return <Error />;

  if (ratedMovies?.length === 0) return <h1 className="rating-tab__no-movies">No rated movies</h1>;

  return (
    <div className="rating-tab">
      {!ratedMovies?.length ? (
        <Loader />
      ) : (
        <div className="rating-tab__main">
          <CardList movies={ratedMovies} onChangeStar={hangleRatedFilm} />
        </div>
      )}
    </div>
  );
};

export default memo(RatingTab);
