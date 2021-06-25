import React, { memo } from 'react';
import { nanoid } from 'nanoid';
import { Card } from 'components';
import { CardListPropsType } from 'types/interfaces';

import './index.scss';

const CardList = ({ movies = [], onChangeStar }: CardListPropsType): JSX.Element => {
  const cards = movies?.map((elem) => (
    <Card className="card-item" key={elem.title + nanoid()} onChangeStar={onChangeStar} {...elem} />
  ));

  return <div className="card-list">{cards}</div>;
};

export default memo(CardList);
