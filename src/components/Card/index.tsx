import React, { useState } from 'react';
import cn from 'classnames';
import { Card as CardAntd, Rate } from 'antd';

import { MoviesType } from 'types/interfaces';
import './index.scss';

const Card = ({ id, title, poster_path, vote_average, release_date, overview, onChangeStar, rating = 0 }: any) => {
  const [srcImg, setSrcImg] = useState<string>(`https://image.tmdb.org/t/p/w500${poster_path}`);
  const [starValue, setStarValue] = useState<number>(rating);

  const onErrorImg = () => {
    setSrcImg('https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg');
  };
  const cutText = (text: string) => {
    if (text.length > 550) {
      const cated = text.substring(0, 550);
      const idx = cated.lastIndexOf('.');
      const result = text.substring(0, idx + 1);
      return result;
    }
    return text;
  };
  const circleClasses = cn({
    'card-info__rating-circle': true,
    red: vote_average < 5,
    yellow: vote_average >= 5 && vote_average < 7.5,
    green: vote_average >= 7.5,
  });
  const handleChangeStar = (value: number) => {
    setStarValue(value);
    onChangeStar(id, value);
  };
  return (
    <div className="card-wrap">
      <CardAntd bodyStyle={{ padding: 5, margin: 10 }}>
        <div className="card">
          <div className="card-image">
            <img src={srcImg} alt={title} onError={onErrorImg} />
          </div>

          <div className="card-info">
            <div className="card-info__header">
              <h2 className="card-info__header_title">{title}</h2>
              <div className={circleClasses}>
                <span>{vote_average}</span>
              </div>
            </div>

            <div className="card-info__date-genre">
              <div className="card-info__date">{release_date}</div>
              <div className="card-info__genre">Drama</div>
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
