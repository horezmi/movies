import React, { useState, useContext } from 'react';
import { Card as CardAntd, Rate } from 'antd';
import moviesAppContext from 'Context';
import { GenresType, CardPropsType } from 'types/interfaces';

import cutText from 'helpers/Functions/CutText';

import cn from 'classnames';
import './index.scss';

const Card = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  onChangeStar,
  genre_ids,
  rating = 0,
}: CardPropsType): JSX.Element => {
  const [srcImg, setSrcImg] = useState<string>(`https://image.tmdb.org/t/p/w500${poster_path}`);
  const [starValue, setStarValue] = useState<number>(rating);

  const { genres } = useContext(moviesAppContext);

  const onErrorImg = () => {
    setSrcImg('https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg');
  };
  const circleClasses = cn({
    'card-info__rating-circle': true,
    low: vote_average >= 0 && vote_average <= 3,
    medium: vote_average > 3 && vote_average <= 5,
    good: vote_average > 5 && vote_average <= 7,
    great: vote_average > 7,
  });
  const handleChangeStar = (value: number) => {
    if (value > 0) {
      setStarValue(value);
      onChangeStar(id, value);
    }
  };
  const genresList: GenresType[] = genre_ids.map((id: number) => {
    let genre;
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].id === id) {
        genre = (
          <div className="card-info__genre" key={id}>
            {genres[i].name}
          </div>
        );
      }
    }
    return genre;
  });

  return (
    <div className="card-wrap">
      <CardAntd bodyStyle={{ padding: 5, margin: 10 }}>
        <div className="card">
          <div className="card-image">
            <img className="card-image__poster" src={srcImg} alt={title} onError={onErrorImg} />
          </div>
          <div className="card-info">
            <div className="card-info__header">
              <h2 className="card-info__header_title">{title}</h2>
              <div className={circleClasses}>
                <span>{vote_average}</span>
              </div>
            </div>
            <div className="card-info__date-genres">
              <div className="card-info__date">{release_date}</div>
              <div className="card-info__genres">{genresList}</div>
            </div>
            <div className="card-info__description">
              <p>{cutText(overview)}</p>
            </div>
            <div className="card-info__rating-choose">
              <Rate
                className="card-info__rating-choose_stars"
                value={starValue}
                onChange={handleChangeStar}
                allowHalf
                count={10}
              />
            </div>
          </div>
        </div>
      </CardAntd>
    </div>
  );
};

export default Card;
