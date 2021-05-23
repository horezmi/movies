import React from 'react';
import { Spin } from 'antd';

import './index.scss';

const Loader = () => {
  const a = 1;
  console.log(a);
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
