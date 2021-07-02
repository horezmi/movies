import React from 'react';
import { Alert } from 'antd';

import './index.scss';

const Error: React.FC = () => (
  <Alert message="Oops something went wrong" description="Check your internet or restart page" type="error" closable />
);

export default Error;
