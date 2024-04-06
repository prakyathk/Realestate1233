import  { useEffect, useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewBuyerComponent = () => {
  const { buyersId } = useParams();
  const [buyer, setBuyer] = useState({});

  useEffect(() => {
    const getBuyer = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/buyer/fetchbyid/${buyersId}`);
        setBuyer(response.data);
      } catch (error) {
        console.error("Error fetching buyer data:", error);
      }
    };

    if (buyersId) {
      getBuyer();
    }
  }, [buyersId]);

  return (
    <Container>
      <h2>Buyer Details</h2>
      <div className="table-responsive">
        <Table bordered hover>
          <tbody>
            <tr>
              <td>Buyer Id</td>
              <td>{buyer.buyersId}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{buyer.buyerFirstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{buyer.buyerLastName}</td>
            </tr>
            <tr>
              <td>Phone No</td>
              <td>{buyer.buyerPhoneNo}</td>
            </tr>
            <tr>
              <td>Mobile No</td>
              <td>{buyer.buyerMobileNo}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{buyer.buyerAddress}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{buyer.buyerEmail}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Link to="/ListBuyerComponent">
        <Button variant="primary">Back to List</Button>
        </Link>
    </Container>
  );
};

export default ViewBuyerComponent;
