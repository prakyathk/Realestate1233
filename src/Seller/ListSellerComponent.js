/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { findallseller, deleteseller } from "../EstateService";
import PaginationComponent from "../PaginationComponent";
import "../App.css";
const ListSellerComponent = () => {
  const [sellers, setSellers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sellersPerPage] = useState(10);

  useEffect(() => {
    findallseller()
      .then((response) => {
        setSellers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sellers:", error);
      });
  }, []);

  const deleteSeller = (sellerId) => {
    if (window.confirm("Are you sure you want to delete this seller?")) {
      deleteseller(sellerId)
        .then(() => {
          console.log("Seller deleted successfully");
          findallseller().then((response) => setSellers(response.data));
        })
        .catch((error) => {
          console.error("Delete failed:", error);
        });
    }
  };

 
  const indexOfLastSeller = currentPage * sellersPerPage;
  const indexOfFirstSeller = indexOfLastSeller - sellersPerPage;
  const currentSellers = sellers.slice(indexOfFirstSeller, indexOfLastSeller);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className='text-center'>List of Sellers</h2>
      <h3>
        <Link to='/SellerComponent'>ADD SELLER</Link>
      </h3>
      <div className='table-responsive'>
        <table class='table table-bordered border-primary  '>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentSellers.map((seller) => (
              <tr key={seller.sellerId}>
                <td>{seller.sellerFirstName}</td>
                <td>{seller.sellerLastName}</td>
                <td>{seller.sellerPhoneNo}</td>
                <td>{seller.sellerMobileNo}</td>
                <td>{seller.sellerAddres}</td>
                <td>{seller.sellerEmail}</td>
                <td>
                  <button class='btn btn-info'>
                    {" "}
                    <Link
                      to={`/ViewSellerComponent/fetchbyid/${seller.sellerId}`}>
                      View
                    </Link>
                  </button>
                  <button class='btn btn-info'>
                    {" "}
                    <Link to={`/UpdateSellerComponent/${seller.sellerId}`}>
                      Update
                    </Link>
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteSeller(seller.id)}>
                    Delete
                  </button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
        <div class='pagination'>
        <PaginationComponent
            sellersPerPage={sellersPerPage}
            totalSellers={sellers.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ListSellerComponent;
