// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Card, Button, Row, Col } from 'react-bootstrap';
// // import { Link } from 'react-router-dom'; // Import Link from React Router DOM

// // import './PropertyHome.css'; // Custom CSS file for additional styling
// // import image_0 from "./images/image_0.jpg"
// // import image_1 from "./images/image_1.jpg"

// // const PropertyHome = () => {
// //     const [property, setProperty] = useState([]);
// //     const [deals, setDeals] = useState([]);
// //     const imageUrl = `http://localhost:3000/images/${image_0}`;
// //     useEffect(() => {
// //         const findallproperties = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:8081/property/fetch');
// //                 setProperty(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching adds:', error);
// //             }
// //         };

// //         const fetchDeals = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:8081/deal/fetch');
// //                 setDeals(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching data from Table 2:', error);
// //             }
// //         };

// //         findallproperties();
// //         fetchDeals();
// //     }, []);

// //     const findDealForProperty = (propertyId) => {
// //         return deals.find((deal) => deal.propertyId === propertyId);
// //     };

// //     return (
// //         <div>
// //             <h1>PROPERTIES</h1>
// //             <div className="property-container">
// //                 <Row xs={1} md={3} className="g-4">
// //                     {property.map((prop, index) => (
// //                         <Col key={prop.propertyId}>
// //                             <Card>
// //                                 <Card.Img variant="top" src={index % 2 === 0 ? image_0 : image_1} alt={`Image ${index}`} />
// //                                 <Card.Body>
// //                                     <Card.Title>{prop.propertyAddress}</Card.Title>
// //                                     <Card.Text>{prop.propertyDetails}</Card.Text>
// //                                     {deals.length > 0 && (
// //                                         <Card.Text>Price: {findDealForProperty(prop.propertyId)?.propertyPrice}</Card.Text>
// //                                     )}
// //                                 <Link to={`/Property/BuyProperty/${prop.propertyId}?imageUrl=${prop.image_0}`}>
// //     <Button variant="primary">Buy</Button>
// // </Link>


// // {/* <Link to={'/enquiry'}>
// //                                     <Button variant="secondary">Enquiry</Button></Link> */}
// //                                    <Link to={`/Deals/EnquiryForm?propertyId=${prop.propertyId}`} className='btn btn-info'>
// //     Enquiry
// // </Link>

// //                                 </Card.Body>
// //                             </Card>
// //                         </Col>
// //                     ))}
// //                 </Row>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PropertyHome;

// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import EnquiryForm from './EnquiryForm'; // Import the EnquiryForm component
// import './PropertyHome.css';
// import image_0 from "./images/image_0.jpg"
// import image_1 from "./images/image_1.jpg"

// const PropertyHome = () => {
//     const [property, setProperty] = useState([]);
//     const [deals, setDeals] = useState([]);
//     const imageUrl = `http://localhost:3000/images/${image_0}`;

//     useEffect(() => {
//         const findallproperties = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8081/property/fetch');
//                 setProperty(response.data);
//             } catch (error) {
//                 console.error('Error fetching adds:', error);
//             }
//         };

//         const fetchDeals = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8081/deal/fetch');
//                 setDeals(response.data);
//             } catch (error) {
//                 console.error('Error fetching data from Table 2:', error);
//             }
//         };

//         findallproperties();
//         fetchDeals();
//     }, []);

//     const handleEnquirySubmit = (formData) => {
//         console.log('Enquiry submitted successfully:', formData);
//         // You can perform any additional actions upon successful submission
//     };

//     const findDealForProperty = (propertyId) => {
//         return deals.find((deal) => deal.propertyId === propertyId);
//     };

