import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <Navbar id="sidebar" expand="lg" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <Navbar.Brand>
        <BsCart3 className='icon_header' /> SHOP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={OpenSidebar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Nav.Link>
          <Nav.Link href="#">
            <BsFillArchiveFill className='icon' /> Products
          </Nav.Link>
          <Nav.Link href="#">
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </Nav.Link>
          <Nav.Link href="#">
            <BsPeopleFill className='icon' /> Customers
          </Nav.Link>
          <Nav.Link href="#">
            <BsListCheck className='icon' /> Inventory
          </Nav.Link>
          <Nav.Link href="#">
            <BsMenuButtonWideFill className='icon' /> Reports
          </Nav.Link>
          <Nav.Link href="#">
            <BsFillGearFill className='icon' /> Setting
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
















// import React from 'react';
// import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
// import { Navbar, Nav } from 'react-bootstrap';
// import './Slidebar.css'
// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   return (
//     <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
//       <Navbar expand="lg">
//         <Navbar.Brand>
//           <BsCart3 className='icon_header' /> SHOP
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={OpenSidebar} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto flex-column">
//             <Nav.Link href="#">
//               <BsGrid1X2Fill className='icon' /> Dashboard
//             </Nav.Link>
//             <Nav.Link href="#">
//               <BsFillArchiveFill className='icon' /> Products
//             </Nav.Link>
//             <Nav.Link href="#">
//               <BsFillGrid3X3GapFill className='icon' /> Categories
//             </Nav.Link>
//             <Nav.Link href="#">
//               <BsPeopleFill className='icon' /> Customers
//             </Nav.Link>
//             <Nav.Link href="#">
//               <BsListCheck className='icon' /> Inventory
//             </Nav.Link>
//             <Nav.Link href="#">
//               <BsMenuButtonWideFill className='icon' /> Reports
//             </Nav.Link>
//             <Nav.Link href="#">
//               <BsFillGearFill className='icon' /> Setting
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Sidebar;








// import React from 'react';
// import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
// import './Slidebar.css'
// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   return (
//     <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
//       <div className="sidebar-brand">
//         <BsCart3 className='icon_header' /> SHOP
//       </div>
//       <div className="sidebar-content">
//         <ul className='sidebar-list'>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsGrid1X2Fill className='icon' /> Dashboard
//             </a>
//           </li>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsFillArchiveFill className='icon' /> Products
//             </a>
//           </li>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsFillGrid3X3GapFill className='icon' /> Categories
//             </a>
//           </li>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsPeopleFill className='icon' /> Customers
//             </a>
//           </li>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsListCheck className='icon' /> Inventory
//             </a>
//           </li>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsMenuButtonWideFill className='icon' /> Reports
//             </a>
//           </li>
//           <li className='sidebar-list-item'>
//             <a href="#">
//               <BsFillGearFill className='icon' /> Setting
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
