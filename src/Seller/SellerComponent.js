import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updateEstateSeller, insertseller, getSeller, deleteseller } from "../EstateService";
import UpdateSellerComponent from "./UpdateSellerComponent";
import { Form, Button, Container } from "react-bootstrap";
import "..//App.css";

const SellerComponent = () => {
  const [seller, setSeller] = useState({
    sellerFirstName: "",
    sellerLastName: "",
    sellerPhoneNo: "",
    sellerMobileNo: "",
    sellerAddres: "",
    sellerEmail: "",
  });

  const navigate = useNavigate();
  const { sellerId } = useParams();

  useEffect(() => {
    if (sellerId) {
      getSeller(sellerId)
        .then((response) => {
          setSeller(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [sellerId]);

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
      id: sellerId,
    });
  };

  const saveOrUpdateEstateSeller = (e) => {
    e.preventDefault();

    const requiredFields = [
      "sellerFirstName",
      "sellerLastName",
      "sellerPhoneNo",
      "sellerMobileNo",
      "sellerAddres",
      "sellerEmail",
    ];

    if (requiredFields.some((field) => !seller[field])) {
      alert("Please fill in all fields");
      return;
    }

    if (sellerId) {
      updateEstateSeller(sellerId, seller)
        .then(() => {
          console.log("Update successful:", seller);
          navigate("/ListSellerComponent");
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
    } else {
      insertseller(seller)
        .then(() => {
          console.log("Insert successful:", seller);
          navigate("/ListSellerComponent");
        })
        .catch((error) => {
          console.error("Insert failed:", error);
        });
    }
  };

  const deleteSeller = (sellerId) => {
    if (window.confirm("Are you sure you want to delete this seller?")) {
      deleteseller(sellerId)
        .then(() => {
          console.log("Seller deleted successfully");
          getSeller(); // Assuming there's a getSellers function to refresh the seller list
        })
        .catch((error) => {
          console.error("Delete failed:", error);
        });
    }
  };

  return (
    <Container>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center">
            <Link to="/SellerComponent">{sellerId ? "Update Seller" : "Add Seller"}</Link>
          </h2>
          <div className="container2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="sellerFirstName"
                  value={seller.sellerFirstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="sellerLastName"
                  value={seller.sellerLastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seller Phone No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PhoneNo"
                  name="sellerPhoneNo"
                  value={seller.sellerPhoneNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seller Mobile No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter MobileNo"
                  name="sellerMobileNo"
                  value={seller.sellerMobileNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seller Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="sellerAddres"
                  value={seller.sellerAddres}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seller Email :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="sellerEmail"
                  value={seller.sellerEmail}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="success"
                onClick={(e) => {
                  saveOrUpdateEstateSeller(e);
                }}
              >
                {sellerId ? "Update" : "Save"}
              </Button>

              {sellerId && (
                <Button
                  variant="danger"
                  onClick={() => deleteSeller(seller.id)}
                >
                  Delete
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>

      {/* Conditional rendering of UpdateSellerComponent */}
      {sellerId && <UpdateSellerComponent />}
    </Container>
  );
};

export default SellerComponent;
