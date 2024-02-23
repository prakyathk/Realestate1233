/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addEstateprop } from "../EstateService";
const PropertyComponent = () => {
  const [property, setProperty] = useState({
    propertyAddress: " ",
    propertyDetails: " ",
    sellerId: " ",
    categoryTypeId: " ",
  });
  const navigate = useNavigate();
  const { propertyId } = useParams();
  useEffect(() => {
    const findbyproperty = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/property/fetchbyid/${propertyId}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching seller data:", error);
      }
    };

    if (propertyId) {
        findbyproperty();
    }
  }, [propertyId]);

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
      id: propertyId,
    });
  };

  const saveorUpdateEstateProperty = (e) => {
    e.preventDefault();
    const requiredFields = [
      "propertyAddress",
      "propertyDetails",
      "sellerId",
      "categoryTypeId",
    ];
    if (requiredFields.some((field) => !property[field])) {
      alert("please fill all the feilds");
      return;
    }
    if (propertyId) {
      saveorUpdateEstateProperty(propertyId, property)
        .then(() => {
          console.log("update succussful:", property);
          navigate("/estate-properties");
        })
        .catch((error) => {
          console.error("update failed:", error);
        });
    } else {
      addEstateprop(property)
        .then(() => {
          console.log("added succusfully:", property);
          navigate("/estate-properties");
        })
        .catch((error) => {
          console.error("Insert failed:", error);
        });
    }
  };

  return (
    <div>
      <div>
        <h2>PropertyComponent</h2>
        <div>
          <form>
            <label className='form-label'>Property Address:</label>
            <input
              type='text'
              placeholder='Enter property address'
              name='propertyAddress'
              className='form-control'
              value={property.propertyAddress}
              onChange={handleChange}
            />

            <label className='form-label'>Property Details:</label>
            <input
              type='text'
              placeholder='Enter property details'
              name='propertyDetails'
              className='form-control'
              value={property.propertyDetails}
              onChange={handleChange}
            />

            <label className='form-label'>Seller ID:</label>
            <input
              type='text'
              placeholder='Enter seller ID'
              name='sellerId'
              className='form-control'
              value={property.sellerId}
              onChange={handleChange}
            />

            <label className='form-label'>Category Type ID:</label>
            <input
              type='text'
              placeholder='Enter category type ID'
              name='categoryTypeId'
              className='form-control'
              value={property.categoryTypeId}
              onChange={handleChange}
            />
            <button
              className='btn btn-success'
              onClick={(e) => {
                saveorUpdateEstateProperty(e);
                navigate("/estte-properties");
              }}>
              {propertyId ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyComponent;
