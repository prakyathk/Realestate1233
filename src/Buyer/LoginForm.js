// import React, { useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// const LoginForm = () => {
//     const [loginData, setLoginData] = useState({
//         usernameOrEmail: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginData({ ...loginData, [name]: value });
//     };

//     const navigate = useNavigate(); // useNavigate hook to access the navigate function

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8081/auth/signin', loginData);
//             console.log(response.data);
            
//             // Redirect to Home page after successful login
//             navigate('/List');
//         } catch (error) {
//             console.error('Login failed:', error.response.data);
//         }
//     };

//     // Function to navigate to registration form
//     const navigateToRegistrationForm = () => {
//         navigate('/RegistrationForm'); // Navigate to '/registration' route using navigate function
//     };

//     return (
//         <MDBContainer>
//             <MDBRow className="justify-content-center">
//                 <MDBCol md="6">
//                     <div className="text-center">
//                         <h2>Login</h2>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <MDBInput
//                             type="text"
//                             label="Username or Email"
//                             name="usernameOrEmail"
//                             value={loginData.usernameOrEmail}
//                             onChange={handleChange}
//                         />
//                         <MDBInput
//                             type="password"
//                             label="Password"
//                             name="password"
//                             value={loginData.password}
//                             onChange={handleChange}
//                         />
//                         <MDBBtn color="primary" type="submit" className="w-100 mt-4">
//                             Login
//                         </MDBBtn>
//                         <div className="text-center mt-3">
//                             {/* Use navigate function to navigate to the registration form */}
//                             <MDBBtn color="primary" type="button" onClick={navigateToRegistrationForm} className="w-100 mt-4">
//                                 Signup
//                             </MDBBtn>
//                         </div>
//                     </form>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        usernameOrEmail: '',
        password: ''
    });

    const navigate = useNavigate(); // useNavigate hook to access the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming you have successfully authenticated the user on the backend
            // and received some basic user information like username or email
            const userData = { usernameOrEmail: loginData.usernameOrEmail };
            localStorage.setItem('loggedInUser', JSON.stringify(userData)); // Store basic user information in localStorage
            navigate('/List'); // Redirect to Home page after successful login
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };
    
    // Function to navigate to registration form
    const navigateToRegistrationForm = () => {
        navigate('/RegistrationForm'); // Navigate to '/registration' route using navigate function
    };

    return (
        <MDBContainer>
            <MDBRow className="justify-content-center">
                <MDBCol md="6">
                    <div className="text-center">
                        <h2>Login</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* Input fields for username/email and password */}
                        <MDBInput
                            type="text"
                            label="Username or Email"
                            name="usernameOrEmail"
                            value={loginData.usernameOrEmail}
                            onChange={(e) => setLoginData({ ...loginData, usernameOrEmail: e.target.value })}
                        />
                        <MDBInput
                            type="password"
                            label="Password"
                            name="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                        {/* Login button */}
                        <MDBBtn color="primary" type="submit" className="w-100 mt-4">
                            Login
                        </MDBBtn>
                        <div className="text-center mt-3">
                            {/* Button to navigate to the registration form */}
                            <MDBBtn color="primary" type="button" onClick={navigateToRegistrationForm} className="w-100 mt-4">
                                Signup
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default LoginForm;



