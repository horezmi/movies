import React, { useState, useEffect } from 'react';
import { SearchTab, RatingTab } from 'components';
import { Tabs } from 'antd';
import { MoviesType } from 'types/interfaces';

import { createGuestSession, getRatedFilms } from 'helpers/Api';
import { setLocalStorage, getLocalStorage } from 'helpers/LocalStorage';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => {
  const [sessionId, setSessionId] = useState<string>(getLocalStorage('sessionId') || '');
  const [ratedMovies, setRatedMovies] = useState<MoviesType[]>([]);

  const getSessionData = async () => {
    const { guest_session_id } = await createGuestSession();
    setLocalStorage('sessionId', guest_session_id);
    setSessionId(guest_session_id);
  };

  const getRatedMovies = async () => {
    const { results } = await getRatedFilms();
    setRatedMovies(results);
  };

  useEffect(() => {
    if (!sessionId) {
      getSessionData();
    }
  }, []);

  const handleChangeTab = (activeTab: string) => {
    if (activeTab === 'ratingTab') getRatedMovies();
  };

  const { TabPane } = Tabs;

  return (
    <div className="app">
      <Tabs
        tabBarStyle={{ width: '130px', margin: '0 auto' }}
        onChange={handleChangeTab}
        defaultActiveKey="1"
        size="large"
        centered
      >
        <TabPane tab="Search" key="searchTab">
          <SearchTab />
        </TabPane>
        <TabPane tab="Rating" key="ratingTab">
          <RatingTab ratedMovies={ratedMovies} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
