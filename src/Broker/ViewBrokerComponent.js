import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewBrokerComponent = () => {
  const { brokerId } = useParams();
  const [broker, setBroker] = useState({});

  useEffect(() => {
    const getBroker = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/broker/fetchbyid/${brokerId}`);
        setBroker(response.data);
      } catch (error) {
        console.error("Error fetching broker data:", error);
      }
    };

    if (brokerId) {
      getBroker();
    }
  }, [brokerId]);

  return (
    <div className="container">
      <h2>Broker Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered border-primary ">
          <tbody>
            <tr>
              <td>Broker Id</td>
              <td>{broker.brokerId}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{broker.brokerFirstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{broker.brokerLastName}</td>
            </tr>
            <tr>
              <td>Phone No</td>
              <td>{broker.brokerPhoneNo}</td>
            </tr>
            <tr>
              <td>Mobile No</td>
              <td>{broker.brokerMobileNo}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{broker.brokerAddress}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{broker.brokerEmail}</td>
            </tr>
            <tr>
              <td>Commission</td>
              <td>{broker.brokerCommission}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to={"/ListBrokerComponent"} className='btn btn-info'>
      Back to List
</Link>
     
    </div>
  );
};

export default ViewBrokerComponent;
