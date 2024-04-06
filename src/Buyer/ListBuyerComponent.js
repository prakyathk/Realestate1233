import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { fetchbuyer } from "../EstateService";
import PaginationComponent from "../PaginationComponent";
import "../App.css";

const ListBuyerComponent = () => {
  const [buyers, setBuyers] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [recordsPerPage]=useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  useEffect(() => {
    fetchbuyer()
      .then((response) => {
        setBuyers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching buyers:", error);
      });
  }, []);

  const deletebuyer = (buyersId) => {
    if (window.confirm("Are you sure you want to delete this buyer?")) {
        deletebuyer(buyersId)
        .then(() => {
          console.log("Buyer deleted successfully");
          fetchbuyer().then((response) => setBuyers(response.data));
        })
        .catch((error) => {
          console.error("Delete failed:", error);
        });
    }
  };

  const currentRecords = buyers.slice(indexOfFirstRecord, indexOfLastRecord);
 
const nPages = Math.ceil(buyers.length / recordsPerPage)

  return (
    <div>
      <h2 className="text-center">List of Buyers</h2>
      <Button variant="primary" className="mb-3">
        <Link to="/BuyerComponent" style={{ color: "white", textDecoration: "none" }}>
          ADD BUYER
        </Link>
      </Button>
      <div className="table-responsive">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Buyers ID</th>
              <th>Buyers First Name</th>
              <th>Buyers Last Name</th>
              <th>Buyers Mobile No</th>
             
              <th>Buyers Email</th>
              <th>PropertyId</th>

              
            
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((buyer) => (
              <tr key={buyer.buyersId}>
                <td>{buyer.buyersId}</td>
                <td>{buyer.buyersFirstName}</td>
                <td>{buyer.buyerLastName}</td>
                <td>{buyer.buyerMobileNo}</td>
                <td>{buyer.buyerEmail}</td>
                <td>{buyer.propertyId}</td>
               
                <td>
                  <Button variant="info">
                    <Link to={`/ViewBuyerComponent/fetchbyid/${buyer.buyersId}`}>

                      View
                    </Link>
                  </Button>
                  <Button variant="info">
                    <Link to={`/UpdateBuyerComponent/${buyer.buyersId}`}>
                      Update
                    </Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deletebuyer(buyer.id)}>
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

export default ListBuyerComponent;
