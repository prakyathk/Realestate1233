// import React from 'react' 
// import './Home.css'

// import  { useState } from "react";

// const initialListings = [
//   // Add listings data from context
// ];

// const PropertyCard = ({ type, location, price, onSelect }) => {
//   return (
//     <div className="property-card" onClick={onSelect}>
//       <p>Type: {type}</p>
//       <p>Location: {location}</p>
//       <p>Price: {price}</p>
//     </div>
//   );
// };

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [propertyType, setPropertyType] = useState("All");
//   const [priceRange, setPriceRange] = useState("All");
//   const [filteredListings, setFilteredListings] = useState(initialListings);

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handlePropertyTypeChange = (event) => {
//     setPropertyType(event.target.value);
//   };

//   const handlePriceRangeChange = (event) => {
//     setPriceRange(event.target.value);
//   };

//   const applyFilters = () => {
//     let newListings = [...initialListings];

//     if (search) {
//       newListings = newListings.filter((listing) =>
//         listing.location.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (propertyType !== "All") {
//       newListings = newListings.filter(
//         (listing) => listing.type === propertyType
//       );
//     }

//     if (priceRange !== "All") {
//       newListings = newListings.filter(
//         (listing) => listing.price === priceRange
//       );
//     }

//     setFilteredListings(newListings);
//   };

//   return (
//     <div className="listings">
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="City / Street"
//           value={search}
//           onChange={handleSearchChange}
//         />

//         <select value={propertyType} onChange={handlePropertyTypeChange}>
//           <option value="All">Property Type</option>
//           <option value="House">House</option>
//           <option value="Apartment">Apartment</option>
//           <option value="Condo">Condo</option>
//         </select>

//         <select value={priceRange} onChange={handlePriceRangeChange}>
//           <option value="All">Price Range</option>
//           <option value="100000">$100,000 - $200,000</option>
//           <option value="200000">$200,000 - $300,000</option>
//           <option value="300000">$300,000 - $400,000</option>
//         </select>

//         <button onClick={applyFilters}>Search</button>
//       </div>

//       <div className="property-cards">
//         {filteredListings.map((listing, index) => (
//           <PropertyCard
//             key={index}
//             type={listing.type}
//             location={listing.location}
//             price={listing.price}
//             onSelect={() => {
//               // Navigate to property details page
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

//  export default Home;
import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <p>Type: {property.categoryType}</p>
      <p>Location: {property.Address}</p>
      <p>Price: ${property.propertyPrice}</p>
    </div>
  );
};

const Home = () => {
  const [search, setSearch] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [filteredProperties, setFilteredProperties] = useState([]);
  // const [properties, setProperties] = useState([]);
  // const [filteredProperties, setFilteredProperties] = useState([]);

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8081/property/details');
  //       setProperties(response.data);
  //     } catch (error) {
  //       console.error('Error fetching properties:', error);
  //     }
  //   };

  //   fetchProperties();
  // }, []);

  useEffect(() => {
    let filteredProperties = [ ];

    if (search) {
      filteredProperties = filteredProperties.filter(
        (property) =>
          property.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (propertyType !== 'All') {
      filteredProperties = filteredProperties.filter(
        (property) => property.type === propertyType
      );
    }

    if (priceRange !== 'All') {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filteredProperties = filteredProperties.filter(
        (property) => property.price >= minPrice && property.price <= maxPrice
      );
    }

    setFilteredProperties(filteredProperties);
  }, [search, propertyType, priceRange]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="listings">
      <div className="filters">
        <input
          type="text"
          placeholder="City / Street"
          value={search}
          onChange={handleSearchChange}
        />

        <select value={propertyType} onChange={handlePropertyTypeChange}>
          <option value="All">Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>

        <select value={priceRange} onChange={handlePriceRangeChange}>
          <option value="All">Price Range</option>
          <option value="100000-200000">$100,000 - $200,000</option>
          <option value="200001-300000">$200,001 - $300,000</option>
          <option value="300001-400000">$300,001 - $400,000</option>
        </select>

        <button>Search</button>
      </div>
{/* 
      <div className="property-cards">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id || property._id || Math.random().toString(36).substring(7)} property={property} />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
