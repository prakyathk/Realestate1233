// // PropertyCard.js
// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const getRandomImage = () => {
//   const imageBaseURL = 'https://source.unsplash.com/featured/?';
//   const topics = ['house', 'apartment', 'building', 'home', 'real-estate'];
//   const randomTopic = topics[Math.floor(Math.random() * topics.length)];
//   return `${imageBaseURL}${randomTopic}`;
// };

// const PropertyCard = ({ property, onBuyClick, onInquireClick }) => {
//   const [isBuying, setBuying] = useState(false);
//   const [isInquiring, setInquiring] = useState(false);

//   const handleBuyClick = () => {
//     setBuying(true);
//     onBuyClick(property);
//   };

//   const handleInquireClick = () => {
//     setInquiring(true);
//     onInquireClick(property);
//   };

//   return (
//     <Card className="property">
//       <Card.Img variant="top" src={getRandomImage()} alt={`Property ${property.id}`} />
//       <Card.Body>
//         <Card.Title>{property.location}</Card.Title>
//         <Card.Text>
//           <p>Type: {property.type}</p>
//           <p>Bedrooms: {property.bedrooms}</p>
//           <p>Bathrooms: {property.bathrooms}</p>
//           <p>Size: {property.size}</p>
//           <p>Year Built: {property.year_built}</p>
//           <p>Price: ${property.price}</p>
//           {isBuying && <p>Contact us to complete the purchase!</p>}
//           {isInquiring && <p>Fill out the inquiry form below:</p>}
//           {!isBuying && !isInquiring && (
//             <div className="property-buttons">
//               <Button variant="success" onClick={handleBuyClick}>Buy Property</Button>
//               <Button variant="info" onClick={handleInquireClick}>Inquire</Button>
//             </div>
//           )}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default PropertyCard;





// import React, { useState } from 'react';
// import { Card, Button, Modal } from 'react-bootstrap';
// import EnquiryForm from './EnquiryForm'; 

// const PropertyCard = ({ property, onBuyClick, onEnquireClick }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);

//   const handleBuyClick = () => {
//     onBuyClick(property.id);
//   };

//   const handleEnquireClick = (formData) => {
//     // Perform any additional logic if needed with formData
//     setShowEnquiryForm(false);
//     onEnquireClick(property.id, formData);
//   };

//   return (
//     <Card className="property-card">
//       <div
//         className="property-image-container"
//         onClick={() => setShowDetails(true)}
//       >
//         <Card.Img
//           src={property.main_picture_url}
//           alt={`Property ${property.id}`}
//           className="property-image"
//         />
//       </div>
//       <Card.Body>
//         <Card.Title>{property.location}</Card.Title>
//         <Card.Text>
//           <p>Type: {property.type}</p>
//           <p>Price: {property.price}</p>
//           <Button variant="success" onClick={handleBuyClick}>
//             Buy Property
//           </Button>
//           <Button variant="info" onClick={() => setShowEnquiryForm(true)}>
//             Enquire
//           </Button>
//         </Card.Text>
//       </Card.Body>

//       {/* Property Details Modal */}
//       <Modal show={showDetails} onHide={() => setShowDetails(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Property Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div dangerouslySetInnerHTML={{ __html: property.details }} />
//         </Modal.Body>
//       </Modal>

//       {/* Enquiry Form Modal */}
//       <Modal show={showEnquiryForm} onHide={() => setShowEnquiryForm(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Enquiry Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <EnquiryForm onSubmit={handleEnquireClick} />
//         </Modal.Body>
//       </Modal>
//     </Card>
//   );
// };

// export default PropertyCard;

// import React, { useState } from 'react';
// import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import EnquiryForm from './EnquiryForm';

// const getRandomImage = (count) => {
//   const imageBaseURL = 'https://source.unsplash.com/featured/?';
//   const topics = ['house', 'apartment', 'building', 'home', 'real-estate'];

//   const getRandomTopic = () => topics[Math.floor(Math.random() * topics.length)];

//   const imageUrls = Array.from({ length: count }, (_, index) => {
//     const randomTopic = getRandomTopic();
//     return `${imageBaseURL}${randomTopic}&${index}`;
//   });

//   return imageUrls;
// };
// const PropertyCard = ({ property, onBuyClick, onInquireClick }) => {
//   const [isBuying, setBuying] = useState(false);
//   const [isInquiring, setInquiring] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   const handleBuyClick = () => {
//     setBuying(true);
//     onBuyClick(property);
//   };

//   const handleInquireClick = () => {
//     setInquiring(true);
//     onInquireClick(property);
//   };

//   const handleImageClick = () => {
//     setShowDetails(true);
//   };

//   const handleClose = () => {
//     setShowDetails(false);
//   };

//   const randomImages = getRandomImage(30);

//   return (
//     <Card className="property">
//       <Row noGutters>
//         <Col md={4} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
//           <Card.Img src={randomImages[Math.floor(Math.random() * randomImages.length)]} alt={`Property ${property.id}`} />
//           {showDetails && (
//             <div className="overlay">
//               <Button variant="info" onClick={handleClose} className="view-property-btn">
//                 View Property
//               </Button>
//             </div>
//           )}
//         </Col>
//         <Col md={8}>
//           <Card.Body>
//             <Card.Title>{property.location}</Card.Title>
//             <Card.Text>
//               <p>Type: {property.type}</p>
//               <p>Bedrooms: {property.bedrooms}</p>
//               <p>Bathrooms: {property.bathrooms}</p>
//               <p>Size: {property.size}</p>
//               <p>Year Built: {property.year_built}</p>
//               <p>Price: ${property.price}</p>
//               {isBuying && <p>Contact us to complete the purchase!</p>}
//               {isInquiring && <p>Fill out the inquiry form below:</p>}
//               {!isBuying && !isInquiring && (
//                 <div className="property-buttons">
//                   <Button variant="success" onClick={handleBuyClick}>Buy Property</Button>
//                   <Button variant="info" ><Link to={'./EnquiryForm'}>Inquire</Link></Button>
//                 </div>
//               )}
//             </Card.Text>
//           </Card.Body>
          
//         </Col>
//       </Row>

//       <Modal show={showDetails} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Property Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Property ID: {property.id}</p>
//           <p>Seller ID: {property.sellerId}</p>
          
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Card>
//   );
// };

// export default PropertyCard;








// // import React, { useState } from 'react';
// // import { Card, Button, Row, Col } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';

// // const getRandomImage = (count) => {
// //   const imageBaseURL = 'https://source.unsplash.com/featured/?';
// //   const topics = ['house', 'apartment', 'building', 'home', 'real-estate'];

// //   const getRandomTopic = () => topics[Math.floor(Math.random() * topics.length)];

// //   const imageUrls = Array.from({ length: count }, (_, index) => {
// //     const randomTopic = getRandomTopic();
// //     return `${imageBaseURL}${randomTopic}&${index}`;
// //   });

// //   return imageUrls;
// // };

// // const PropertyCard = ({ property, onBuyClick, onInquireClick }) => {
// //   const [isBuying, setBuying] = useState(false);
// //   const [isInquiring, setInquiring] = useState(false);

// //   const handleBuyClick = () => {
// //     setBuying(true);
// //     onBuyClick(property);
// //   };

// //   const handleInquireClick = () => {
// //     setInquiring(true);
// //     onInquireClick(property);
// //   };

// //   const randomImages = getRandomImage(30);

// //   return (
// //     <Card className="property">
// //       <Row noGutters>
// //         <Col md={4}>
// //           <Card.Img src={randomImages[Math.floor(Math.random() * randomImages.length)]} alt={`Property ${property.id}`} />
// //         </Col>
// //         <Col md={8}>
// //           <Card.Body>
// //             <Card.Title>{property.location}</Card.Title>
// //             <Card.Text>
// //               <p>Type: {property.type}</p>
// //               <p>Bedrooms: {property.bedrooms}</p>
// //               <p>Bathrooms: {property.bathrooms}</p>
// //               <p>Size: {property.size}</p>
// //               <p>Year Built: {property.year_built}</p>
// //               <p>Price: ${property.price}</p>
// //               {isBuying && <p>Contact us to complete the purchase!</p>}
// //               {isInquiring && <p>Fill out the inquiry form below:</p>}
// //               {!isBuying && !isInquiring && (
// //                 <div className="property-buttons">
// //                   <Button variant="success" onClick={handleBuyClick}>Buy Property</Button>
// //                   <Button variant="info" onClick={handleInquireClick}>Inquire</Button>
// //                 </div>
// //               )}
// //             </Card.Text>
// //           </Card.Body>
// //         </Col>
// //       </Row>
// //     </Card>
// //   );
// // };

// // export default PropertyCard;


import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EnquiryForm from '../Property/EnquiryForm';

const getRandomImage = (count) => {
  const imageBaseURL = 'https://source.unsplash.com/featured/?';
  const topics = ['house', 'apartment', 'building', 'home', 'real-estate'];

  const getRandomTopic = () => topics[Math.floor(Math.random() * topics.length)];

  const imageUrls = Array.from({ length: count }, (_, index) => {
    const randomTopic = getRandomTopic();
    return `${imageBaseURL}${randomTopic}&${index}`;
  });

  return imageUrls;
};

const PropertyCard = ({ property, onBuyClick, onInquireClick }) => {
  const [isBuying, setBuying] = useState(false);
  const [isInquiring, setInquiring] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleBuyClick = () => {
    setBuying(true);
    onBuyClick(property);
  };

  const handleInquireClick = () => {
    setInquiring(true);
    onInquireClick(property);
  };

  const handleImageClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const randomImages = getRandomImage(30);

  return (
    <Card className="property">
      <Row noGutters>
        <Col md={4} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
          <Card.Img src={randomImages[Math.floor(Math.random() * randomImages.length)]} alt={`Property ${property.id}`} />
          {showDetails && (
            <div className="overlay">
              <Button variant="info" onClick={handleClose} className="view-property-btn">
                View Property
              </Button>
            </div>
          )}
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{property.location}</Card.Title>
            <Card.Text>
              <p>Type: {property.type}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Size: {property.size}</p>
              <p>Year Built: {property.year_built}</p>
              <p>Price: ${property.price}</p>
              {isBuying && <p>Contact us to complete the purchase!</p>}
              {isInquiring && <p>Fill out the inquiry form below:</p>}
              {!isBuying && !isInquiring && (
                <div className="property-buttons">
                  <Button variant="success" onClick={handleBuyClick}>Buy Property</Button>
                  <Button variant="info">  <Link to="/Deals/PropertyList/Deals/EnquiryForm">
                    Inquire
                  </Link></Button>
                </div>
              )}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      <Modal show={showDetails} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Details</Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Closee
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default PropertyCard;





