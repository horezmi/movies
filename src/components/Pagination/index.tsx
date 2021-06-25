import React, { memo, useCallback } from 'react';
import { Pagination as PaginationAntd } from 'antd';
import { PaginationPropsType } from 'types/interfaces';

import './index.scss';

const Pagination = ({ onChange, totalPages, currentPage }: PaginationPropsType): JSX.Element => {
  const handleChange = useCallback((pageNumber: number) => onChange(pageNumber), [onChange]);

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

export default memo(Pagination);
