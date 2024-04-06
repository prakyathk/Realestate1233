import React from 'react';

const Deal = ({ deal }) => {
  const handleBuy = () => {
    // Implement the logic for handling a buy action
    console.log(`Buying property with ID ${deal.property_id}`);
  };

  const handleEnquiry = () => {
    // Implement the logic for handling an enquiry action
    console.log(`Making an enquiry for property with ID ${deal.property_id}`);
  };

  return (
    <div className="deal-card">
      <img src={deal.image_url} alt="Property" className="property-image" />
      <p>Property Price: ${deal.finalprice}</p>
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleEnquiry}>Enquiry</button>
    </div>
  );
};

export default Deal;
