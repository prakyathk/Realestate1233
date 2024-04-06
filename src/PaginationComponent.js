
// import React from "react";
// import { Pagination } from "react-bootstrap";

// const PaginationComponent = ({ sellersPerPage, totalSellers, currentPage, paginate }) => {
//   const pageNumbers = [];
//   const totalPages = Math.ceil(totalSellers / sellersPerPage);

//   const displayPageNumbers = 3;
//   let startPage = currentPage - Math.floor(displayPageNumbers / 2);
//   startPage = Math.max(startPage, 1);
//   startPage = Math.min(startPage, Math.max(1, totalPages - displayPageNumbers + 1));

//   for (let i = startPage; i < startPage + displayPageNumbers && i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <Pagination>
//         {currentPage > 1 && (
//           <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
//         )}

//         {pageNumbers.map((number) => (
//           <Pagination.Item
//             key={number}
//             active={number === currentPage}
//             onClick={() => paginate(number)}
//           >
//             {number}
//           </Pagination.Item>
//         ))}

//         {currentPage < totalPages && (
//           <Pagination.Next onClick={() => paginate(currentPage + 1)} />
//         )}
//       </Pagination>
//     </nav>
//   );
// };

// export default PaginationComponent;


import React from 'react';
import PropTypes from 'prop-types';

const PaginationComponent = ({ nPages, currentPage, setCurrentPage }) => {
  const totalPagesToShow = 6;
  const halfTotalPagesToShow = Math.floor(totalPagesToShow / 2);
  let startPage = currentPage - halfTotalPagesToShow;
  startPage = Math.max(startPage, 1);
  const endPage = Math.min(startPage + totalPagesToShow - 1, nPages);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className="page-item">
          <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        </li>
        {pageNumbers.map(pgNumber => (
          <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
            <button onClick={() => setCurrentPage(pgNumber)} className='page-link'>{pgNumber}</button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={nextPage} disabled={currentPage === nPages}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

PaginationComponent.propTypes = {
  nPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default PaginationComponent;
