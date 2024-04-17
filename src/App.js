import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SellerComponent from './Seller/SellerComponent';
import ListSellerComponent from './Seller/ListSellerComponent';
import UpdateSellerComponent from './Seller/UpdateSellerComponent';

import ViewSellerComponent from './Seller/ViewSellerComponent';
import Home from './Home';
import PropertyComponent from './Property/PropertyComponent';
import UpdatePropertyComponent from './Property/UpdatePropertyComponent';
import ListPropertyComponent from './Property/ListPropertyComponent'
import BrokerComponent from './Broker/BrokerComponent';
import ViewBrokerComponent from './Broker/ViewBrokerComponent';
import ListBrokerComponent from './Broker/ListBrokerComponent';
import CustomNavbar from './Navbar';
import ListBuyerComponent from './Buyer/ListBuyerComponent';
import BuyerComponent from './Buyer/BuyerComponent';
import ViewBuyerComponent from './Buyer/ViewBuyerComponent';
import UpdateBuyerComponent from './Buyer/UpdateBuyerComponent';
import UpdateBrokerComponent from './Broker/UpdateBrokerComponent';
import ViewPropertyComponent from './Property/ViewPropertyComponent';
import BrokerPropertyComponent from './Property/BrokerPropertyComponent';
import ListBrokerPropertyComponent from  './Property/ListBrokerPropertyComponent';
import DealList from './Deals/DealList';
import EnquiryForm from './Property/EnquiryForm';
import PropertyList from './Deals/PropertyList';
import PropertyCard from './Deals/PropertyCard';
import LoginForm from './Buyer/LoginForm';
import RegistrationForm from './Buyer/RegistrationForm';

import List from './List';
import Slidebar from './Slidebar'


// import PropertyHome from './Property/PropertyHome';
import SelectedPropertyDetails from './Property/SelectedPropertyDetails';
import BuyProperty from './Property/BuyProperty';
import Invoice from './Property/Invoice';
import UserProfile from './Buyer/UserProfile';
import BuyRegister from './Buyer/BuyRegister';
import BuyLogin from './Buyer/BuyLogin';

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        
        <Routes>
          <Route path='/' element={<Home />} />


          <Route path="/ListSellerComponent" element={<ListSellerComponent />} />
          <Route path="/SellerComponent" element={<SellerComponent />} />
          <Route path="/SellerComponent/:sellerId" element={<SellerComponent />} />
          <Route path="/ViewSellerComponent/fetchbyid/:sellerId" element={<ViewSellerComponent />} />
          <Route path="/UpdateSellerComponent/:sellerId" element={<UpdateSellerComponent />} />



          <Route path="/Property/ListPropertyComponent" element={<ListPropertyComponent />} />
          <Route path='/PropertyComponent' element={<PropertyComponent />} />
          <Route path='/ViewPropertyComponent/fetchbyid/:propertyId' element={<ViewPropertyComponent/>}/>
          <Route path="/ListPropertyComponent" element={<ListPropertyComponent />} />
          <Route path='/UpdatePropertyComponent/:propertyId' element={<UpdatePropertyComponent/>}/> 
{/* <Route path='/PropertyHome' element = {<PropertyHome/>}/> */}



          <Route path="/ListBrokerComponent" element={<ListBrokerComponent />} />
          <Route path='/Broker/BrokerPropertyComponent' element={<BrokerComponent/>}/>
          <Route path='/ViewBrokerComponent/fetchbyid/:brokerId'element={<ViewBrokerComponent/>}/>
          <Route path='/BrokerComponent' element={<BrokerComponent/>}/>
          <Route path='/UpdateBrokerComponent/:brokerId' element={<UpdateBrokerComponent/>}/>


           <Route path="/ListBuyerComponent" element={<ListBuyerComponent/>}/>
           <Route path='/BuyerComponent' element={<BuyerComponent/>}/>
           <Route path="/BuyerComponent/:buyersId" element={<BuyerComponent />} />
           <Route path='/ViewBuyerComponent/fetchbyid/:buyersId' element={<ViewBuyerComponent/>}/>
           <Route path='/UpdateBuyerComponent/:buyersId' element={<UpdateBuyerComponent/>}/>
           <Route path='/LoginForm' element ={<LoginForm/>}/>
           <Route path='/RegistrationForm' element ={<RegistrationForm/>}/>
           <Route path='/LoginForm/Buyer/Registration' element ={<RegistrationForm/>}/>

