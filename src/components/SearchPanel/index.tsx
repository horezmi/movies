import React, { memo, useState, useEffect, useCallback } from 'react';
import { Input } from 'antd';
import { SearchPanelPropsType } from 'types/interfaces';

import debounce from 'helpers/functions/debounce';

import './index.scss';

let onSearchDebounce: Function;

const SearchPanel = ({ onSearch }: SearchPanelPropsType): JSX.Element => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    onSearchDebounce = debounce(onSearch, 1000);
  }, []);

  const onChange = useCallback(({ target: { value } }: any) => {
    setValue(value);
    onSearchDebounce(value);
  }, [value]);

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

export default memo(SearchPanel);
