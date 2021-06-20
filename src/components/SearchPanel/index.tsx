import React, { useState } from 'react';
import { Input } from 'antd';

import './index.scss';

const SearchPanel = ({ onSearch }: any) => {
  const [value, setValue] = useState<string>('');

  const onChange = ({ target: { value } }: any) => {
    setValue(value);
    onSearch(value);
  };
  return (
    <div className="search-panel">
      <Input
        className="search-panel-input"
        value={value}
        onChange={onChange}
        placeholder="Type to search..."
        style={{ height: '32px' }}
      />
    </div>
  );
};

export default SearchPanel;
