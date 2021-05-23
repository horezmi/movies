import React from 'react';

import { Pagination as PaginationAntd } from 'antd';

import './index.scss';

const Pagination = ({ onChange }: any) => {
  const handleChange = (pageNubmer: number) => onChange(pageNubmer);
  return (
    <div className="pagination">
      <PaginationAntd defaultCurrent={1} total={50} style={{ padding: '15px' }} responsive onChange={handleChange} />
    </div>
  );
};

export default Pagination;
