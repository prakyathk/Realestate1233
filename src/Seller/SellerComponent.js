import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import { updateEstateSeller, insertseller, findallseller, getSeller, deleteseller } from "../EstateService";
import UpdateSellerComponent from "./UpdateSellerComponent";
import '..//App.css'
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
          findallseller().then((response) => setSeller(response.data));
        })
        .catch((error) => {
          console.error("Delete failed:", error);
        });
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center"><Link to='/SellerComponent'>{sellerId ? "Update Seller" : "Add Seller"}</Link></h2>
          <div className="container2">
            <form>
              <label className='form-label'> First Name :</label>
              <input
                type='text'
                placeholder='Enter first name'
                name='sellerFirstName'
                className='form-control'
                value={seller.sellerFirstName}
                onChange={handleChange}
              />

              <label className='form-label'> Last Name :</label>
              <input
                type='text'
                placeholder='Enter last name'
                name='sellerLastName'
                className='form-control'
                value={seller.sellerLastName}
                onChange={handleChange}
              />

              <label className='form-label'> Seller Phone No :</label>
              <input
                type='text'
                placeholder='Enter PhoneNo'
                name='sellerPhoneNo'
                className='form-control'
                value={seller.sellerPhoneNo}
                onChange={handleChange}
              />

              <label className='form-label'> Seller Mobile No :</label>
              <input
                type='text'
                placeholder='Enter MobileNo'
                name='sellerMobileNo'
                className='form-control'
                value={seller.sellerMobileNo}
                onChange={handleChange}
              />

              <label className='form-label'> Seller Address :</label>
              <input
                type='text'
                placeholder='Enter Address'
                name='sellerAddres'
                className='form-control'
                value={seller.sellerAddres}
                onChange={handleChange}
              />

              <label className='form-label'> Seller Email :</label>
              <input
                type='text'
                placeholder='Enter Email'
                name='sellerEmail'
                className='form-control'
                value={seller.sellerEmail}
                onChange={handleChange}
              />

<button
                className="btn btn-success"
                onClick={(e) => {
                  saveOrUpdateEstateSeller(e);
                  navigate("/ListSellerComponent");
                }}
              >
                {sellerId ? "Update" : "Save"}
              </button>

              {sellerId && (
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSeller(seller.id)}
                >
                  Delete
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Conditional rendering of UpdateSellerComponent */}
      {sellerId && <UpdateSellerComponent />}
    </div>
  );
};

export default SellerComponent;