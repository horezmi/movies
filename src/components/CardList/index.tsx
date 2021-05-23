import React from 'react';
import { Card } from 'components';
import { MoviesType } from 'types/interfaces';

import './index.scss';

const CardList = ({ movies } : { movies: MoviesType[] }) => {
  const cards = movies.map((elem) => (
    <Card key={elem.title} {...elem} />
  ));
  return (
    <div className="card-list">
      <div className="cards">{cards}</div>
    </div>
  );
};

export default CardList;
