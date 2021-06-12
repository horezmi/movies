import React, { useState, useEffect } from 'react';
import { SearchTab, RatingTab } from 'components';
import { Tabs } from 'antd';

import { getSearchedMovies, createGuestSession, postRatedFilm } from 'helpers/Api';
import { setLocalStorage, getLocalStorage } from 'helpers/LocalStorage';
import { MoviesType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => {
  const [sessionId, setSessionId] = useState<string>(getLocalStorage('sessionId') || '');

  const getSessionData = async () => {
    const { guest_session_id } = await createGuestSession();
    setLocalStorage('sessionId', guest_session_id);
    setSessionId(guest_session_id);
  };
  useEffect(() => {
    if (!sessionId) {
      getSessionData();
    }
  }, []);
  const { TabPane } = Tabs;
  return (
    <div className="app">
      <Tabs tabBarStyle={{ width: '130px', margin: '0 auto' }} defaultActiveKey="1" size="large" centered>
        <TabPane tab="Search" key="searchTab">
          <SearchTab />
        </TabPane>
        <TabPane tab="Rating" key="ratingTab">
          <RatingTab />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
