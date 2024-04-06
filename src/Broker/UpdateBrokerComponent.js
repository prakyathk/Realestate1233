import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const UpdateBrokerComponent = () => {
  const navigate = useNavigate();
  const { brokerId } = useParams();
  const [brokerData, setBrokerData] = useState({
    brokerId: "",
    brokerFirstName: "",
    brokerLastName: "",
    brokerPhoneNo: "",
    brokerMobileNo: "",
    brokerAddress: "",
    brokerEmail: "",
    brokerCommission: "",
  });

  useEffect(() => {
    const getBroker = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/broker/fetchbyid/${brokerId}`);
        setBrokerData(response.data);
      } catch (error) {
        console.error("Error fetching broker data:", error);
      }
    };

    if (brokerId) {
      getBroker();
    }
  }, [brokerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrokerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/broker/update/${brokerId}`, brokerData);
      console.log("Broker updated successfully");
      navigate('/ListBrokerComponent'); 
    } catch (error) {
      console.error("Error updating broker:", error);
    }
  };

  return (
    <Container>
      <br />
      <br />
      <div className="row">
        <div className="container">
          <h2 className="text-center">
            Update Broker
          </h2>
          <div className="container2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Broker Id :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Broker Id"
                  name="brokerId"
                  value={brokerData.brokerId}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="brokerFirstName"
                  value={brokerData.brokerFirstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="brokerLastName"
                  value={brokerData.brokerLastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PhoneNo"
                  name="brokerPhoneNo"
                  value={brokerData.brokerPhoneNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile No :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter MobileNo"
                  name="brokerMobileNo"
                  value={brokerData.brokerMobileNo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="brokerAddress"
                  value={brokerData.brokerAddress}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="brokerEmail"
                  value={brokerData.brokerEmail}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Commission :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Commission"
                  name="brokerCommission"
                  value={brokerData.brokerCommission}
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

export default UpdateBrokerComponent;

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate, Link } from "react-router-dom";
// // import axios from "axios";

// // import "bootstrap/dist/css/bootstrap.min.css";

// // const UpdateBrokerComponent = () => {
// //   const navigate = useNavigate();
// //   const { brokerId } = useParams();
// //   const [brokerData, setBrokerData] = useState({
// //     brokerId: "",
// //     brokerFirstName: "",
// //     brokerLastName: "",
// //     brokerPhoneNo: "",
// //     brokerMobileNo: "",
// //     brokerAddress: "",
// //     brokerEmail: "",
// //     brokerCommission: "",
// //   });

// //   useEffect(() => {
// //     const getBroker = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8081/broker/fetchbyid/${brokerId}`);
// //         setBrokerData(response.data);
// //       } catch (error) {
// //         console.error("Error fetching broker data:", error);
// //       }
// //     };

// //     if (brokerId) {
// //       getBroker();
// //     }
// //   }, [brokerId]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setBrokerData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put(`http://localhost:8081/broker/update/${brokerId}`, brokerData);
// //       console.log("Broker updated successfully");
// //       navigate('/ListBrokerComponent'); 
// //     } catch (error) {
// //       console.error("Error updating broker:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <br />
// //       <br />
// //       <div className="row">
// //         <div className="container">
// //           <h2 className="text-center">
// //             Update Broker
// //           </h2>
// //           <div className="container2">
// //             <form>
// //               <div className="mb-3">
// //                 <label className="form-label"> Broker Id :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Broker Id"
// //                   name="brokerId"
// //                   className="form-control"
// //                   value={brokerData.brokerId}
// //                   disabled 
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> First Name :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter first name"
// //                   name="brokerFirstName"
// //                   className="form-control"
// //                   value={brokerData.brokerFirstName}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> Last Name :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter last name"
// //                   name="brokerLastName"
// //                   className="form-control"
// //                   value={brokerData.brokerLastName}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> Phone No :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter PhoneNo"
// //                   name="brokerPhoneNo"
// //                   className="form-control"
// //                   value={brokerData.brokerPhoneNo}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> Mobile No :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter MobileNo"
// //                   name="brokerMobileNo"
// //                   className="form-control"
// //                   value={brokerData.brokerMobileNo}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> Address :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter Address"
// //                   name="brokerAddress"
// //                   className="form-control"
// //                   value={brokerData.brokerAddress}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> Email :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter Email"
// //                   name="brokerEmail"
// //                   className="form-control"
// //                   value={brokerData.brokerEmail}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="mb-3">
// //                 <label className="form-label"> Commission :</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter Commission"
// //                   name="brokerCommission"
// //                   className="form-control"
// //                   value={brokerData.brokerCommission}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <button
// //                 className="btn btn-success"
// //                 onClick={(e) => {
// //                   handleSubmit(e);
// //                 }}
// //               >
// //                 Update
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UpdateBrokerComponent;






// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// import "bootstrap/dist/css/bootstrap.min.css";

// const UpdateBrokerComponent = () => {
//   const navigate = useNavigate();
//   const { brokerId } = useParams();
//   const [brokerData, setBrokerData] = useState({
//     brokerId: "",
//     brokerFirstName: "",
//     brokerLastName: "",
//     brokerPhoneNo: "",
//     brokerMobileNo: "",
//     brokerAddress: "",
//     brokerEmail: "",
//     brokerCommission: "",
//   });

//   useEffect(() => {
//     const getbroker = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/broker/fetchbyid/${brokerId}`);
//         setBrokerData(response.data);
//       } catch (error) {
//         console.error("Error fetching broker data:", error);
//       }
//     };

//     if (brokerId) {
//       getbroker();
//     }
//   }, [brokerId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBrokerData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put("http://localhost:8081/broker/update/${brokerId}", brokerData);
//       console.log("Broker updated successfully");
//       navigate('/ListBrokerComponent'); 
//     } catch (error) {
//       console.error("Error updating broker:", error);
//     }
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div className="row">
//         <div className="container">
//           <h2 className="text-center">
//             Update Broker
//           </h2>
//           <div className="container2">
//             <form>
//               <div className="mb-3">
//                 <label className="form-label"> Broker Id :</label>
//                 <input
//                   type="text"
//                   placeholder="Broker Id"
//                   name="brokerId"
//                   className="form-control"
//                   value={brokerData.brokerId}
//                   disabled 
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> First Name :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter first name"
//                   name="brokerFirstName"
//                   className="form-control"
//                   value={brokerData.brokerFirstName}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> Last Name :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter last name"
//                   name="brokerLastName"
//                   className="form-control"
//                   value={brokerData.brokerLastName}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> Phone No :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter PhoneNo"
//                   name="brokerPhoneNo"
//                   className="form-control"
//                   value={brokerData.brokerPhoneNo}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> Mobile No :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter MobileNo"
//                   name="brokerMobileNo"
//                   className="form-control"
//                   value={brokerData.brokerMobileNo}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> Address :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Address"
//                   name="brokerAddress"
//                   className="form-control"
//                   value={brokerData.brokerAddress}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> Email :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Email"
//                   name="brokerEmail"
//                   className="form-control"
//                   value={brokerData.brokerEmail}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label"> Commission :</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Commission"
//                   name="brokerCommission"
//                   className="form-control"
//                   value={brokerData.brokerCommission}
//                   onChange={handleChange}
//                 />
//               </div>

//               <button
//                 className="btn btn-success"
//                 onClick={(e) => {
//                   handleSubmit(e);
//                 }}
//               >
//                 Update
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateBrokerComponent;

