import React from 'react';
import { Input } from 'antd';

const SearchPanel = () => {
  const a = 1;
  console.log(a);
  return (
    <div className="search-panel">
      <Input className="search-tap-input" placeholder="Type to search..." style={{ height: '32px' }} />
    </div>
  );
};

export default SearchPanel;
