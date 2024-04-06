import React, { useState, useEffect } from 'react';
import Deal from './Deal';

const DealList = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Fetch deals data from your API or service
    // Replace the URL with your actual backend endpoint
    fetch('http://localhost:8081/deals/fetch')
      .then((response) => response.json())
      .then((data) => setDeals(data))
      .catch((error) => console.error('Error fetching deals:', error));
  }, []);

  return (
    <div className="deal-list-container">
      <h2>Real Estate Deals</h2>
      {deals.map((deal) => (
        <Deal key={deal.deals_id} deal={deal} />
      ))}
    </div>
  );
};

export default DealList;
