import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const LogoutButton = () => {
    const handleLogout = () => {
        // Clear user session data from localStorage
        localStorage.removeItem('userData');
        // Redirect to the login page or any other desired page
        window.location.href = '/login'; // Redirect to the login page
    };

    return (
        <MDBBtn color="primary" onClick={handleLogout}>
            Logout
        </MDBBtn>
    );
};

export default LogoutButton;
