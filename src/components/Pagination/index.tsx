import React from 'react';

import { Pagination as PaginationAntd } from 'antd';

import './index.scss';

const Pagination = () => {
  const a = 2;
  //   onChange={handlePagination}
  return (
    <div className="pagination">
      <PaginationAntd defaultCurrent={1} total={50} style={{ padding: '15px' }} responsive />
    </div>
  );
};

export default Pagination;
