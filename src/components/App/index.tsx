import React from 'react';
import { SearchTab, RatingTab } from 'components';
import { Tabs } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => {
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
