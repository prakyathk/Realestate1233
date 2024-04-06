import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { findallbroker, deletebroker } from "../EstateService";
import { Table, Button } from "react-bootstrap";
import PaginationComponent from "../PaginationComponent";
import axios from '../axiosInstance';

const ListBrokerComponent = () => {
  const { brokerId } = useParams();
  const [brokers, setBrokers] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [recordsPerPage]=useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
 



  useEffect(() => {
    findallbroker()
    .then((response) => {
      const sortedBrokers = response.data.sort((a, b) => b.id - a.id);
      setBrokers(sortedBrokers);
    })
    .catch((error) => {
      console.error("Error fetching brokers:", error);
    });
}, []); 

  const deleteBroker = (brokerId) => {
    if (window.confirm("Are you sure you want to delete this broker?")) {
      deletebroker(brokerId)
        .then(() => {
          console.log("Broker deleted successfully");
          findallbroker().then((response) => setBrokers(response.data));
        })
        .catch((error) => {
          console.error("Delete failed:", error);
        });
    }
  };

   
  const currentRecords = brokers.slice(indexOfFirstRecord, indexOfLastRecord);
 
const nPages = Math.ceil(brokers.length / recordsPerPage)

  return (
    <div>
      <h2 className="text-center">List of Brokers</h2>
      <Link to={"/BrokerComponent"} className='btn btn-info'>
      ADD BROKER
</Link>

       
      <div className="table-responsive">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Broker Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Email</th>
              <th>Commission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((broker) => (
              <tr key={broker.brokerId}>
                <td>{broker.brokerId}</td>
                <td>{broker.brokerFirstName}</td>
                <td>{broker.brokerLastName}</td>
                <td>{broker.brokerPhoneNo}</td>
                <td>{broker.brokerMobileNo}</td>
                <td>{broker.brokerAddress}</td>
                <td>{broker.brokerEmail}</td>
                <td>{broker.brokerCommission}</td>
                <td>
                  
                  <Link to={"/ViewBrokerComponent/fetchbyid/${broker.brokerId}"} className='btn btn-info'>
                  View
</Link>
                 
                   <Link to={"/UpdateBrokerComponent/${broker.brokerId}"} className='btn btn-info'>
                   Update
</Link> 
                  <Button
                    variant="danger"
                    onClick={() => deleteBroker(broker.brokerId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="pagination">
        <PaginationComponent
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </div>
      </div>
    </div>
  );
};

export default ListBrokerComponent;
