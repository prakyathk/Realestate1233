// import { useEffect, useState } from "react"


// const List= ({deals})=>{
//   const [property,setProperty]=useState([]);
//   const[selectedProperty,setSelectedProperty]=useState(null);

//   useEffect(()=>{
//     const fetchAllData=async()=>{
//       try{
//         const propertyResponse= await axios.get('http://localhost:8081/property/fetch');
//         setProperties(propertyResponse.data);
//                      } catch (error) {
//                          console.error('Error fetching data:', error);
//                      }
//                  };
        
//                  fetchAllData();
                 
//       }, []);
//     return (
//                <div className="property-container">
//                    <h1>Property</h1>
//                    <div className="product-list">
//                        {currentRecords.map((property) => {
//                            const propertyDeals = deals ? deals.filter(deal => deal.propertyId === property.propertyId) : [];
//                            return (
//                                <div key={property.propertyId} className="product-item">
//                                    <Card>
//                                        <Card.Img
//                                            variant="top"
//                                            src={propertyDeals.length % 2 === 0 ? image_0 : image_1}
//                                            alt={`Image ${propertyDeals.length % 2 + 1}`}
//                                            className="property-image"
//                                            onClick={() => handleImageClick(property.propertyId)}
//                                        />
//                                        <Card.Body>)



  

