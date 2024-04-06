import React from 'react';
import '../List1.css'
const UserProfile = () => {
  // Fetch user data from local storage
  const userData = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div>
      {userData && (
        <div>
          <p>Welcome, {userData.usernameOrEmail}!</p>
          <p>Email: {userData.email}</p>
          {/* Add more user information as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
