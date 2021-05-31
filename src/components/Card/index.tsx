import React, { useState } from 'react';
import { Card as CardAntd, Rate } from 'antd';

import { MoviesType } from 'types/interfaces';
import './index.scss';

const Card = ({ title, poster_path, vote_average, release_date, overview }: MoviesType) => {
  const [srcImg, setSrcImg] = useState<string>(`https://image.tmdb.org/t/p/w500${poster_path}`);

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
  return (
    <div className="card-wrap">
      <CardAntd bodyStyle={{ padding: 5, margin: 10 }}>
        <div className="card">
          <div className="card-image">
            <img src={srcImg} alt={title} onError={onErrorImg} />
          </div>

          <div className="card-info">
            <div className="card-info__header">
              <h2>{title}</h2>
              <div className="card-info__rating-circle">
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
              <Rate className="card-info__rating-choose_stars" allowHalf count={10} />
            </div>
          </div>
        </div>
      </CardAntd>
    </div>
  );
};

export default Card;
