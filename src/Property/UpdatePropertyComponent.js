import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const UpdatePropertyComponent = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const [propertyData, setPropertyData] = useState({
    propertyId: "",
    propertyAddress: "",
    propertyDetails: "",
    sellerId: "",
    categoryTypeId: "",
  });

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/property/fetchbyid/${propertyId}`);
        setPropertyData(response.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    if (propertyId) {
      getProperty();
    }
  }, [propertyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/property/update/${propertyId}`, propertyData);
      console.log("Property updated successfully");
      navigate('/ListPropertyComponent');
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <Container>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center">
            <Link to="/PropertyComponent">Update Property</Link>
          </h2>
          <div className="container2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Property Id :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Property Id"
                  name="propertyId"
                  value={propertyData.propertyId}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="propertyAddress"
                  value={propertyData.propertyAddress}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Details :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  name="propertyDetails"
                  value={propertyData.propertyDetails}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seller Id :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Seller Id"
                  name="sellerId"
                  value={propertyData.sellerId}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category Type Id :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category Type Id"
                  name="categoryTypeId"
                  value={propertyData.categoryTypeId}
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

export default UpdatePropertyComponent;
