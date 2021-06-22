import React from 'react';
import { Pagination as PaginationAntd } from 'antd';
import { PaginationPropsType } from 'types/interfaces';

import './index.scss';

const Pagination = ({ onChange, totalPages, currentPage }: PaginationPropsType): JSX.Element => {
  const handleChange = (pageNumber: number) => onChange(pageNumber);
  return (
    <div className="pagination">
      <PaginationAntd
        defaultPageSize={20}
        current={currentPage}
        total={totalPages}
        style={{ padding: '15px' }}
        responsive
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
