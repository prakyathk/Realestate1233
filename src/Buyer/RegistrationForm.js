// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//     const [registrationData, setRegistrationData] = useState({
//         name: '',
//         username: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setRegistrationData({ ...registrationData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8081/auth/signup', registrationData);
//             console.log(response.data); // Handle successful registration response
//         } catch (error) {
//             console.error('Registration failed:', error.response.data); // Handle registration error
//         }
//     };

//     return (
//         <div>
//             <h2>Registration</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" value={registrationData.name} onChange={handleChange} />
//                 <input type="text" name="username" placeholder="Username" value={registrationData.username} onChange={handleChange} />
//                 <input type="email" name="email" placeholder="Email" value={registrationData.email} onChange={handleChange} />
//                 <input type="password" name="password" placeholder="Password" value={registrationData.password} onChange={handleChange} />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER'); // Default role is 'USER'

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/buyer/register', {
        buyersFirstName: firstName,
        buyerLastName: lastName,
        buyerMobileNo: mobileNo,
        buyerEmail: email,
        password,
        role
      });
      // Assuming response.data contains the registered user object
      const user = response.data;
      // Redirect or perform further actions
      console.log('Registered successfully:', user);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
