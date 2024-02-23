// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// const ViewSellerComponent = () => {
//   const { sellerId } = useParams();
//   const [seller, setSeller] = useState({});

//   useEffect(() => {
//     const getSeller = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/seller/fetchbyid/${sellerId}`);
//         setSeller(response.data);
//       } catch (error) {
//         console.error("Error fetching seller data:", error);
//       }
//     };

//     if (sellerId) {
//       getSeller();
//     }
//   }, [sellerId]);

//   return (
//     <form className="form-inline">
//     <div class="container">
      
//       <h2>Seller Details</h2>
//       <div>
//         <label>Seller Id: {seller.sellerId}</label>
//       </div>
//       <div>
//         <label>First Name: {seller.sellerFirstName}</label>
//       </div>
//       <div>
//         <label>Last Name: {seller.sellerLastName}</label>
//       </div>
//       <div>
//         <label>Phone No: {seller.sellerPhoneNo}</label>
//       </div>
//       <div>
//         <label>Mobile No: {seller.sellerMobileNo}</label>
//       </div>
//       <div>
//         <label>Address: {seller.sellerAddres}</label>
//       </div>
//       <div>
//         <label>Email: {seller.sellerEmail}</label>
//       </div>
//       <Link to="/ListSellerComponent">Back to List</Link>
//     </div>
//     </form>
//   );
// };

// export default ViewSellerComponent;



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
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
    <div className="container">
      <h2>Seller Details</h2>
      <div className="table-responsive">
      <table className="table table-bordered border-primary ">
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
      </table>
      </div>
      <Link to="/ListSellerComponent">Back to List</Link>
    </div>
  );
};

export default ViewSellerComponent;

