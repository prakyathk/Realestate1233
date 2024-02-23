import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SellerComponent from './Seller/SellerComponent';
import ListSellerComponent from './Seller/ListSellerComponent';
import UpdateSellerComponent from './Seller/UpdateSellerComponent';
import Navbar from './Navbar';
import ViewSellerComponent from './Seller/ViewSellerComponent';
import Home from './Home';
import PropertyComponent from './Property/PropertyComponent';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/ListSellerComponent" element={<ListSellerComponent />} />
          <Route path="/SellerComponent" element={<SellerComponent />} />
          <Route path="/SellerComponent/:sellerId" element={<SellerComponent />} />
          <Route path="/ViewSellerComponent/fetchbyid/:sellerId" element={<ViewSellerComponent />} />
          <Route path="/UpdateSellerComponent/:sellerId" element={<UpdateSellerComponent />} />
          <Route path='/PropertyComponent' element={<PropertyComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SellerComponent from './SellerComponent';
// import ListSellerComponent from './ListSellerComponent';
// import UpdateSellerComponent from './UpdateSellerComponent';
// import Navbar from './Navbar';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<ListSellerComponent />} />
//           <Route path="/sellers/*" element={<SellerRoutes />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// const SellerRoutes = () => {
//   return (
//     <>
//       <Route path="/" element={<SellerComponent />} />
//       <Route path=":sellerId" element={<UpdateSellerComponent />} />
//       <Route path="/ListSellerComponent" element={<ListSellerComponent />} />
//     </>
//   );
// };

// export default App;

// // App.js