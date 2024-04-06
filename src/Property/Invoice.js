

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

// const Invoice = ( ) => {
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
//         <div>
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


const Invoice = () => {
    const [dealDetails, setDealDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { propertyId } = useParams();

    useEffect(() => {
        const fetchDealDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/deals/fetchDeals/${propertyId}`);
                setDealDetails(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching deal details:', error);
            }
        };

        fetchDealDetails();
    }, [propertyId]);

    return (
        <div className="invoice-container">
            <div className="invoice-header">
                <div className="invoice-id">
                    Invoice >> ID: <span>#123-123</span>
                </div>
                <div className="actions">
                    <button className="print-button">Print</button>
                    <button className="export-button">Export</button>
                </div>
            </div>
            <div className="invoice-details">
                <div className="to-name">To: John Lorem</div>
                <div className="to-address">
                    Street, City<br />
                    State, Country<br />
                    123-456-789
                </div>
                <div className="invoice-logo">
                    <img src="https://mdbootstrap.com/img/new/icons/pdf-file-logo.png" alt="logo" />
                    MDB<br />
                    MDBootstrap.com
                </div>
            </div>
            <div className="invoice-content">
                <div className="invoice-header-content">
                    <div className="invoice-number">
                        Invoice ID: <span>#123-456</span>
                    </div>
                    <div className="creation-date">Creation Date: Jun 23, 2021</div>
                    <div className="invoice-status">Status: <span>Unpaid</span></div>
                </div>
                <div className="invoice-table-container">
                    <table className="invoice-table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Unit Price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map over dealDetails array */}
                            {dealDetails.map((deal, index) => (
                                <tr key={index}>
                                    <td>{deal.description}</td>
                                    <td>{deal.quantity}</td>
                                    <td>{deal.unitPrice}</td>
                                    <td>{deal.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="additional-notes">
                    Add additional notes and payment information<br />
                    Thank you for your purchase
                </div>
                <div className="invoice-totals">
                    SubTotal <span>$1110</span><br />
                    Tax (15%) <span>$111</span><br />
                    Total Amount <span>$1221</span><br />
                    <button className="pay-button">Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