//     return (
//         <div>
//             <h1>PROPERTIES</h1>
//             <div className="property-container">
//                 <Row xs={1} md={3} className="g-4">
//                     {property.map((prop, index) => (
//                         <Col key={prop.propertyId}>
//                             <Card>
//                                 <Card.Img variant="top" src={index % 2 === 0 ? image_0 : image_1} alt={`Image ${index}`} />
//                                 <Card.Body>
//                                     <Card.Title>{prop.propertyAddress}</Card.Title>
//                                     <Card.Text>{prop.propertyDetails}</Card.Text>
//                                     {deals.length > 0 && (
//                                         <Card.Text>Price: {findDealForProperty(prop.propertyId)?.propertyPrice}</Card.Text>
//                                     )}
//                                     <Link to={`/Property/BuyProperty/${prop.propertyId}?imageUrl=${prop.image_0}`}>
//                                         <Button variant="primary">Buy</Button>
//                                     </Link>
//                                     <Link to={`/Deals/EnquiryForm?propertyId=${prop.propertyId}`} className='btn btn-info'>
//                                         Enquiry
//                                     </Link>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//         </div>
//     );
// };

// export default PropertyHome;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import EnquiryForm from './EnquiryForm'; // Import the EnquiryForm component
// import './PropertyHome.css';
// import image_0 from "./images/image_0.jpg"
// import image_1 from "./images/image_1.jpg"

// const PropertyHome = () => {
//     const [property, setProperty] = useState([]);
//     const [deals, setDeals] = useState([]);
//     const imageUrl = `http://localhost:3000/images/${image_0}`;
//     const { propertyId } = useParams(); // Get propertyId from URL params

//     useEffect(() => {
//         const findallproperties = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8081/property/fetch');
//                 setProperty(response.data);
//             } catch (error) {
//                 console.error('Error fetching adds:', error);
//             }
//         };

//         const fetchDeals = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8081/deal/fetch');
//                 setDeals(response.data);
//             } catch (error) {
//                 console.error('Error fetching data from Table 2:', error);
//             }
//         };
//        

//         findallproperties();
//         fetchDeals();
//     }, []);

//     const handleEnquirySubmit = (formData) => {
//         console.log('Enquiry submitted successfully:', formData);
//         // You can perform any additional actions upon successful submission
//     };

//     const findDealForProperty = (propertyId) => {
//         return deals.find((deal) => deal.propertyId === propertyId);
//     };

//     return (
//         <div>
//             <h1>PROPERTIES</h1>
//             <div className="property-container">
//                 <Row xs={1} md={3} className="g-4">
//                     {property.map((prop, index) => (
//                         <Col key={prop.propertyId}>
//                             <Card>
//                                 <Card.Img variant="top" src={index % 2 === 0 ? image_0 : image_1} alt={`Image ${index}`} />
//                                 <Card.Body>
//                                     <Card.Title>{prop.propertyAddress}</Card.Title>
//                                     <Card.Text>{prop.propertyDetails}</Card.Text>
//                                     {deals.length > 0 && (
//                                         <Card.Text>Price: {findDealForProperty(prop.propertyId)?.propertyPrice}</Card.Text>
//                                     )}
//                                     <Link to={`/Property/BuyProperty/${prop.propertyId}?imageUrl=${prop.image_0}`}>
//                                         <Button variant="primary">Buy</Button>
//                                     </Link>
//                                     {/* Pass handleEnquirySubmit function as a prop */}
//                                     <Link to={`/Deals/EnquiryForm?propertyId=${prop.propertyId}`} className='btn btn-info'>
//                                         Enquiry
//                                     </Link>
//                                     {/* <EnquiryForm onSubmit={handleEnquirySubmit} propertyId={prop.propertyId} /> */}
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//         </div>
//     );
// };

// export default PropertyHome;

// import React, { useState, useEffect } from 'react';

// const PropertyHome = () => {
//   const [propertyData, setPropertyData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch data from backend APIs for property details and image data
//     const fetchData = async () => {
//       try {
//         // Fetch property details and image data based on propertyId
//         const propertyId = 123; // Replace with the actual property ID
//         const response = await fetch(`http://localhost:8081/fileSystem/img/${propertyId}`);
//         const data = await response.json();

//         if (response.ok) {
//           setPropertyData(data);
//         } else {
//           console.error('Error fetching data:', data);
//         }

//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {propertyData && propertyData.image && (
//             <img src={propertyData.image.imageUrl} alt="Property" />
//           )}
//           <p>Details: {propertyData && propertyData.property.details}</p>
//           <p>Price: {propertyData && propertyData.property.price}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyHome;
