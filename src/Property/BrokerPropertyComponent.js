// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { addbrokerproperty, fetchbyid } from "../EstateService"; 

// const BrokerPropertyComponent = () => {
//   const [brokerProperty, setBrokerProperty] = useState({
//     propertyId: "",
//     brokerId: "",
//   });
//   const navigate = useNavigate();
//   const { brokersPropertyId } = useParams();

//   useEffect(() => {
//     if (brokersPropertyId) {
//       // Fetch data if brokersPropertyId exists (for update/edit functionality)
//       fetchbyid(brokersPropertyId)
//         .then((response) => {
//           setBrokerProperty(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching data by id:", error);
//         });
//     }
//   }, [brokersPropertyId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBrokerProperty((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Assuming you have some validation before submitting
//     // ...

//     // Use addbrokerproperty to insert or update data
//     addbrokerproperty(brokerProperty)
//       .then(() => {
//         console.log("Broker Property inserted/updated successfully!");
//         navigate("/listBrokerProperty"); // Redirect to the list page after insertion/update
//       })
//       .catch((error) => {
//         console.error("Error inserting/updating data:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>{brokersPropertyId ? "Edit Broker Property" : "Add Broker Property"}</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Input fields for propertyId and brokerId */}
//         <label>
//           Property ID:
//           <input
//             type="text"
//             name="propertyId"
//             value={brokerProperty.propertyId}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Broker ID:
//           <input
//             type="text"
//             name="brokerId"
//             value={brokerProperty.brokerId}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BrokerPropertyComponent;



// Import necessary dependencies and API functions
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { generateRandomBrokerProperty, fetchall, fetchbyid } from "../EstateService"; // replace with your actual API file

const BrokerPropertyComponent = () => {
  const [brokerProperty, setBrokerProperty] = useState({
    propertyId: "",
    brokerId: ""
  });

  const navigate = useNavigate();
  const { brokersPropertyId } = useParams();

  const handleGenerateRandomBrokerPropertyClick = () => {
    generateRandomBrokerProperty()
      .then(response => {
        // Handle successful generation of random broker properties, if needed
        console.log("Random broker properties generated successfully:", response.data);
        // You may want to update the state or perform other actions
        // based on the success of the generateRandomBrokerProperty call
      })
      .catch(error => {
        // Handle error during generation of random broker properties
        console.error("Error generating random broker properties:", error);
      });
  };

  useEffect(() => {
    // Fetch data or perform other actions on component mount
    fetchall()
      .then(response => {
        // Handle successful fetch, if needed
        console.log("Data fetched successfully:", response.data);
        // You may want to update the state or perform other actions
        // based on the success of the fetch
      })
      .catch(error => {
        // Handle error during fetch
        console.error("Error fetching data:", error);
      });

    if (brokersPropertyId) {
      fetchbyid(brokersPropertyId)
        .then(response => {
          // Handle successful fetch by ID, if needed
          console.log("Data fetched by ID successfully:", response.data);
          // You may want to update the state or perform other actions
          // based on the success of the fetch by ID
        })
        .catch(error => {
          // Handle error during fetch by ID
          console.error("Error fetching data by ID:", error);
        });
    }
  }, [brokersPropertyId]); // Include any dependencies needed for your useEffect

  return (
    <div>
      <button onClick={handleGenerateRandomBrokerPropertyClick}>REFRESH</button>
      {/* Your other JSX elements and components */}
    </div>
  );
};

export default BrokerPropertyComponent;
