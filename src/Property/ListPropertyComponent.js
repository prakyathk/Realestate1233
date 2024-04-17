



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { findallproperties,deleteprop } from '../EstateService';
// import PaginationComponent from '../PaginationComponent';
// import { Button } from "react-bootstrap";
// import axios from 'axios';

// const ListPropertyComponent = () => {
//   const [properties, setProperties] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(10);

//   useEffect(() => {
//     fetch();
//   }, [currentPage]); // Fetch properties when currentPage changes

//   const fetch = async() => {
//     try{
//       const response= await axios.get('http://localhost:8081/property/fetch',{
        
//       headers: {
//         'Authorization': 'Basic ' + btoa('sudars:1234')  
//       }
//       });
//       setProperties(response.data)
//     }
//     // findallproperties()
//     //   .then((response) => {
//     //     setProperties(response.data);
//     //   })
//       catch( error){
//         console.log(error.response.message);
//       }
//   };

//   const deleteProperty = (propertyId) => {
//     if (window.confirm('Are you sure you want to delete this property?')) {
//       // Call deleteprop function from EstateService, assuming it's implemented
//       deleteprop(propertyId)
//         .then(() => {
//           console.log('Property deleted successfully');
//           // Refetch properties after deletion
//           fetch();
//         })
//         .catch((error) => {
//           console.error('Delete failed:', error);
//         });
//     }
//   };

//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = properties.slice(indexOfFirstRecord, indexOfLastRecord);
//   const nPages = Math.ceil(properties.length / recordsPerPage);

//   return (
//     <div>
//       <h2 className='text-center'>List of Properties</h2>
//       <Button variant="primary" className="mb-3">
//         <Link to="/PropertyComponent" style={{ color: "white", textDecoration: "none" }}>
//           ADD PROPERTY
//         </Link>
//       </Button>
//       <div className='table-responsive'>
//         <table className='table table-bordered border-primary'>
//           <thead>
//             <tr>
//               <th>Property ID</th>
//               <th>Address</th>
//               <th>Details</th>
//               <th>Seller ID</th>
//               <th>Category Type ID</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentRecords.map((property) => (
//               <tr key={property.propertyId}>
//                 <td>{property.propertyId}</td>
//                 <td>{property.propertyAddress}</td>
//                 <td>{property.propertyDetails}</td>
//                 <td>{property.sellerId}</td>
//                 <td>{property.categoryTypeId}</td>
//                 <td>
//                   <button className='btn btn-info'>
//                     <Link to={`/ViewPropertyComponent/fetchbyid/${property.propertyId}`}>
//                       View
//                     </Link>
//                   </button>
//                   <button className='btn btn-info'>
//                     <Link to={`/UpdatePropertyComponent/${property.propertyId}`}>Update</Link>
//                   </button>
//                   <button
//                     className='btn btn-danger'
//                     onClick={() => deleteProperty(property.propertyId)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className='pagination'>
//           <PaginationComponent
//             nPages={nPages}
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListPropertyComponent;

import React, { useState } from 'react';
import axios from 'axios';

const ListPropertyComponent = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    address: '',
    price: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call API to add property details
      const propertyResponse = await axios.post('http://localhost:8081/property/insert-properties', propertyDetails);
      const property = propertyResponse.data;




      
      // If property added successfully, upload image
      if (property) {
        const formData = new FormData();
        formData.append('image', imageFile);

        // Call API to upload image
        await axios.post('http://localhost:8081/image/fileSystem', formData);
        
        // Handle success
        alert('Property added successfully with image!');
      }
    } catch (error) {
      // Handle error
      console.error('Error adding property:', error);
      alert('Error adding property. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={propertyDetails.address} onChange={handleChange} />
        </div>
        <div>
          <label>Details:</label>
          <input type="text" name="propertyDetails" value={propertyDetails.propertyDetails} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={propertyDetails.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default ListPropertyComponent;




