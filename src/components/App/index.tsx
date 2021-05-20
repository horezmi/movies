import React, { useState, useEffect } from 'react';
import { Tabs, Input, Card, Rate } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => {
  const { TabPane } = Tabs;

  const setActiveTab = () => {
    console.log('tab choosed');
  };

  const cards = [0, 1, 2, 3, 4, 5].map((elem) => (
    <Card key={elem} bodyStyle={{ padding: 0 }}>
      <div className="card">
        <div className="card-image">
          <img src="https://www.film.ru/sites/default/files/movies/posters/1626748-1195706.jpg" alt="film" />
        </div>

        <div className="card-info">
          <div className="card-info__header">
            <h2>The Way Back</h2>
            <div className="card-info__rating-circle">
              <span>8.93</span>
            </div>
          </div>

          <div className="card-info__date-genre">
            <div className="card-info__date">22-04-2007</div>
            <div className="card-info__genre">Drama</div>
          </div>

          <div className="card-info__description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium accusantium praesentium et,
              consequatur quo! Minus ducimus at architecto vel. Esse repellendus quaerat asperiores mollitia vero
              perspiciatis itaque, voluptatibus est voluptate deleniti nostrum quis nihil porro dolores voluptates
              dignissimos, repudiandae, necessitatibus iure cum eveniet laboriosam.
            </p>
          </div>

          <div className="card-info__rating-choose">
            <Rate
              className="rate__star"
              allowHalf
              count={10}
            />
          </div>
        </div>
      </div>
    </Card>
  ));
  return (
    <div className="app">
      <Tabs
        tabBarStyle={{ width: '130px', margin: '0 auto' }}
        defaultActiveKey="1"
        size="large"
        centered
        onChange={setActiveTab}
      >
        <TabPane tab="Search" key="searchTab">
          <div className="search-tab">
            <div className="search-tab-panel">
              <p>Search</p>
              <Input className="search-tap-input" placeholder="Type to search..." style={{ height: '32px' }} />
            </div>
            <div className="cards">{cards}</div>
          </div>
        </TabPane>
        <TabPane tab="Rating" key="ratingTab">
          <div className="rating-tab">
            <p>Rating</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