<Route path='/Property/SelectedPropertyDetails ' element ={<SelectedPropertyDetails/>}/>

<Route path='/UserProfile' element ={<UserProfile/>}/>


<Route path="/BuyLogin" element={<BuyLogin/>}></Route>

<Route path="/BuyRegister" element={<BuyRegister/>}></Route>
          

          <Route path='/Property/BrokerPropertComponent'element={<BrokerPropertyComponent/>}/>
          <Route path='/Property/ListBrokerPropertyComponent'element={<ListBrokerPropertyComponent/>}/>




          <Route path='Deals/DealList'element={<DealList/>}/>
          <Route path='Deals/PropertyList'element={<PropertyList/>}/>


          <Route path='Deals/EnquiryForm'element={<EnquiryForm/>}/>

          <Route path="/ListBrokerComponent/:brokerId" element={<ListBrokerComponent />} />
          <Route path="Deals/PropertyList"  element={PropertyList} />
        <Route path="Deals/PropertyList/:id" element={PropertyCard} />
        <Route path="/enquiry" element={EnquiryForm} />
        <Route path="/Property/EnquiryForm/:propertyId" element={EnquiryForm} />



<Route path='/Slidebar'element={<Slidebar/>}/>

<Route path='/List'element={<List/>}/>
<Route path='/Property/BuyProperty/:propertyId/'element={<BuyProperty/>}/>
<Route path='/invoice/:propertyId' element={<Invoice/>}/>
<Route path='/Deals/EnquiryForm/:propertyId/'element={<EnquiryForm/>}/>
<Route path='/invoice'element={<Invoice/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;











// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SellerComponent from './Seller/SellerComponent';
// import ListSellerComponent from './Seller/ListSellerComponent';
// import UpdateSellerComponent from './Seller/UpdateSellerComponent';
// import ViewSellerComponent from './Seller/ViewSellerComponent';
// import Home from './Home';
// import PropertyComponent from './Property/PropertyComponent';
// import UpdatePropertyComponent from './Property/UpdatePropertyComponent';
// import ListPropertyComponent from './Property/ListPropertyComponent';
// import BrokerComponent from './Broker/BrokerComponent';
// import ViewBrokerComponent from './Broker/ViewBrokerComponent';
// import ListBrokerComponent from './Broker/ListBrokerComponent';
// import CustomNavbar from './Navbar';
// import ListBuyerComponent from './Buyer/ListBuyerComponent';
// import BuyerComponent from './Buyer/BuyerComponent';
// import ViewBuyerComponent from './Buyer/ViewBuyerComponent';
// import UpdateBuyerComponent from './Buyer/UpdateBuyerComponent';
// import UpdateBrokerComponent from './Broker/UpdateBrokerComponent';
// import ViewPropertyComponent from './Property/ViewPropertyComponent';
// import BrokerPropertyComponent from './Property/BrokerPropertyComponent';
// import ListBrokerPropertyComponent from  './Property/ListBrokerPropertyComponent';
// import DealList from './Deals/DealList';
// import EnquiryForm from './Property/EnquiryForm';
// import PropertyList from './Deals/PropertyList';
// import PropertyCard from './Deals/PropertyCard';
// import LoginForm from './Buyer/LoginForm';
// import RegistrationForm from './Buyer/RegistrationForm';
// import List from './List';
// import Slidebar from './Slidebar';
// import SelectedPropertyDetails from './Property/SelectedPropertyDetails';
// import BuyProperty from './Property/BuyProperty';
// import Invoice from './Property/Invoice';
// import UserProfile from './Buyer/UserProfile';
// import BuyRegister from './Buyer/BuyRegister';
// import BuyLogin from './Buyer/BuyLogin';

// const App = () => {
//   // Example: Assume isAdmin is set based on the user role after successful login
//   const [isAdmin, setIsAdmin] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <CustomNavbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/List' element={<List />} />

          
//           <Route path='/LoginForm' element={<LoginForm />} />
//           <Route path='/RegistrationForm' element={<RegistrationForm />} />
//           <Route path='/Property/EnquiryForm/:propertyId' element={<EnquiryForm />} />
//           <Route path='/Property/BuyProperty/:propertyId/' element={<BuyProperty />} />
         
//           {isAdmin && (
//             <>
//               <Route path='/Property/BrokerPropertComponent' element={<BrokerPropertyComponent />} />
//               <Route path='/Property/ListBrokerPropertyComponent' element={<ListBrokerPropertyComponent />} />
//               <Route path='/Deals/DealList' element={<DealList />} />
//               <Route path='/Deals/PropertyList' element={<PropertyList />} />
//               <Route path='/Deals/EnquiryForm' element={<EnquiryForm />} />
//               <Route path='/ListBrokerComponent/:brokerId' element={<ListBrokerComponent />} />
//               <Route path='/Deals/PropertyList/:id' element={<PropertyCard />} />
//               <Route path='/BuyProperty/:propertyId/' element={<BuyProperty />} />
//             </>
//           )}

          
//           <Route path='/Slidebar' element={<Slidebar />} />
//           <Route path='/ViewSellerComponent/fetchbyid/:sellerId' element={<ViewSellerComponent />} />
//           <Route path='/UpdateSellerComponent/:sellerId' element={<UpdateSellerComponent />} />
//           <Route path='/ViewPropertyComponent/fetchbyid/:propertyId' element={<ViewPropertyComponent />} />
//           <Route path='/UpdatePropertyComponent/:propertyId' element={<UpdatePropertyComponent />} />
//           <Route path='/ListSellerComponent' element={<ListSellerComponent />} />
//           <Route path='/SellerComponent/:sellerId' element={<SellerComponent />} />
//           <Route path='/ListPropertyComponent' element={<ListPropertyComponent />} />
//           <Route path='/PropertyComponent' element={<PropertyComponent />} />
//           <Route path='/UpdateBuyerComponent/:buyersId' element={<UpdateBuyerComponent />} />
//           <Route path='/ViewBuyerComponent/fetchbyid/:buyersId' element={<ViewBuyerComponent />} />
//           <Route path='/BuyerComponent/:buyersId' element={<BuyerComponent />} />
//           <Route path='/ListBuyerComponent' element={<ListBuyerComponent />} />
//           <Route path='/BuyerComponent' element={<BuyerComponent />} />
//           <Route path='/ViewBrokerComponent/fetchbyid/:brokerId' element={<ViewBrokerComponent />} />
//           <Route path='/UpdateBrokerComponent/:brokerId' element={<UpdateBrokerComponent />} />
//           <Route path='/ListBrokerComponent' element={<ListBrokerComponent />} />
//           <Route path='/BrokerComponent' element={<BrokerComponent />} />
//           <Route path='/BuyProperty/:propertyId/' element={<BuyProperty />} />
//           <Route path='/invoice/:propertyId' element={<Invoice />} />
//           <Route path='/UserProfile' element={<UserProfile />} />
//           <Route path='/SelectedPropertyDetails' element={<SelectedPropertyDetails />} />
//           <Route path='/BuyLogin' element={<BuyLogin />} />
//           <Route path='/BuyRegister' element={<BuyRegister />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
