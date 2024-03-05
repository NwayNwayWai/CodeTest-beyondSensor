import React, { useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import { Icons } from '../images';

import './Pagination.css';

interface PaginationProps {
  itemsPerPage: number;
  page: number;
  onPageChange: (selected: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, page, onPageChange }) => {
  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className="pt-[20px]">
      {itemsPerPage > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Icons.dropRightArrow />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={itemsPerPage}
          previousLabel={<Icons.dropLeftArrow />}
          renderOnZeroPageCount={null}
          forcePage={page - 1}
          previousClassName="pagination-previous"
          nextClassName="pagination-next"
          breakClassName="pagination-page"
          pageClassName="pagination-page"
          activeClassName="pagination-active"
          disabledClassName="pagination-disabled"
          previousLinkClassName="pagination-link"
          nextLinkClassName="pagination-link"
          breakLinkClassName="pagination-link"
          pageLinkClassName="pagination-link"
          className="pagination"
        />
      )}
    </div>
  );
};

export default Pagination;
