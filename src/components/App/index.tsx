import React from 'react';
import { Card, Tabs, Pagination, Spin } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => {
  const { Meta } = Card;

  return (
    <div className="App">
      <div className="film-card">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <Pagination />
      <Tabs>
        <div className="let">
          <p>dqwdwqd</p>
        </div>
      </Tabs>
      <Spin />
    </div>
  );
};

export default App;
