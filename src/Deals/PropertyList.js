// PropertyList.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertyCard from './PropertyCard';
import PaginationComponent from '../PaginationComponent';

const PropertyList = () => {
  const propertiesPerPage = 6; // Set the number of properties per page
  const [currentPage, setCurrentPage] = useState(1);

  const generateRandomProperties = () => {
    const numberOfProperties = 30;
    const properties = [];

    for (let i = 1; i <= numberOfProperties; i++) {
      properties.push({
        id: i,
        location: `Location ${i}`,
        type: 'House', // Replace with your logic for randomizing types
        bedrooms: Math.floor(Math.random() * 5) + 1,
        bathrooms: Math.floor(Math.random() * 3) + 1,
        size: Math.floor(Math.random() * 3000) + 500,
        year_built: Math.floor(Math.random() * (2022 - 1970 + 1)) + 1970,
        price: Math.floor(Math.random() * 500000) + 50000,
      });
    }

    return properties;
  };

  const properties = generateRandomProperties();

  const handleBuyClick = (property) => {
    // Add logic for buying property
    console.log('Buy property:', property);
  };

  const handleInquireClick = (property) => {
    // Add logic for property inquiry
    console.log('Inquire about property:', property);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <Container fluid>
      <Row>
        {currentProperties.map((property) => (
          <Col key={property.id} xs={12} sm={6} md={4} lg={3} xl={3}>
            <PropertyCard
              property={property}
              onBuyClick={handleBuyClick}
              onInquireClick={handleInquireClick}
            />
          </Col>
        ))}
      </Row>
      <PaginationComponent
        nPages={Math.ceil(properties.length / propertiesPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default PropertyList;





// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import PropertyCard from './PropertyCard';
// import  data  from './Data';

// const PropertyList = () => {
//   const handleBuyClick = (property) => {
//     // Add logic for buying property
//     console.log('Buy property:', property);
//   };

//   const handleInquireClick = (property) => {
//     // Add logic for property inquiry
//     console.log('Inquire about property:', property);
//   };

//   return (
//     <Container fluid>
//       <Row>
//         {data.properties.map((property) => (
//           <Col key={property.id} xs={12} sm={6} md={4} lg={3} xl={3}>
//             <PropertyCard
//               property={property}
//               onBuyClick={handleBuyClick}
//               onInquireClick={handleInquireClick}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default PropertyList;















// // import React, { useState } from 'react';
// // import { data } from './Data';
// // import { Card, Button, Form } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';

// // const Property = ({ property }) => {
// //   const [isBuying, setBuying] = useState(false);
// //   const [isInquiring, setInquiring] = useState(false);

// //   const handleBuyClick = () => {
// //     setBuying(true);
// //   };

// //   const handleInquireClick = () => {
// //     setInquiring(true);
// //   };

// //   return (
// //     <Card className="property">
// //       <Card.Img variant="top" src={property.main_picture_url} alt={`Property ${property.id}`} />
// //       <Card.Body>
// //         <Card.Title>{property.location}</Card.Title>
// //         <Card.Text>
// //           <p>Type: {property.type}</p>
// //           <p>Bedrooms: {property.bedrooms}</p>
// //           <p>Bathrooms: {property.bathrooms}</p>
// //           <p>Size: {property.size}</p>
// //           <p>Year Built: {property.year_built}</p>
// //           <p>Price: ${property.price}</p>
// //           {isBuying && <p>Contact us to complete the purchase!</p>}
// //           {isInquiring && <p>Fill out the inquiry form below:</p>}
         
// //           )
// //           {!isBuying && !isInquiring && (
// //             <div className="property-buttons">
// //               <Button variant="success" onClick={handleBuyClick}>Buy Property</Button>
// //               <Button variant="info" ><Link to={'/Deals/EnquiryForm'}>Inquire</Link></Button>
// //             </div>
// //           )}
// //         </Card.Text>
// //       </Card.Body>
// //     </Card>
// //   );
// // };

// // const PropertyList = () => {
// //   return (
// //     <div className="property-list">
// //       {data.properties.map((property) => (
// //         <Property key={property.id} property={property} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default PropertyList;
