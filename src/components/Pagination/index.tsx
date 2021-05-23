import React from 'react';

import { Pagination as PaginationAntd } from 'antd';

import './index.scss';

const Pagination = ({ onChange, totalPages }: any) => {
  const handleChange = (pageNumber: number) => onChange(pageNumber);
  return (
    <div className="pagination">
      <PaginationAntd
        defaultPageSize={20}
        total={totalPages}
        style={{ padding: '15px' }}
        responsive
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
