import React, { memo, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { Card } from 'components';
import { CardListPropsType } from 'types/interfaces';

import './index.scss';

const CardList = ({ movies = [], onChangeStar }: CardListPropsType): JSX.Element => {
  const cards = useMemo(() => movies?.map((elem) => (
    <Card className="card-item" key={elem.title + nanoid()} onChangeStar={onChangeStar} {...elem} />
  )), [movies]);

  return <div className="card-list">{cards}</div>;
};

export default memo(CardList);
