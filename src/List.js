
// import React from 'react';
// import List1 from  './List1.css'
// const List = () => {
//   return (
//     <div className="invoice-container">
//       <div className="invoice-header">
//         <div className="invoice-id">
//           Invoice >> ID: <span>#123-123</span>
//         </div>
//         <div className="actions">
//           <button className="print-button">Print</button>
//           <button className="export-button">Export</button>
//         </div>
//       </div>
//       <div className="invoice-details">
//         <div className="to-name">To: John Lorem</div>
//         <div className="to-address">
//           Street, City<br />
//           State, Country<br />
//           123-456-789
//         </div>
//         <div className="invoice-logo">
//           <img src="https://mdbootstrap.com/img/new/icons/pdf-file-logo.png" alt="logo" />
//           MDB<br />
//           MDBootstrap.com
//         </div>
//       </div>
//       <div className="invoice-content">
//         <div className="invoice-header-content">
//           <div className="invoice-number">
//             Invoice ID: <span>#123-456</span>
//           </div>
//           <div className="creation-date">Creation Date: Jun 23,2021</div>
//           <div className="invoice-status">Status: <span>Unpaid</span></div>
//         </div>
//         <div className="invoice-table-container">
//           <table className="invoice-table">
//             <thead>
//               <tr>
//                 <th>Description</th>
//                 <th>Qty</th>
//                 <th>Unit Price</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Pro Package</td>
//                 <td>4</td>
//                 <td>$200</td>
//                 <td>$800</td>
//               </tr>
//               <tr>
//                 <td>Web hosting</td>
//                 <td>1</td>
//                 <td>$10</td>
//                 <td>$10</td>
//               </tr>
//               <tr>
//                 <td>Consulting (1 year)</td>
//                 <td></td>
//                 <td>$300</td>
//                 <td>$300</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="additional-notes">
//           Add additional notes and payment information<br />
//           Thank you for your purchase
//         </div>
//         <div className="invoice-totals">
//           SubTotal <span>$1110</span><br />
//           Tax (15%) <span>$111</span><br />
//           Total Amount <span>$1221</span><br />
//           <button className="pay-button">Pay Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;



// import './List1.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button } from 'react-bootstrap';
// const List = () => {
//   const [imagesData, setImagesData] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImagesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/image/fileSystem/get'); // Replace with your actual API endpoint
//         setImagesData(response.data);
//       } catch (error) {
//         console.error('Error fetching images data:', error);
//       }
//     };

//     fetchImagesData();
//   }, []);

//   const fetchAndDisplayImages = async () => {
//     const encodedImages = await Promise.all(
//       imagesData.map(async (image) => {
//         try {
//           const response = await axios.get(`http://localhost:8081/image/fileSystem/${image.name}`, {
//             responseType: 'blob', // Set response type to 'blob'
//           });
//           const blob = new Blob([response.data], { type: image.type });
//           return URL.createObjectURL(blob);
//         } catch (error) {
//           console.error('Error fetching image:', error);
//           return null;
//         }
//       })
//     );

//     return encodedImages;
//   };

//   useEffect(() => {
//     const displayImages = async () => {
//       const encodedImages = await fetchAndDisplayImages();
//       setImages(encodedImages);
//     };

//     displayImages();
//   }, [imagesData]); 

//   return (
//     <div className="list-container">
//       <h1>Property Images</h1>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Property Image ${index}`} className="list-image" />
//           <p>propertyId: {imagesData[index].propertyId}</p>
//           <Button variant="primary">Buy</Button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;









































// import './List1.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// const List = () => {
//   const [imagesData, setImagesData] = useState([]);
//   const [images, setImages] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [deals, setDeals] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   useEffect(() => {
//     const fetchImagesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/image/fileSystem/get');
//         setImagesData(response.data);
//       } catch (error) {
//         console.error('Error fetching images data:', error);
//       }
//     };

//     const findallproperties = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/property/fetch');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     const fetchDeals = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/deal/fetch');
//         setDeals(response.data);
//       } catch (error) {
//         console.error('Error fetching deals:', error);
//       }
//     };

//     fetchImagesData();
//     findallproperties();
//     fetchDeals();
//   }, []);

//   const fetchAndDisplayImages = async () => {
//     const encodedImages = await Promise.all(
//       imagesData.map(async (image) => {
//         try {
//           const response = await axios.get(`http://localhost:8081/image/fileSystem/${image.name}`, {
//             responseType: 'blob',
//           });
//           const blob = new Blob([response.data], { type: image.type });
//           return URL.createObjectURL(blob);
//         } catch (error) {
//           console.error('Error fetching image:', error);
//           return null;
//         }
//       })
//     );

//     return encodedImages;
//   };

//   useEffect(() => {
//     const displayImages = async () => {
//       const encodedImages = await fetchAndDisplayImages();
//       setImages(encodedImages);
//     };

//     displayImages();
//   }, [imagesData]);

//   const handleBuyClick = async (propertyId) => {
//     try {
//       const response = await axios.get(`http://localhost:8081/property/fetching/${propertyId}`);
//       setSelectedProperty(response.data);
//     } catch (error) {
//       console.error('Error fetching property details:', error);
//     }
//   };

