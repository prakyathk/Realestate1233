
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { findallproperties } from '../EstateService';
// import PaginationComponent from '../PaginationComponent';
// import {  Button } from "react-bootstrap";
// const ListPropertyComponent = () => {
//   const [properties, setProperties] = useState([]);
//   const [currentPage, setCurrentPage]=useState(1);
//   const [recordsPerPage]=useState(10);
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   useEffect(() => {
//     findallproperties("sudars", "1234")
//       .then((response) => {
//         setProperties(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching properties:', error);
//       });
//   }, []);

//   const deleteprop = (propertyId) => {
//     if (window.confirm('Are you sure you want to delete this property?')) {
//       deleteprop(propertyId)
//         .then(() => {
//           console.log('Property deleted successfully');
//           findallproperties().then((response) => setProperties(response.data));
//         })
//         .catch((error) => {
//           console.error('Delete failed:', error);
//         });
//     }
//   };

//   const currentRecords = properties.slice(indexOfFirstRecord, indexOfLastRecord);
 
//   const nPages = Math.ceil(properties.length / recordsPerPage)

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
//                     onClick={() => deleteprop(property.propertyId)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className='pagination'>
//         <PaginationComponent
//           nPages={nPages}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListPropertyComponent;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { findallproperties,deleteprop } from '../EstateService';
import PaginationComponent from '../PaginationComponent';
import { Button } from "react-bootstrap";
import axios from 'axios';

const ListPropertyComponent = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    fetch();
  }, [currentPage]); // Fetch properties when currentPage changes

  const fetch = async() => {
    try{
      const response= await axios.get('http://localhost:8081/property/fetch',{
        
      headers: {
        'Authorization': 'Basic ' + btoa('sudars:1234')  
      }
      });
      setProperties(response.data)
    }
    // findallproperties()
    //   .then((response) => {
    //     setProperties(response.data);
    //   })
      catch( error){
        console.log(error.response.message);
      }
  };

  const deleteProperty = (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      // Call deleteprop function from EstateService, assuming it's implemented
      deleteprop(propertyId)
        .then(() => {
          console.log('Property deleted successfully');
          // Refetch properties after deletion
          fetch();
        })
        .catch((error) => {
          console.error('Delete failed:', error);
        });
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = properties.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(properties.length / recordsPerPage);

  return (
    <div>
      <h2 className='text-center'>List of Properties</h2>
      <Button variant="primary" className="mb-3">
        <Link to="/PropertyComponent" style={{ color: "white", textDecoration: "none" }}>
          ADD PROPERTY
        </Link>
      </Button>
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
            {currentRecords.map((property) => (
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
                    onClick={() => deleteProperty(property.propertyId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pagination'>
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

export default ListPropertyComponent;
