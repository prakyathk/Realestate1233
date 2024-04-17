

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Invoice = ({ propertyId }) => {
//     const [dealDetails, setDealDetails] = useState(null);

//     useEffect(() => {
//         const fetchDealDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8081/deals/fetchDeals/${propertyId}`);
//                 setDealDetails(response.data);
//             } catch (error) {
//                 console.error('Error fetching deal details:', error);
//             }
//         };

//         fetchDealDetails();
//     }, [propertyId]);

//     return (
//         <div>
//             <h2>Invoice</h2>
//             {dealDetails ? (
//                 <div>
//                     <p><strong>Deal ID:</strong> {dealDetails.dealId}</p>
//                     <p><strong>Property ID:</strong> {dealDetails.propertyId}</p>
//                     <p><strong>Price:</strong> {dealDetails.propertyPrice}</p>
                    
//                 </div>
//             ) : (
//                 <p>Loading deal details...</p>
//             )}
//         </div>
//     );
// };

// export default Invoice;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Invoice = ({ propertyId }) => {
//     const [dealDetails, setDealDetails] = useState(null);

//     useEffect(() => {
//         const fetchDealDetails = async () => {
//             if (propertyId) { // Check if propertyId is defined
//                 try {
//                     const response = await axios.get(`http://localhost:8081/deals/fetchDeals/${propertyId}`);
//                     setDealDetails(response.data);
//                 } catch (error) {
//                     console.error('Error fetching deal details:', error);
//                 }
//             }
//         };
    
//         fetchDealDetails();
//     }, [propertyId]);
    

//     return (
//         <div>
//             <h2>Invoice</h2>
//             {dealDetails ? (
//                 <div>
//                     <p><strong>Deal ID:</strong> {dealDetails.dealId}</p>
//                     <p><strong>Property ID:</strong> {dealDetails.propertyId}</p>
//                     <p><strong>Seller ID:</strong> {dealDetails.sellerId}</p>
//                     <p><strong>Buyer ID:</strong> {dealDetails.buyersId}</p>
//                     <p><strong>Broker ID:</strong> {dealDetails.brokerId}</p>
//                     <p><strong>Seller Price:</strong> {dealDetails.sellerPrice}</p>
//                     <p><strong>Broker Commission:</strong> {dealDetails.brokerCommision}</p>
//                     <p><strong>Final Price:</strong> {dealDetails.finalPrice}</p>
//                     <p><strong>Date:</strong> {dealDetails.date}</p>
//                 </div>
//             ) : (
//                 <p>Loading deal details...</p>
//             )}
//         </div>
//     );
// };

// export default Invoice;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Invoice.css'; // Import the CSS file

// const Invoice = () => {
//     const [dealDetails, setDealDetails] = useState([]);
//     const [isLoading, setIsLoading] = useState(true); // Track loading state
//     const { propertyId } = useParams();
//     useEffect(() => {
//         const fetchDealDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8081/deals/fetchDeals/${propertyId}`);
//                 setDealDetails(response.data);
//                 setIsLoading(false); // Set loading state to false after fetching data
//             } catch (error) {
//                 console.error('Error fetching deal details:', error);
//             }
//         };

//         fetchDealDetails();
//     }, [propertyId]);

//     return (
//         <div className="invoice-container"> {/* Add the 'invoice-container' class */}
//             <h2>Invoice</h2>
//             {isLoading ? ( // Conditionally render loading message
//                 <p>Loading deal details...</p>
//             ) : (
//                 dealDetails.length > 0 ? (
//                     dealDetails.map((deal, index) => (
//                         <div key={index}>
//                             <p><strong>Deal ID:</strong> {deal.dealsId}</p>
//                             <p><strong>Property ID:</strong> {deal.propertyId}</p>
//                             <p><strong>Seller ID:</strong> {deal.sellerId}</p>
//                             <p><strong>Buyer ID:</strong> {deal.buyersId}</p>
//                             <p><strong>Broker ID:</strong> {deal.brokerId}</p>
//                             <p><strong>Seller Price:</strong> {deal.sellerPrice}</p>
//                             <p><strong>Broker Commission:</strong> {deal.brokerCommision}</p>
//                             <p><strong>Final Price:</strong> {deal.finalPrice}</p>
//                             <p><strong>Date:</strong> {deal.date}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No deal details available.</p>
//                 )
//             )}
//         </div>
//     );
// };

// export default Invoice;


















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Invoice.css'; // Import the CSS file

const Invoice = () => {
    const [dealDetails, setDealDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const { propertyId } = useParams();
    useEffect(() => {
        const fetchDealDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/deals/fetchDeals/${propertyId}`);
                setDealDetails(response.data);
                setIsLoading(false); // Set loading state to false after fetching data
            } catch (error) {
                console.error('Error fetching deal details:', error);
            }
        };

        fetchDealDetails();
    }, [propertyId]);

    // Retrieve buyerId from local storage
    const { buyersId } = JSON.parse(sessionStorage.getItem('user')) || {};

    return (
        <div className="invoice-container"> {/* Add the 'invoice-container' class */}
            <h2>Invoice</h2>
            {isLoading ? ( // Conditionally render loading message
                <p>Loading deal details...</p>
            ) : (
                dealDetails.length > 0 ? (
                    dealDetails.map((deal, index) => (
                        <div key={index}>
                            <p><strong>Deal ID:</strong> {deal.dealsId}</p>
                            <p><strong>Property ID:</strong> {deal.propertyId}</p>
                            <p><strong>Seller ID:</strong> {deal.sellerId}</p>
                            <p><strong>Buyer ID:</strong> {buyersId}</p> 
                            <p><strong>Broker ID:</strong> {deal.brokerId}</p>
                            <p><strong>Seller Price:</strong> {deal.sellerPrice}</p>
                            <p><strong>Broker Commission:</strong> {deal.brokerCommision}</p>
                            <p><strong>Final Price:</strong> {deal.finalPrice}</p>
                            <p><strong>Date:</strong> {deal.date}</p>
                        </div>
                    ))
                ) : (
                    <p>No deal details available.</p>
                )
            )}
        </div>
    );
};

export default Invoice;
