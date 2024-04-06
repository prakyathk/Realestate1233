import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { findallseller, deleteseller } from "../EstateService";
import PaginationComponent from "../PaginationComponent";
import "../App.css";

const ListSellerComponent = () => {
  const [sellers, setSellers] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [recordsPerPage]=useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
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

  const currentRecords = sellers.slice(indexOfFirstRecord, indexOfLastRecord);
 
  const nPages = Math.ceil(sellers.length / recordsPerPage)

  return (
    <div>
      <h2 className="text-center">List of Sellers</h2>
      <Button variant="primary" className="mb-3">
        <Link to="/SellerComponent" style={{ color: "white", textDecoration: "none" }}>
          ADD PROPERTY
        </Link>
      </Button>
      <div className="table-responsive">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Seller Id</th>
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
            {currentRecords.map((seller) => (
              <tr key={seller.sellerId}>
                <td>{seller.sellerId}</td>
                <td>{seller.sellerFirstName}</td>
                <td>{seller.sellerLastName}</td>
                <td>{seller.sellerPhoneNo}</td>
                <td>{seller.sellerMobileNo}</td>
                <td>{seller.sellerAddres}</td>
                <td>{seller.sellerEmail}</td>
                <td>
                  <Button variant="info">
                    <Link to={`/ViewSellerComponent/fetchbyid/${seller.sellerId}`}>
                      View
                    </Link>
                  </Button>
                  <Button variant="info">
                    <Link to={`/UpdateSellerComponent/${seller.sellerId}`}>
                      Update
                    </Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteSeller(seller.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="pagination">
        <PaginationComponent
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </div>
      </div>
    </div>
  );
};

export default ListSellerComponent;
