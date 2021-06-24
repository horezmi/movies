import React, { useState, useEffect } from 'react';

import { Tabs } from 'antd';
import { SearchTab, RatingTab, Error } from 'components';

import moviesAppContext from 'helpers/Context';
import { createGuestSession, getGenres, getRatedFilms } from 'helpers/Api';
import { setLocalStorage, getLocalStorage } from 'helpers/LocalStorage';

import { MoviesType, GenresType } from 'types/interfaces';

import 'antd/dist/antd.css';
import './index.scss';

const App: React.FC = (): JSX.Element => {
  const [sessionId, setSessionId] = useState<string>(getLocalStorage('sessionId') || '');
  const [ratedMovies, setRatedMovies] = useState<MoviesType[]>([]);
  const [genres, setGenres] = useState<GenresType[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getSessionData: Function = async () => {
    const data = await createGuestSession();
    if (!data) {
      setError(true);
      return;
    }
    const { guest_session_id } = data;
    setLocalStorage('sessionId', guest_session_id);
    setSessionId(guest_session_id);
  };
  const getRatedMovies: Function = async () => {
    const data = await getRatedFilms();
    if (!data) {
      setError(true);
      return;
    }
    const { results } = data;
    setRatedMovies(results);
  };
  const getMoviesGenres: Function = async () => {
    const data = await getGenres();
    if (!data) {
      setError(true);
      return;
    }
    const { genres } = data;
    setGenres(genres);
  };
  useEffect(() => {
    if (!sessionId) {
      getSessionData();
    }
    getMoviesGenres();
  }, []);
  const handleChangeTab = (activeTab: string) => {
    if (activeTab === 'ratingTab') getRatedMovies();
  };

  const { TabPane } = Tabs;

  if (error) return <Error />;

  return (
    <moviesAppContext.Provider value={{ genres }}>
      <div className="app">
        <Tabs
          tabBarStyle={{ width: '130px', margin: '0 auto', fontSize: '20px' }}
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
    </moviesAppContext.Provider>
  );
};

export default App;
