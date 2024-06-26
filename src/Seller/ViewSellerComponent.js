import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewSellerComponent = () => {
  const { sellerId } = useParams();
  const [seller, setSeller] = useState({});

  useEffect(() => {
    const getSeller = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/seller/fetchbyid/${sellerId}`);
        setSeller(response.data);
      } catch (error) {
        console.error("Error fetching seller data:", error);
      }
    };

    if (sellerId) {
      getSeller();
    }
  }, [sellerId]);

  return (
    <Container>
      <h2>Seller Details</h2>
      <div className="table-responsive">
        <Table bordered hover>
          <tbody>
            <tr>
              <td>Seller Id</td>
              <td>{seller.sellerId}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{seller.sellerFirstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{seller.sellerLastName}</td>
            </tr>
            <tr>
              <td>Phone No</td>
              <td>{seller.sellerPhoneNo}</td>
            </tr>
            <tr>
              <td>Mobile No</td>
              <td>{seller.sellerMobileNo}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{seller.sellerAddres}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{seller.sellerEmail}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Link to="/ListSellerComponent">
        <Button variant="primary">Back to List</Button>
      </Link>
    </Container>
  );
};

export default ViewSellerComponent;
