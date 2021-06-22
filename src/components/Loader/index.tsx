import React from 'react';
import { Spin } from 'antd';

import './index.scss';

const Loader: React.FC = (): JSX.Element => (
  <div className="loader">
    <Spin size="large" />
  </div>
);

export default Loader;
