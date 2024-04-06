import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const UpdateBuyerComponent = () => {
  const navigate = useNavigate();
  const { buyersId } = useParams();
  const [buyerData, setBuyerData] = useState({
    buyerId: "",
    buyerFirstName: "",
    buyerLastName: "",
    buyerPhoneNo: "",
    buyerMobileNo: "",
    buyerAddress: "",
    buyerEmail: "",
  });

  useEffect(() => {
    const getBuyer = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/buyer/fetchbyid/${buyersId}`);
        setBuyerData(response.data);
      } catch (error) {
        console.error("Error fetching buyer data:", error);
      }
    };

    if (buyersId) {
      getBuyer();
    }
  }, [buyersId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/buyer/update/${buyersId}`, buyerData);
      console.log("Buyer updated successfully");
      navigate('/ListBuyerComponent');
    } catch (error) {
      console.error("Error updating buyer:", error);
    }
  };

  return (
    <Container>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center">
            <Link to="/BuyerComponent">Update Buyer</Link>
          </h2>
          <div className="container2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Buyer Id :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Buyer Id"
                  name="buyersId"
                  value={buyerData.buyersId}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="buyerFirstName"
                  value={buyerData.buyerFirstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="buyerLastName"
                  value={buyerData.buyerLastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PhoneNo"
                  name="buyerPhoneNo"
                  value={buyerData.buyerPhoneNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter MobileNo"
                  name="buyerMobileNo"
                  value={buyerData.buyerMobileNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="buyerAddress"
                  value={buyerData.buyerAddress}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="buyerEmail"
                  value={buyerData.buyerEmail}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="success"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpdateBuyerComponent;
