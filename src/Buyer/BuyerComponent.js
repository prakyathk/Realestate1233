import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updateEstateBuyer, addbuyers, fetchbuyer } from "../EstateService";
import UpdateBuyerComponent from "./UpdateBuyerComponent";
import { Form, Button, Container } from "react-bootstrap";
import "..//App.css";

const BuyerComponent = () => {
  const [buyer, setBuyer] = useState({
    buyerFirstName: " ",
    buyerLastName: " ",
    buyerPhoneNo: " ",
    buyerMobileNo: " ",
    buyerAddres: " ", 
    buyerEmail: "  ",
  });

  const navigate = useNavigate();
  const { buyersId } = useParams();

  useEffect(() => {
    if (buyersId) {
        fetchbuyer(buyersId)
        .then((response) => {
          setBuyer(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [buyersId]);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
      id: buyersId,
    });
  };

  const saveOrUpdateEstateBuyer = (e) => {
    e.preventDefault();

    const requiredFields = [
      "buyerFirstName",
      "buyerLastName",
      "buyerPhoneNo",
      "buyerMobileNo",
      "buyerAddres",
      "buyerEmail",
    ];

    if (requiredFields.some((field) => !buyer[field])) {
      alert("Please fill in all fields");
      return;
    }

    if (buyersId) {
      updateEstateBuyer(buyersId, buyer)
        .then(() => {
          console.log("Update successful:", buyer);
          navigate("/ListBuyerComponent");
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
    } else {
        addbuyers(buyer)
        .then(() => {
          console.log("Insert successful:", buyer);
          navigate("/ListBuyerComponent");
        })
        .catch((error) => {
          console.error("Insert failed:", error);
        });
    }
  };

  const deletebuyer = (buyersId) => {
    if (window.confirm("Are you sure you want to delete this buyer?")) {
        deletebuyer(buyersId)
        .then(() => {
          console.log("Buyer deleted successfully");
          fetchbuyer(); // Assuming there's a getBuyers function to refresh the buyer list
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
            <Link to="/BuyerComponent">{buyersId ? "Update Buyer" : "Add Buyer"}</Link>
          </h2>
          <div className="container2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="buyerFirstName"
                  value={buyer.buyerFirstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="buyerLastName"
                  value={buyer.buyerLastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Buyer Phone No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PhoneNo"
                  name="buyerPhoneNo"
                  value={buyer.buyerPhoneNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Buyer Mobile No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter MobileNo"
                  name="buyerMobileNo"
                  value={buyer.buyerMobileNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Buyer Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="buyerAddres"
                  value={buyer.buyerAddres}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Buyer Email :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="buyerEmail"
                  value={buyer.buyerEmail}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="success"
                onClick={(e) => {
                  saveOrUpdateEstateBuyer(e);
                }}
              ><Link to="/ListBuyerComponent">
                {buyersId ? "Update" : "Save"}
                </Link> </Button>

              {buyersId && (
                <Button
                  variant="danger"
                  onClick={() => deletebuyer(buyer.id)}
                >
                  Delete
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>

      {/* Conditional rendering of UpdateBuyerComponent */}
      {buyersId && <UpdateBuyerComponent />}
    </Container>
  );
};

export default BuyerComponent;
