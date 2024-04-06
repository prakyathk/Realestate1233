import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewPropertyComponent = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/property/fetchbyid/${propertyId}`,{
        headers: {
          'Authorization': 'Basic ' + btoa('sudars:1234')  
        }
        });
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    if (propertyId) {
      getProperty();
    }
  }, [propertyId]);

  return (
    <div className="container">
      <h2>Property Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered border-primary">
          <tbody>
            <tr>
              <td>Property Id</td>
              <td>{property.propertyId}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{property.propertyAddress}</td>
            </tr>
            <tr>
              <td>Details</td>
              <td>{property.propertyDetails}</td>
            </tr>
            <tr>
              <td>Seller Id</td>
              <td>{property.sellerId}</td>
            </tr>
            <tr>
              <td>Category Type Id</td>
              <td>{property.categoryTypeId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/ListPropertyComponent">Back to List</Link>
    </div>
  );
};

export default ViewPropertyComponent;
