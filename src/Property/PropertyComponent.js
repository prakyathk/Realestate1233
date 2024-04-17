import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PropertyComponent = () => {
  const [property, setProperty] = useState({
    propertyAddress: "",
    propertyDetails: "",
    sellerId: "",
    categoryTypeId: "",
    propertyImage: null, // Added propertyImage state
  });

  const navigate = useNavigate();
  const { propertyId } = useParams();

  useEffect(() => {
    if (propertyId) {
      fetchPropertyById();
    }
  }, [propertyId]);

  const fetchPropertyById = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/property/fetchbyid/${propertyId}`);
      setProperty(response.data);
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "propertyImage") {
      setProperty({
        ...property,
        [e.target.name]: e.target.files[0], // Use files array for file input
      });
    } else {
      setProperty({
        ...property,
        [e.target.name]: e.target.value,
      });
    }
  };

  const saveOrUpdateProperty = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(); // Create FormData object
      // Append property details to FormData
      formData.append("propertyAddress", property.propertyAddress);
      formData.append("propertyDetails", property.propertyDetails);
      formData.append("sellerId", property.sellerId);
      formData.append("categoryTypeId", property.categoryTypeId);
      // Append property image to FormData
      formData.append("propertyImage", property.propertyImage);

      if (propertyId) {
        await axios.put(`http://localhost:8081/property/update/${propertyId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type to multipart/form-data for file upload
          },
        });
        console.log("Update successful:", property);
      } else {
        await axios.post("http://localhost:8081/property/insert", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type to multipart/form-data for file upload
          },
        });
        console.log("Added successfully:", property);
      }
      navigate("/ListPropertyComponent");
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div>
      <h2>Property Component</h2>
      <div>
        <form>
          <label className='form-label'>Property Address:</label>
          <input
            type='text'
            placeholder='Enter property address'
            name='propertyAddress'
            className='form-control'
            value={property.propertyAddress}
            onChange={handleChange}
          />

          <label className='form-label'>Property Details:</label>
          <input
            type='text'
            placeholder='Enter property details'
            name='propertyDetails'
            className='form-control'
            value={property.propertyDetails}
            onChange={handleChange}
          />

          <label className='form-label'>Seller ID:</label>
          <input
            type='text'
            placeholder='Enter seller ID'
            name='sellerId'
            className='form-control'
            value={property.sellerId}
            onChange={handleChange}
          />

          <label className='form-label'>Category Type ID:</label>
          <input
            type='text'
            placeholder='Enter category type ID'
            name='categoryTypeId'
            className='form-control'
            value={property.categoryTypeId}
            onChange={handleChange}
          />

          <label className='form-label'>Property Image:</label>
          <input
            type='file'
            name='propertyImage'
            className='form-control'
            onChange={handleChange}
          />

          <button className='btn btn-success' onClick={saveOrUpdateProperty}>
            {propertyId ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyComponent;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { addEstateprop } from "../EstateService";
// const PropertyComponent = () => {
//   const [property, setProperty] = useState({
//     propertyAddress: " ",
//     propertyDetails: " ",
//     sellerId: " ",
//     categoryTypeId: " ",
//   });
//   const navigate = useNavigate();
//   const { propertyId } = useParams();
//   useEffect(() => {
//     const findbyproperty = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/property/fetchbyid/${propertyId}`);
//         setProperty(response.data);
//       } catch (error) {
//         console.error("Error fetching seller data:", error);
//       }
//     };

//     if (propertyId) {
//         findbyproperty();
//     }
//   }, [propertyId]);

//   const handleChange = (e) => {
//     setProperty({
//       ...property,
//       [e.target.name]: e.target.value,
//       id: propertyId,
//     });
//   };

//   const saveorUpdateEstateProperty = (e) => {
//     e.preventDefault();
//     const requiredFields = [
//       "propertyAddress",
//       "propertyDetails",
//       "sellerId",
//       "categoryTypeId",
//     ];
//     if (requiredFields.some((field) => !property[field])) {
//       alert("please fill all the feilds");
//       return;
//     }
//     if (propertyId) {
//       saveorUpdateEstateProperty(propertyId, property)
//         .then(() => {
//           console.log("update succussful:", property);
//           navigate("/estate-properties");
//         })
//         .catch((error) => {
//           console.error("update failed:", error);
//         });
//     } else {
//       addEstateprop(property)
//         .then(() => {
//           console.log("added succusfully:", property);
//           navigate("/ListPropertyComponent");
//         })
//         .catch((error) => {
//           console.error("Insert failed:", error);
//         });
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h2>PropertyComponent</h2>
//         <div>
//           <form>
//             <label className='form-label'>Property Address:</label>
//             <input
//               type='text'
//               placeholder='Enter property address'
//               name='propertyAddress'
//               className='form-control'
//               value={property.propertyAddress}
//               onChange={handleChange}
//             />

//             <label className='form-label'>Property Details:</label>
//             <input
//               type='text'
//               placeholder='Enter property details'
//               name='propertyDetails'
//               className='form-control'
//               value={property.propertyDetails}
//               onChange={handleChange}
//             />

//             <label className='form-label'>Seller ID:</label>
//             <input
//               type='text'
//               placeholder='Enter seller ID'
//               name='sellerId'
//               className='form-control'
//               value={property.sellerId}
//               onChange={handleChange}
//             />

//             <label className='form-label'>Category Type ID:</label>
//             <input
//               type='text'
//               placeholder='Enter category type ID'
//               name='categoryTypeId'
//               className='form-control'
//               value={property.categoryTypeId}
//               onChange={handleChange}
//             />
//             <button
//               className='btn btn-success'
//               onClick={(e) => {
//                 saveorUpdateEstateProperty(e);
//                 navigate("/ListPropertyComponent");
//               }}>
//               {propertyId ? "Update" : "Save"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyComponent;
