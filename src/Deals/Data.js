// import houseImage1 from "./images1.png";
// import houseImage2 from "./images2.png";
// import houseImage3 from "./images4.png";

// export { houseImage1, houseImage2, houseImage3 };
// export const data = {
//   healthcheck: {
//     message: "OK",
//   },
//   properties: [
//     {
//       condition: "good_condition",
//       type: "House",
//       location: "123 Main Street, Cityville",
//       bedrooms: 4,
//       bathrooms: 3,
//       size: "2500 sq ft",
//       lot_size: "0.25 acres",
//       year_built: 2000,
//       price: 500000,
//       has_picture: true,
//       has_stock: true,
//       id: 1,
//       main_picture_url: houseImage1,
//       details: "Beautiful 4-bedroom house with 3 bathrooms, spacious living areas, and a large backyard. Conveniently located in Cityville, close to schools and parks.",
//       status: "active",
//     },
//     {
//       condition: "badly_damaged",
//       type: "Apartment",
//       location: "456 Oak Street, Townsville",
//       bedrooms: 2,
//       bathrooms: 1,
//       size: "1200 sq ft",
//       year_built: 1980,
//       price: 250000,
//       has_picture: true,
//       has_stock: true,
//       id: 2,
//       main_picture_url: houseImage2,
//       details:  
//       "Cozy 2-bedroom apartment with 1 bathroom. Some repairs needed. Located in a quiet neighborhood in Townsville, with easy access to public transportation.",
//       status: "active",
//     },
   
//   ],
// };
// export default data;













import houseImage1 from "./images1.png";
import houseImage2 from "./images2.png";
import houseImage3 from "./images4.png";

const data = {
  healthcheck: {
    message: "OK",
  },
  properties: [
    {
      condition: "good_condition",
      type: "House",
      location: "123 Main Street, Cityville",
      bedrooms: 4,
      bathrooms: 3,
      size: "2500 sq ft",
      lot_size: "0.25 acres",
      year_built: 2000,
      price: 500000,
      has_picture: true,
      has_stock: true,
      id: 1,
      main_picture_url: houseImage1,
      details: "Beautiful 4-bedroom house with 3 bathrooms, spacious living areas, and a large backyard. Conveniently located in Cityville, close to schools and parks.",
      status: "active",
    },
    {
      condition: "badly_damaged",
      type: "Apartment",
      location: "456 Oak Street, Townsville",
      bedrooms: 2,
      bathrooms: 1,
      size: "1200 sq ft",
      year_built: 1980,
      price: 250000,
      has_picture: true,
      has_stock: true,
      id: 2,
      main_picture_url: houseImage2,
      details: "Cozy 2-bedroom apartment with 1 bathroom. Some repairs needed. Located in a quiet neighborhood in Townsville, with easy access to public transportation.",
      status: "active",
    },
  ],
};

export { houseImage1, houseImage2, houseImage3 };
export default data;
