// ListPropertyComponent.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { findallproperties, deleteProperty } from '../EstateService';
import PaginationComponent from '../PaginationComponent';

const ListPropertyComponent = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(10);

  useEffect(() => {
    findallproperties()
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const deletePropertyItem = (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteProperty(propertyId)
        .then(() => {
          console.log('Property deleted successfully');
          findallproperties().then((response) => setProperties(response.data));
        })
        .catch((error) => {
          console.error('Delete failed:', error);
        });
    }
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className='text-center'>List of Properties</h2>
      <div className='table-responsive'>
        <table className='table table-bordered border-primary'>
          <thead>
            <tr>
              <th>Property ID</th>
              <th>Address</th>
              <th>Details</th>
              <th>Seller ID</th>
              <th>Category Type ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProperties.map((property) => (
              <tr key={property.propertyId}>
                <td>{property.propertyId}</td>
                <td>{property.propertyAddress}</td>
                <td>{property.propertyDetails}</td>
                <td>{property.sellerId}</td>
                <td>{property.categoryTypeId}</td>
                <td>
                  <button className='btn btn-info'>
                    <Link to={`/ViewPropertyComponent/fetchbyid/${property.propertyId}`}>
                      View
                    </Link>
                  </button>
                  <button className='btn btn-info'>
                    <Link to={`/UpdatePropertyComponent/${property.propertyId}`}>Update</Link>
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deletePropertyItem(property.propertyId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pagination'>
          <PaginationComponent
            propertiesPerPage={propertiesPerPage}
            totalProperties={properties.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ListPropertyComponent;
