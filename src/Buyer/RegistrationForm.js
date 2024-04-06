import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [registrationData, setRegistrationData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData({ ...registrationData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/auth/signup', registrationData);
            console.log(response.data); // Handle successful registration response
        } catch (error) {
            console.error('Registration failed:', error.response.data); // Handle registration error
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={registrationData.name} onChange={handleChange} />
                <input type="text" name="username" placeholder="Username" value={registrationData.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={registrationData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={registrationData.password} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