//   return (
//     <div className="list-container">
//       <h1>Property Images</h1>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Property Image ${index}`} className="list-image" />
//           <div className="property-details">
//             <p>Property ID: {properties[index].propertyId}</p>
//             <p>Address: {properties[index].propertyAddress}</p>
//             <p>Price: {deals[index].propertyPrice}</p>
//             <MDBBtn color="primary" onClick={() => handleBuyClick(properties[index].propertyId)}>Buy</MDBBtn>
//             {/* <MDBBtn color="secondary">Enquiry</MDBBtn> */}



//             <Link to={`/Property/BuyProperty/${properties[index].propertyId}`}>
//               <Button variant="primary">Buy</Button>
//             </Link>
//           </div>
//         </div>
//       ))}

//       {selectedProperty && (
//         <div className="modal">
//           <h2>Property Details</h2>
//           <p>Property ID: {selectedProperty.propertyId}</p>
//           <p>Address: {selectedProperty.propertyAddress}</p>
//           <p>Details: {selectedProperty.propertyDetails}</p>
//           {/* Display additional details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;


// import './List1.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// const List = () => {
//   const [imagesData, setImagesData] = useState([]);
//   const [images, setImages] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [deals, setDeals] = useState([]);

//   useEffect(() => {
//     const fetchImagesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/image/fileSystem/get'); // Replace with your actual API endpoint
//         setImagesData(response.data);
//       } catch (error) {
//         console.error('Error fetching images data:', error);
//       }
//     };

//     const findallproperties = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/property/fetch');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     const fetchDeals = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/deal/fetch');
//         setDeals(response.data);
//       } catch (error) {
//         console.error('Error fetching deals:', error);
//       }
//     };

//     fetchImagesData();
//     findallproperties();
//     fetchDeals();
//   }, []);

//   const fetchAndDisplayImages = async () => {
//     const encodedImages = await Promise.all(
//       imagesData.map(async (image) => {
//         try {
//           const response = await axios.get(`http://localhost:8081/image/fileSystem/${image.name}`, {
//             responseType: 'blob', // Set response type to 'blob'
//           });
//           const blob = new Blob([response.data], { type: image.type });
//           return URL.createObjectURL(blob);
//         } catch (error) {
//           console.error('Error fetching image:', error);
//           return null;
//         }
//       })
//     );

//     return encodedImages;
//   };

//   useEffect(() => {
//     const displayImages = async () => {
//       const encodedImages = await fetchAndDisplayImages();
//       setImages(encodedImages);
//     };

//     displayImages();
//   }, [imagesData]); 

//   return (
//     <div className="list-container">
//       <h1>Property Images</h1>
//       {images.map((image, index) => (
//         <div className="property-details">
//         <div key={index}>
          
//           <img src={image} alt={`Property Image ${index}`} className="list-image" />
          
//             <p>Property ID: {properties[index].propertyId}</p>
//             <p>Address: {properties[index].propertyAddress}</p>
//             <p>Price: {deals[index].propertyPrice}</p>
//             <Link to={`/Property/BuyProperty/${properties[index].propertyId}`}>
//                <Button variant="primary">Buy</Button>
//              </Link>
//   <MDBBtn color="secondary">Enquiry</MDBBtn>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;



// import './List1.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// const List = () => {
//   const [imagesData, setImagesData] = useState([]);
//   const [images, setImages] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [deals, setDeals] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchImagesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/image/fileSystem/get');
//         setImagesData(response.data);
//       } catch (error) {
//         console.error('Error fetching images data:', error);
//       }
//     };

//     const findallproperties = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/property/fetch');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     const fetchDeals = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/deal/fetch');
//         setDeals(response.data);
//       } catch (error) {
//         console.error('Error fetching deals:', error);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/propertycategory/fetchall');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchImagesData();
//     findallproperties();
//     fetchDeals();
//     fetchCategories();
//   }, []);

//   const fetchAndDisplayImages = async () => {
//     const encodedImages = await Promise.all(
//       imagesData.map(async (image) => {
//         try {
//           const response = await axios.get(`http://localhost:8081/image/fileSystem/${image.name}`, {
//             responseType: 'blob',
//           });
//           const blob = new Blob([response.data], { type: image.type });
//           return URL.createObjectURL(blob);
//         } catch (error) {
//           console.error('Error fetching image:', error);
//           return null;
//         }
//       })
//     );

//     return encodedImages;
//   };

//   useEffect(() => {
//     const displayImages = async () => {
//       const encodedImages = await fetchAndDisplayImages();
//       setImages(encodedImages);
//     };

//     displayImages();
//   }, [imagesData]);

//   return (
//     <div className="list-container">
//       <h1>Property Images</h1>
//       {images.map((image, index) => (
//         <div className="property-details" key={index}>
//           <img src={image} alt={`Property Image ${index}`} className="list-image" />
//           <p>Property ID: {properties[index].propertyId}</p>
//           <p>Address: {properties[index].propertyAddress}</p>
//           <p>Price: {deals[index].propertyPrice}</p>
//           {/* Find the corresponding category type */}
//           {categories.find((category) => category.categoryTypeId === properties[index].categoryTypeId) && (
//             <p>Category: {categories.find((category) => category.categoryTypeId === properties[index].categoryTypeId).categoryType}</p>
//           )}
//           <Link to={`/Property/BuyProperty/${properties[index].propertyId}`}>
//             <Button variant="primary">Buy</Button>
//           </Link>
//           <MDBBtn color="secondary">Enquiry</MDBBtn>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;















