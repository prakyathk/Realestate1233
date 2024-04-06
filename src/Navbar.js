

// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import LogoutButton from "./LogoutButton";
// const CustomNavbar = () => {
//   const userData = JSON.parse(localStorage.getItem('userData'));
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container style={{ backgroundColor: '#001f3f' }}>
//         <Link to="/" className="navbar-brand">
//           HOME
//         </Link>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="navbar-toggler" // Add the navbar-toggler class
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Link to="/Property/ListPropertyComponent">
//               <NavDropdown
//                 title="PROPERTY"
//                 id="basic-nav-dropdown"
//                 style={{ backgroundColor: '#001f3f' }} 
//               >
//                 <NavDropdown.Item>
//                   <Link to={'/ListPropertyComponent'}>PROPERTY</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item>
//                   <Link to={'Property/ListBrokerPropertyComponent'}> PROPERTY CATEGORY</Link>
//                 </NavDropdown.Item>
                
              
//               </NavDropdown>
//             </Link>

//             <Link to="/ListSellerComponent" className="nav-link">
//               SELLER
//             </Link>
//             {/* <Link to="/Property/ListPropertyComponent" className="nav-link">
//               PROPERTY
//             </Link> */}
//             <Link to="/ListBuyerComponent" className="nav-link">
//               <label>BUYER</label>
//             </Link>
//             <Link to="/ListBrokerComponent" className="nav-link">
//               <label>BROKER</label>
//             </Link>
//              <Link to={'/Deals/PropertyList'}className="nav-link"><label> DEALS </label></Link>
//              <Link to={'/Adds/AddsComponent'}className="nav-link"><label> ADVERTISEMENT </label></Link>
//              <Link to={'Deals/EnquiryForm'}className="nav-link"><label> enquiry </label></Link>
//              <Link to={'/Slidebar'}className="nav-link"><label> SlideBar </label></Link>
// <Button ><Link to={'/LoginForm'}><label>USER</label></Link></Button>
// {/* <Link to={'/PropertyHome'}><label>Home</label></Link> */}
// <Link to={'/List'}>Listing</Link>
// <Link to={'/invoice/:32/'}>POPUP</Link>
//           </Nav>
//           <Form inline>
//             <FormControl type="search" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-success" type="submit">
//               Search
//             </Button>
//             <div className="user-info">
//                         {userData ? (
//                             <div>
//                                 <span>Welcome, {userData.username}!</span>
//                                 <span>Email: {userData.email}</span>
//                                 <LogoutButton /> {/* Include the LogoutButton component */}
//                             </div>
//                         ) : (
//                             <Link to="/login" className="nav-link">Login</Link> 
//                         )}
//                     </div>


//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;



import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FaUser } from 'react-icons/fa'; // Import user icon
import UserProfile from "./Buyer/UserProfile";
import { useState } from "react";
const CustomNavbar = ({ isLoggedIn }) => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setShowUserProfile(false);
    window.location.href = '/'; // Redirect to home page
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container style={{ backgroundColor: '#001f3f' }}>
        <Link to="/" className="navbar-brand">
          HOME
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Property/ListPropertyComponent">
              <NavDropdown
                title="PROPERTY"
                id="basic-nav-dropdown"
                style={{ backgroundColor: '#001f3f' }} 
              >
                <NavDropdown.Item>
                  <Link to={'/ListPropertyComponent'}>PROPERTY</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'Property/ListBrokerPropertyComponent'}> PROPERTY CATEGORY</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Link to="/ListSellerComponent" className="nav-link">
              SELLER
            </Link>
            <Link to="/ListBuyerComponent" className="nav-link">
              <label>BUYER</label>
            </Link>
            <Link to="/ListBrokerComponent" className="nav-link">
              <label>BROKER</label>
            </Link>
            <Link to={'/Deals/PropertyList'} className="nav-link"><label> DEALS </label></Link>
            <Link to={'/Adds/AddsComponent'} className="nav-link"><label> ADVERTISEMENT </label></Link>
            <Link to={'Deals/EnquiryForm'} className="nav-link"><label> enquiry </label></Link>
            <Link to={'/Slidebar'} className="nav-link"><label> SlideBar </label></Link>
            <Link to={'/List'} className="nav-link"><label>Listing</label></Link>
            <Button><Link to={'/LoginForm'}><label>USER</label></Link></Button>
          </Nav>
          <Form inline>
            {/* <FormControl type="search" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" type="submit">
              Search
            </Button> */}
          
            
            <Button onClick={() => setShowUserProfile(!showUserProfile)}>
              <FaUser />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      {showUserProfile && (
        <div className="user-profile">
          <UserProfile />
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
