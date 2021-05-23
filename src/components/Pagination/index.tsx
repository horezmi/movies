import React from 'react';

import { Pagination as PaginationAntd } from 'antd';

import './index.scss';

const Pagination = ({ onChange, totalPages }: any) => {
  const handleChange = (pageNumber: number) => onChange(pageNumber);
  return (
    <div className="pagination">
      <PaginationAntd
        defaultCurrent={1}
        total={totalPages}
        style={{ padding: '15px' }}
        responsive
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
