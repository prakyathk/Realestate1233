import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const UpdateSellerComponent = () => {
  const navigate = useNavigate();
  const { sellerId } = useParams();
  const [sellerData, setSellerData] = useState({
    sellerId: "",
    sellerFirstName: "",
    sellerLastName: "",
    sellerPhoneNo: "",
    sellerMobileNo: "",
    sellerAddres: "",
    sellerEmail: "",
  });

  useEffect(() => {
    const getSeller = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/seller/fetchbyid/${sellerId}`);
        setSellerData(response.data);
      } catch (error) {
        console.error("Error fetching seller data:", error);
      }
    };

    if (sellerId) {
      getSeller();
    }
  }, [sellerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/seller/update/${sellerId}`, sellerData);
      console.log("Seller updated successfully");
      navigate('/ListSellerComponent');
    } catch (error) {
      console.error("Error updating seller:", error);
    }
  };

  return (
    <Container>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center">
            Update Sellers
          </h2>
          <div className="container2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Seller Id :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Seller Id"
                  name="sellerId"
                  value={sellerData.sellerId}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="sellerFirstName"
                  value={sellerData.sellerFirstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="sellerLastName"
                  value={sellerData.sellerLastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PhoneNo"
                  name="sellerPhoneNo"
                  value={sellerData.sellerPhoneNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter MobileNo"
                  name="sellerMobileNo"
                  value={sellerData.sellerMobileNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="sellerAddres"
                  value={sellerData.sellerAddres}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="sellerEmail"
                  value={sellerData.sellerEmail}
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

export default UpdateSellerComponent;
