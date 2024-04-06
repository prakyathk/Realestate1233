// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import images1 from "./images1.png"
// import images2 from "./images2.png"
// const AddsComponent = () => {
//     const [adds, setAdds] = useState([]);

//     useEffect(() => {
//         fetchAllAdds();
//     }, []);

//     const fetchAllAdds = async () => {
//         try {
//             const response = await axios.get('http://localhost:8081/adds/fetchall');
//             setAdds(response.data);
//         } catch (error) {
//             console.error('Error fetching adds:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Estate Adds</h1>
//             <div>
//                 <h2>All Adds</h2>
//                 <ul>
//                     {adds.map((add, index) => (
                        
//                         <li key={add.addId}>
//                              {index === 0 && <img src={images1} alt="Image 1" />}
//                             {index === 1 && <img src={images2} alt="Image 2" />}
//                             {index === 2 && <img src={images1} alt="Image 1" />}
//                             {index === 3 && <img src={images2} alt="Image 2" />}
//                             {index === 4 && <img src={images1} alt="Image 1" />}
//                             {index === 5 && <img src={images2} alt="Image 2" />}
//                             {index === 6 && <img src={images1} alt="Image 1" />}
//                             {index === 7 && <img src={images2} alt="Image 2" />}
//                             {index === 8 && <img src={images1} alt="Image 1" />}
//                             {index === 9 && <img src={images2} alt="Image 2" />}
//                             {index === 10 && <img src={images1} alt="Image 1" />}
//                             {index === 11 && <img src={images2} alt="Image 2" />}
//                             {index === 12 && <img src={images1} alt="Image 1" />}
//                             {index === 13 && <img src={images2} alt="Image 2" />}
//                             {index === 14 && <img src={images1} alt="Image 1" />}
//                             {index === 15 && <img src={images2} alt="Image 2" />}
//                             {index === 16 && <img src={images1} alt="Image 1" />}
//                             {index === 17 && <img src={images2} alt="Image 2" />}
//                             {index === 18 && <img src={images1} alt="Image 1" />}
//                             {index === 19 && <img src={images2} alt="Image 2" />}
//                             {index === 20 && <img src={images1} alt="Image 1" />}
//                             {index === 21 && <img src={images2} alt="Image 2" />}
//                             {index === 22 && <img src={images1} alt="Image 1" />}
//                             {index === 23 && <img src={images2} alt="Image 2" />}
    
  


 

//                             <p>{add.addTitle}</p>
//                             <p>{add.description}</p>
//                             <p>{add.address}</p>
//                             <p>{add.propertyPrice}</p>
//                            <p>{add.address}</p>
//                            <p>{add.phoneNo}</p>
                           
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default AddsComponent;
