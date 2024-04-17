// import React, { useState } from 'react';
// import axios from 'axios';

// const BuyRegister = () => {
//   const [formData, setFormData] = useState({
//     buyersFirstName: '',
//     buyerLastName: '',
//     buyerMobileNo: '',
//     buyerEmail: '',
//     password: '',
//     role: 'USER', // Default role
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8081/buyer/register', formData);
//       console.log(response.data); // Handle successful registration
//     } catch (error) {
//       console.error('Error:', error.response.data); // Handle error
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="buyersFirstName" placeholder="First Name" onChange={handleChange} required />
//         <input type="text" name="buyerLastName" placeholder="Last Name" onChange={handleChange} required />
//         <input type="text" name="buyerMobileNo" placeholder="Mobile Number" onChange={handleChange} required />
//         <input type="email" name="buyerEmail" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <select name="role" onChange={handleChange}>
//           <option value="USER">User</option>
//           <option value="ADMIN">Admin</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default BuyRegister;






import React, { useState } from 'react';
import axios from 'axios';

const BuyRegister = () => {
  const [formData, setFormData] = useState({
    buyersFirstName: '',
    buyerLastName: '',
    buyerMobileNo: '',
    buyerEmail: '',
    password: '',
    role: 'USER', // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/auth/signup', formData);
      console.log(response.data); // Handle successful registration
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="buyersFirstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="buyerLastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="buyerMobileNo" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="email" name="buyerEmail" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default BuyRegister;
