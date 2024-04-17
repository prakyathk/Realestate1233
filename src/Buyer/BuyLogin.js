// import React, { useState } from 'react';
// import axios from 'axios';

// const BuyLogin = () => {
//   const [formData, setFormData] = useState({
//     buyerEmail: '',
//     password: '',
//   });
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8081/login', formData);
//       console.log(response.data); // Handle successful login
//     } catch (error) {
//       if (error.response) {
//         console.error('Error:', error.response.data); // Handle server response error
//       } else if (error.request) {
//         console.error('Error:', error.request); // Handle request error
//       } else {
//         console.error('Error:', error.message); // Handle other errors
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="buyerEmail" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//       {loginSuccess && <p>Login successful</p>}
//     </div>
//   );
// };

// export default BuyLogin;




import React, { useState } from 'react';
import axios from 'axios';

const BuyLogin = () => {
  const [formData, setFormData] = useState({
    buyerEmail: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/auth/signin', formData);
      console.log(response.data); // Handle successful login
      setLoginSuccess(true); // Set login success state
    } catch (error) {
      if (error.response) {
        console.error('Error:', error.response.data); // Handle server response error
      } else if (error.request) {
        console.error('Error:', error.request); // Handle request error
      } else {
        console.error('Error:', error.message); // Handle other errors
      }
      setLoginSuccess(false); // Set login success state to false
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="buyerEmail" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {loginSuccess && <p>Login successful</p>}
    </div>
  );
};

export default BuyLogin;
