import React from 'react';

const UserProfile = () => {
  // Retrieve user data from session storage
  const userData = JSON.parse(sessionStorage.getItem('user'));

  // Function to handle logout
  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('user');
    // Redirect to the login page
    window.location.href = '/Home'; // Change '/login' to the path of your login page
  };

  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {userData.buyersFirstName} {userData.buyersLastName}</p>
      <p><strong>Email:</strong> {userData.buyerEmail}</p>
      {/* Add other user profile information here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
