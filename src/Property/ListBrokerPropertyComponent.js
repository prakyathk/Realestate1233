import React, { useState, useEffect } from 'react';

import { fetchall, generateRandomBrokerProperty } from '../EstateService'; 
import PaginationComponent from '../PaginationComponent';
import { Button } from 'react-bootstrap';

const ListBrokerPropertyComponent = () => {
  const [brokerProperties, setBrokerProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const fetchAllBrokerProperties = () => {
    fetchall()
      .then((response) => {
        setBrokerProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching broker properties:', error);
      });
  };

  const handleRefreshClick = () => {
    generateRandomBrokerProperty()
      .then((response) => {
        console.log('Random broker properties generated successfully:', response.data);
       
        fetchAllBrokerProperties();
      })
      .catch((error) => {
        console.error('Error generating random broker properties:', error);
      });
  };

  useEffect(() => {
    // Fetch all broker properties on component mount
    fetchAllBrokerProperties();
  }, []);

  const currentRecords = brokerProperties.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(brokerProperties.length / recordsPerPage);

  return (
    <div>
      <Button onClick={handleRefreshClick}>Refresh</Button>
      <h2 className='text-center'>List of Broker Properties</h2>
      <div className='table-responsive'>
        <table className='table table-bordered border-primary'>
          <thead>
            <tr>
              <th>Broker Property ID</th>
              <th>Property ID</th>
              <th>Broker ID</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((brokerProperty) => (
              <tr key={brokerProperty.brokersPropertyId}>
                <td>{brokerProperty.brokersPropertyId}</td>
                <td>{brokerProperty.propertyId}</td>
                <td>{brokerProperty.brokerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pagination'>
          <PaginationComponent nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};

export default ListBrokerPropertyComponent;
