import React from 'react';
import { Spin } from 'antd';

import './index.scss';

const Loader: React.FC = () => (
  <div className="loader">
    <Spin size="large" />
  </div>
);

export default Loader;
