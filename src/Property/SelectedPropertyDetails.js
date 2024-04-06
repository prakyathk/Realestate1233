
import React from 'react';

const SelectedPropertyDetails = ({ selectedProperty, onClose }) => {
    return (
        <div>
            <h2>Selected Property Details</h2>
            <img src={selectedProperty.image} alt={selectedProperty.propertyAddress} />
            <p>Property ID: {selectedProperty.propertyId}</p>
            <p>Property Address: {selectedProperty.propertyAddress}</p>
            <p>Property Details: {selectedProperty.propertyDetails}</p>
            <p>Property Price: {selectedProperty.propertyPrice}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default SelectedPropertyDetails;
