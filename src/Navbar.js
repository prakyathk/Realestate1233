
import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FaUser } from 'react-icons/fa'; // Import user icon
import UserProfile from "./Buyer/UserProfile";
import { useState } from "react";
const CustomNavbar = ({ isLoggedIn }) => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

 
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


            <Link to={'/BuyRegister'} className="nav-link"><label> Reg </label></Link>
           < Link to={'/BuyLogin'} className="nav-link"><label> log </label></Link>

          </Nav>
          {/* <Form inline> */}
            {/* <FormControl type="search" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" type="submit">
              Search
            </Button> */}
          
            
          <Button onClick={() => setShowUserProfile(!showUserProfile)}>
            <FaUser />
          </Button>
        </Navbar.Collapse>
      </Container>
      {showUserProfile && (
        <div className="user-profile">
          <UserProfile />
         
        </div>
      )}
    </Navbar>
  );
};

export default CustomNavbar;


// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { BsHouseDoor } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS file

// const CustomNavBar = () => {
//   return (
//     <div>
//     <div className='navmain'>
//     <Navbar bg="transparent" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <BsHouseDoor /> REALESTATE MANAGEMENT
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <NavDropdown title="Service" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/service1">Service 1</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/service2">Service 2</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/service3">Service 3</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/List">Property</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//             <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
//             <Nav.Link as={Link} to="/userprofile">User Profile</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//     </div>
//   );
// }

// export default CustomNavBar;




















































// // import React, { useState } from 'react';
// // import { Navbar, Container, Nav, Button } from 'react-bootstrap';
// // import { FaUser } from 'react-icons/fa';
// // import { useNavigate } from 'react-router-dom';

// // const CustomNavbar = () => {
// //   const [showUserProfile, setShowUserProfile] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem('loggedInUser');
// //     setShowUserProfile(false);
// //     navigate('/'); // Redirect to home page
// //   };

// //   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
// //   const isAdmin = loggedInUser && loggedInUser.role === 'admin';

// //   return (
// //     <>
// //       {isAdmin ? (
// //         <AdminNavbar setShowUserProfile={setShowUserProfile} />
// //       ) : (
// //         <UserNavbar setShowUserProfile={setShowUserProfile} />
// //       )}

// //       <Navbar bg="dark" variant="dark" expand="lg">
// //         <Container>
// //           <Navbar.Collapse className="justify-content-end">
// //             <Button onClick={() => setShowUserProfile(!showUserProfile)}>
// //               <FaUser />
// //             </Button>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>

// //       {showUserProfile && (
// //         <div className="user-profile">
// //           <Button onClick={handleLogout}>Logout</Button>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // const AdminNavbar = ({ setShowUserProfile }) => {
// //   return (
// //     <Navbar bg="dark" variant="dark" expand="lg">
// //       <Container>
// //         <Navbar.Brand href="/">Admin Navbar</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="mr-auto">
// //             <Nav.Link href="/admin">Admin Link</Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };

// // const UserNavbar = ({ setShowUserProfile }) => {
// //   return (
// //     <Navbar bg="dark" variant="dark" expand="lg">
// //       <Container>
// //         <Navbar.Brand href="/">User Navbar</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="mr-auto">
// //             <Nav.Link href="/LoginForm">User Link</Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };

// // export default CustomNavbar;
