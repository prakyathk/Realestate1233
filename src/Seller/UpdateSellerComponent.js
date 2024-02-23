import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

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
    <div>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center">
            <Link to="/SellerComponent">Update Seller</Link>
          </h2>
          <div className="container2">
            <form>
              <div className="mb-3">
                <label className="form-label"> Seller Id :</label>
                <input
                  type="text"
                  placeholder="Seller Id"
                  name="sellerId"
                  className="form-control"
                  value={sellerData.sellerId}
                  disabled 
                />
              </div>

              <div className="mb-3">
                <label className="form-label"> First Name :</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="sellerFirstName"
                  className="form-control"
                  value={sellerData.sellerFirstName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label"> Last Name :</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="sellerLastName"
                  className="form-control"
                  value={sellerData.sellerLastName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label"> Phone No :</label>
                <input
                  type="text"
                  placeholder="Enter PhoneNo"
                  name="sellerPhoneNo"
                  className="form-control"
                  value={sellerData.sellerPhoneNo}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label"> Mobile No :</label>
                <input
                  type="text"
                  placeholder="Enter MobileNo"
                  name="sellerMobileNo"
                  className="form-control"
                  value={sellerData.sellerMobileNo}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label"> Address :</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  name="sellerAddres"
                  className="form-control"
                  value={sellerData.sellerAddres}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label"> Email :</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="sellerEmail"
                  className="form-control"
                  value={sellerData.sellerEmail}
                  onChange={handleChange}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSellerComponent;