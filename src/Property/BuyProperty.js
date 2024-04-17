// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Invoice from './Invoice'; // Import the Invoice component

// const BuyProperty = () => {
//     const [propertyDetails, setPropertyDetails] = useState(null);
//     const [purchaseMade, setPurchaseMade] = useState(false); // State to track if purchase has been made

//     const { propertyId } = useParams();
//     const history = useNavigate();

//     useEffect(() => {
//         const fetchPropertyDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8081/property/fetching/${propertyId}`);
//                 setPropertyDetails(response.data);
//             } catch (error) {
//                 console.error('Error fetching property details:', error);
//             }
//         };

//         fetchPropertyDetails();
//     }, [propertyId]);

//     const handleBuyClick = async () => {
//         try {
//             await axios.post(`http://localhost:8081/deals/buy-property/${propertyId}`);
//             setPurchaseMade(true); // Set purchaseMade to true after successful purchase
//             history.push(`/invoice/${propertyId}`);
//         } catch (error) {
//             console.error('Error buying property:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Property Details</h2>
//             {propertyDetails ? (
//                 <div>
//                     <img src={`http://localhost:8081/image/fileSystem/${propertyDetails.imageName}`} alt="Property" />
//                     <p><strong>Address:</strong> {propertyDetails.propertyAddress}</p>
//                     <p><strong>Details:</strong> {propertyDetails.propertyDetails}</p>
//                     <p><strong>Price:</strong> {propertyDetails.propertyPrice}</p>
//                     <Button variant="primary" onClick={handleBuyClick}>Buy Now</Button>
//                 </div>
//             ) : (
//                 <p>Loading property details...</p>
//             )}

//             {purchaseMade && <Invoice propertyId={propertyId} />} {/* Render Invoice component if purchase is made */}
//         </div>
//     );
// };

// export default BuyProperty;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const BuyProperty = () => {
//     const [propertyDetails, setPropertyDetails] = useState(null);
//     const [propertyImage, setPropertyImage] = useState(null); // State to store property image URL

//     const { propertyId } = useParams();
//     const history = useNavigate();

//     useEffect(() => {
//         const fetchPropertyDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8081/property/fetching/${propertyId}`);
//                 setPropertyDetails(response.data);
//             } catch (error) {
//                 console.error('Error fetching property details:', error);
//             }
//         };

//         fetchPropertyDetails();
//     }, [propertyId]);

//     useEffect(() => {
//         const fetchImageDetails = async () => {
//             try {
//                 if (propertyDetails && propertyDetails.name) {
//                     const response = await axios.get(`http://localhost:8081/image/fileSystem/${propertyDetails.name}`);
//                     setPropertyImage(response.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching property image:', error);
//             }
//         };
    
//         fetchImageDetails();
//     }, [propertyDetails]);
    

//     // const handleBuyClick = async () => {
//     //     try {
//     //         await axios.post(`http://localhost:8081/deals/buy-property/${propertyId}`);
//     //         history(`/invoice/${propertyId}`); // Navigate to the Invoice component
//     //     } catch (error) {
//     //         console.error('Error buying property:', error);
//     //     }
//     // };
//     const handleBuyClick = async () => {
//         try {
            
//             const { buyerEmail } = JSON.parse(localStorage.getItem('loggedInUser'));
    
//             const response = await axios.get(`http://localhost:8081/buyer/getbuyerseId/${email}/id`);
//             console.log('Response:', response); // Log the response to see its structure
//             const buyerId = response.data.buyerId; // Assuming the response contains the ID
    
            
//             await axios.post(`http://localhost:8081/deals/buy-property/${propertyId}`, { buyerId });
    
            
//             history(`/invoice/${propertyId}`);
//         } catch (error) {
//             console.error('Error buying property:', error);
//         }
//     };
    
    
    
    
    
//     return (
//         <div>
//             <h2>Property Details</h2>
//             {propertyDetails ? (
//                 <div>
//                      {/* Display property image if available */}
                    
//                     <div>
//                     <img src={`http://localhost:8081/image/fileSystem/${propertyDetails.name}`} alt="Property" />
//                     </div>
//                     <p><strong>Address:</strong> {propertyDetails.propertyAddress}</p>
//                     <p><strong>Details:</strong> {propertyDetails.propertyDetails}</p>
//                     <p><strong>Price:</strong> {propertyDetails.propertyPrice}</p>
//                     <p><strong>Seller ID:</strong> {propertyDetails.sellerId}</p>
//                     <p><strong>Seller Name:</strong> {propertyDetails.sellerFirstName} {propertyDetails.sellerLastName}</p>
//                     <p><strong>Seller Phone No:</strong> {propertyDetails.sellerPhoneNo}</p>
//                     <p><strong>Seller Mobile No:</strong> {propertyDetails.sellerMobileNo}</p>
//                     <p><strong>Seller Address:</strong> {propertyDetails.sellerAddress}</p>
//                     <p><strong>Seller Email:</strong> {propertyDetails.sellerEmail}</p>
//                     <p><strong>Category Type:</strong> {propertyDetails.categoryType}</p>
//                     <p><strong>Name:</strong> {propertyDetails.name}</p>
//                     <Button variant="primary" onClick={handleBuyClick}>Buy Now</Button>
//                 </div>
//             ) : (
//                 <p>Loading property details...</p>
//             )}
//         </div>
//     );
// };

// export default BuyProperty;












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BuyProperty.css'; // Import CSS file for custom styling

const BuyProperty = () => {
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [images, setImages] = useState([]);
    const { propertyId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/property/fetching/${propertyId}`);
                setPropertyDetails(response.data);
            } catch (error) {
                console.error('Error fetching property details:', error);
            }
        };
        const fetchImages = async () => {
            try {
              const response = await axios.get(`http://localhost:8081/image/fileSystem/property/${propertyId}`);
              setImages(response.data); // Assuming response.data is an array of base64-encoded images
            } catch (error) {
              console.error('Error fetching images:', error);
            }
          };
      
          fetchImages();
        fetchPropertyDetails();
    }, [propertyId]);

    const handleBuyClick = async () => {
        try {
            const { buyersId } = JSON.parse(sessionStorage.getItem('user'));
            const response = await axios.post(`http://localhost:8081/deals/buy-property/${propertyId}`, { buyerId: buyersId });
         
            navigate(`/invoice/${propertyId}`);
        } catch (error) {
            console.error('Error buying property:', error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className="container">
            <div className="image-container">
                {images.length === 1 ? (
                    <img src={`data:image/png;base64,${images[0]}`} alt="Property" />
                ) : images.length > 1 ? (
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={`data:image/png;base64,${image}`} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>No images available</p>
                )}
            </div>
            <div className="details-container">
                <h2>Property Details</h2>
                {propertyDetails ? (
                    <div>
                        <p><strong>Address:</strong> {propertyDetails.propertyAddress}</p>
                        <p><strong>Details:</strong> {propertyDetails.propertyDetails}</p>
                        <p><strong>Price:</strong> {propertyDetails.propertyPrice}</p>
                        <p><strong>Seller ID:</strong> {propertyDetails.sellerId}</p>
                        <p><strong>Seller Name:</strong> {propertyDetails.sellerFirstName} {propertyDetails.sellerLastName}</p>
                        <p><strong>Seller Phone No:</strong> {propertyDetails.sellerPhoneNo}</p>
                        <p><strong>Seller Mobile No:</strong> {propertyDetails.sellerMobileNo}</p>
                        <p><strong>Seller Address:</strong> {propertyDetails.sellerAddress}</p>
                        <p><strong>Seller Email:</strong> {propertyDetails.sellerEmail}</p>
                        <p><strong>Category Type:</strong> {propertyDetails.categoryType}</p>
                        <p><strong>Name:</strong> {propertyDetails.name}</p>
                        <Button variant="primary" onClick={handleBuyClick}>Buy Now</Button>
                    </div>
                ) : (
                    <p>Loading property details...</p>
                )}
            </div>
        </div>
    );
};

export default BuyProperty;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './BuyProperty.css'; // Import CSS file for custom styling

// const BuyProperty = () => {
//     const [propertyDetails, setPropertyDetails] = useState(null);
//     const [images, setImages] = useState([]);
//     const { propertyId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchPropertyDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8081/property/fetching/${propertyId}`);
//                 setPropertyDetails(response.data);
//             } catch (error) {
//                 console.error('Error fetching property details:', error);
//             }
//         };
//         const fetchImages = async () => {
//             try {
//               const response = await axios.get(`http://localhost:8081/image/fileSystem/property/${propertyId}`);
//               setImages(response.data); // Assuming response.data is an array of base64-encoded images
//             } catch (error) {
//               console.error('Error fetching images:', error);
//             }
//           };
      
//           fetchImages();
//         fetchPropertyDetails();
//     }, [propertyId]);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     const handleBuyClick = async () => {
//         try {
//             const { buyersId } = JSON.parse(localStorage.getItem('user'));
//             const response = await axios.post(`http://localhost:8081/deals/buy-property/${propertyId}`, { buyerId: buyersId });
         
//             navigate(`/invoice/${propertyId}`);
//         } catch (error) {
//             console.error('Error buying property:', error);
//         }
//     };
    
//     return (
//         <div className="container">
//             <div className="image-container">
//                 {images.length > 0 && (
//                     <Slider {...settings}>
//                         {images.map((image, index) => (
//                             <div key={index}>
//                                 <img src={`data:image/png;base64,${image}`} alt={`Image ${index}`} />
//                             </div>
//                         ))}
//                     </Slider>
//                 )}
//             </div>
//             <div className="details-container">
//                 <h2>Property Details</h2>
//                 {propertyDetails ? (
//                     <div>
//                         <p><strong>Address:</strong> {propertyDetails.propertyAddress}</p>
//                         <p><strong>Details:</strong> {propertyDetails.propertyDetails}</p>
//                         <p><strong>Price:</strong> {propertyDetails.propertyPrice}</p>
//                         <p><strong>Seller ID:</strong> {propertyDetails.sellerId}</p>
//                         <p><strong>Seller Name:</strong> {propertyDetails.sellerFirstName} {propertyDetails.sellerLastName}</p>
//                         <p><strong>Seller Phone No:</strong> {propertyDetails.sellerPhoneNo}</p>
//                         <p><strong>Seller Mobile No:</strong> {propertyDetails.sellerMobileNo}</p>
//                         <p><strong>Seller Address:</strong> {propertyDetails.sellerAddress}</p>
//                         <p><strong>Seller Email:</strong> {propertyDetails.sellerEmail}</p>
//                         <p><strong>Category Type:</strong> {propertyDetails.categoryType}</p>
//                         <p><strong>Name:</strong> {propertyDetails.name}</p>
//                         <Button variant="primary" onClick={handleBuyClick}>Buy Now</Button>
//                     </div>
//                 ) : (
//                     <p>Loading property details...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BuyProperty;