// import './List1.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// const List = () => {
//   const [imagesData, setImagesData] = useState([]);
//   const [images, setImages] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [deals, setDeals] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchImagesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/image/fileSystem/get');
//         setImagesData(response.data);
//       } catch (error) {
//         console.error('Error fetching images data:', error);
//       }
//     };

//     const findallproperties = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/property/fetch');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     const fetchDeals = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/deal/fetch');
//         setDeals(response.data);
//       } catch (error) {
//         console.error('Error fetching deals:', error);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/propertycategory/fetchall');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchImagesData();
//     findallproperties();
//     fetchDeals();
//     fetchCategories();
//   }, []);

//   const fetchAndDisplayImages = async () => {
//     const encodedImages = await Promise.all(
//       imagesData.map(async (image) => {
//         try {
//           const response = await axios.get(`http://localhost:8081/image/fileSystem/${image.name}`, {
//             responseType: 'blob',
//           });
//           const blob = new Blob([response.data], { type: image.type });
//           return URL.createObjectURL(blob);
//         } catch (error) {
//           console.error('Error fetching image:', error);
//           return null;
//         }
//       })
//     );

//     return encodedImages;
//   };

//   useEffect(() => {
//     const displayImages = async () => {
//       const encodedImages = await fetchAndDisplayImages();
//       setImages(encodedImages);
//     };

//     displayImages();
//   }, [imagesData]);

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredProperties = properties.filter((property) =>
//     property.propertyAddress.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="list-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by address"
//           value={search}
//           onChange={handleSearchChange}
//         />
//       </div>
//       <h1>Property Images</h1>
//       {filteredProperties.map((property, index) => (
//         <div className="property-details" key={index}>
//           <img src={images[index]} alt={`Property Image ${index}`} className="list-image" />
//           <p>Property ID: {property.propertyId}</p>
//           <p>Address: {property.propertyAddress}</p>
//           <p>Price: {deals[index]?.propertyPrice}</p>
//           {/* Find the corresponding category type */}
//           {categories.find((category) => category.categoryTypeId === property.categoryTypeId) && (
//             <p>Category: {categories.find((category) => category.categoryTypeId === property.categoryTypeId).categoryType}</p>
//           )}
//           <Link to={`/Property/BuyProperty/${property.propertyId}`}>
//             <Button variant="primary">Buy</Button>
//           </Link>
//           <MDBBtn color="secondary">Enquiry</MDBBtn>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;




import './List1.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const List = () => {
  const [imagesData, setImagesData] = useState([]);
  const [images, setImages] = useState([]);
  const [properties, setProperties] = useState([]);
  const [deals, setDeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imagesResponse, propertiesResponse, dealsResponse, categoriesResponse] = await Promise.all([
          axios.get('http://localhost:8081/image/fileSystem/get'),
          axios.get('http://localhost:8081/property/fetch'),
          axios.get('http://localhost:8081/deal/fetch'),
          axios.get('http://localhost:8081/propertycategory/fetchall')
        ]);

        setImagesData(imagesResponse.data);
        setProperties(propertiesResponse.data);
        setDeals(dealsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchAndDisplayImages = async () => {
    try {
      const encodedImages = await Promise.all(
        imagesData.map(async (image) => {
          const response = await axios.get(`http://localhost:8081/image/fileSystem/${image.name}`, {
            responseType: 'blob',
          });
          const blob = new Blob([response.data], { type: image.type });
          return URL.createObjectURL(blob);
        })
      );

      return encodedImages;
    } catch (error) {
      console.error('Error fetching and displaying images:', error);
      return [];
    }
  };

  useEffect(() => {
    const displayImages = async () => {
      const encodedImages = await fetchAndDisplayImages();
      setImages(encodedImages);
    };

    displayImages();
  }, [imagesData]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredProperties = properties.filter((property) =>
    property.propertyAddress?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by address"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <h1>Property Images</h1>
      {filteredProperties.map((property, index) => (
        <div className="property-details" key={index}>
          <img src={images[index]} alt={`Property Image ${index}`} className="list-image" />
          <p>Property ID: {property.propertyId}</p>
          <p>Address: {property.propertyAddress}</p>
          <p>Price: {deals[index]?.propertyPrice}</p>
          
          {categories.find((category) => category.categoryTypeId === property.categoryTypeId) && (
            <p>Category: {categories.find((category) => category.categoryTypeId === property.categoryTypeId).categoryType}</p>
          )}
          <Link to={`/Property/BuyProperty/${property.propertyId}`}>
            <Button variant="primary">Buy</Button>
          </Link>
          <MDBBtn color="secondary">Enquiry</MDBBtn>
        </div>
      ))}
    </div>
  );
};

export default List;
