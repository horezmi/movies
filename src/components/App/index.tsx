import React, { useState, useEffect } from 'react';
import { Tabs, Input, Card, Rate, Pagination } from 'antd';

import { fetchData, getSearchedMovies, BASE_URL, API_KEY } from 'helpers/fetchData';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => {
  const { TabPane } = Tabs;

  const [movies, setMovies] = useState<movie[]>([]);
  const [page, setPage] = useState(1);
  const setActiveTab = () => {
    console.log(movies);
  };

  interface movie {
    title: string,
    poster_path: string,
    overview: string,
    release_date: string,
    vote_average: number,
  }

  useEffect(() => {
    const take = async () => {
      const taked = await getSearchedMovies('return', page);
      setMovies(taked.results.slice(0, 6));
    };
    take();
  }, [page]);

  const cards = movies.map((elem : movie) => (
    <div className="card-wrap" key={elem.title}>
      <Card bodyStyle={{ padding: 5, margin: 10 }}>
        <div className="card">
          <div className="card-image">
            <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={elem.title} />
          </div>

          <div className="card-info">
            <div className="card-info__header">
              <h2>{elem.title}</h2>
              <div className="card-info__rating-circle">
                <span>{elem.vote_average}</span>
              </div>
            </div>

            <div className="card-info__date-genre">
              <div className="card-info__date">{elem.release_date}</div>
              <div className="card-info__genre">Drama</div>
            </div>

            <div className="card-info__description">
              <p>
                {elem.overview}
              </p>
            </div>

            <div className="card-info__rating-choose">
              <Rate className="rate__star" allowHalf count={10} />
            </div>
          </div>
        </div>
      </Card>
    </div>
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
              <Input className="search-tap-input" placeholder="Type to search..." style={{ height: '32px' }} />
            </div>
            <div className="cards">{cards}</div>
            <div className="pagination">
              <Pagination defaultCurrent={1} total={50} style={{ padding: '15px' }} responsive />
            </div>
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
