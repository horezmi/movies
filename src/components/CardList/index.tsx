import React from 'react';
import { nanoid } from 'nanoid';
import { Card } from 'components';
import { MoviesType } from 'types/interfaces';

import './index.scss';

const CardList = ({ movies = [], onChangeStar }: { movies: MoviesType[]; onChangeStar: any }) => {
  const cards = movies?.map((elem) => <Card key={elem.title + nanoid()} onChangeStar={onChangeStar} {...elem} />);
  return (
    <div className="card-list">
      <div className="cards">{cards}</div>
    </div>
  );
};

export default CardList;
