import React from 'react';
import { Spin } from 'antd';

import './index.scss';

const Loader = () => {
  const a = 'test';
  console.log(a);
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
