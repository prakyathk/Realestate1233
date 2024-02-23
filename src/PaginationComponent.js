// import React from "react";
// import { Pagination } from "react-bootstrap";

// import './Pagination.css'
// const PaginationComponent = ({ sellersPerPage, totalSellers, paginate }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalSellers / sellersPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <Pagination>
//         {pageNumbers.map((number) => (
//           <Pagination.Item key={number} onClick={() => paginate(number)}>
//             {number}
//           </Pagination.Item>
//         ))}
//       </Pagination>
//     </nav>
//   );
// };

// export default PaginationComponent;


// PaginationComponent.jsx
import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ sellersPerPage, totalSellers, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalSellers / sellersPerPage);

  const displayPageNumbers = 3;
  let startPage = currentPage - Math.floor(displayPageNumbers / 2);
  startPage = Math.max(startPage, 1);
  startPage = Math.min(startPage, Math.max(1, totalPages - displayPageNumbers + 1));

  for (let i = startPage; i < startPage + displayPageNumbers && i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination>
        {currentPage > 1 && (
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
        )}

        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}

        {currentPage < totalPages && (
          <Pagination.Next onClick={() => paginate(currentPage + 1)} />
        )}
      </Pagination>
    </nav>
  );
};

export default PaginationComponent;

