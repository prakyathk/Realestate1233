import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseurl = 'http://localhost:8081';

// export const findallproperties = () => {
//   return axios.get('${baseurl}/property/fetch', {
//     headers: {
//       'Authorization': 'Basic ' + btoa('sudars:1234')
//     }
//   })
// };
    export const insertseller = (seller)  => {
    return axios.post(`${baseurl}/seller/insert`, seller); 
  };

  export const deleteseller = (sellerId) =>{
    return axios.delete(`${baseurl}/seller/delete/${sellerId}`); 
  }

  export const findallseller =()=> {
    return axios.get(`${baseurl}/seller/fetch`);
  }

  export const updateEstateSeller = (sellerId, updatedSeller) =>{
    return axios.put(`${baseurl}/seller/update/${sellerId}`, updatedSeller); 
  }
  export const getSeller = (sellerId) => {
    return axios.get(`${baseurl}/seller/fetchbyid/$sellerId`,sellerId);
}
export const addEstateprop=(property)=>{
  return axios.post(`${baseurl}/property/insert`, property)
}
export const findallproperties =()=>{
  return axios.get(`${baseurl}/property/fetch`)
}























export const deleteprop =(propertyId)=>{
  return axios.delete(`${baseurl}/property/delete/${propertyId}`)
}
export const findbyproperty =(propertyId) => {
  return axios.get( `${baseurl}/property/fetchbyid/`+propertyId)
}

export const addbroker = (broker)  => {
  return axios.post(`${baseurl}/broker/insert`, broker); 
 };
export const findallbroker =()=>{
  return axios.get(`${baseurl}/broker/fetch`)
 }
export const getbroker =(brokerId) => {
  return axios.get( `${baseurl}/broker/fetchbyid/`+brokerId)
}


export const updateEstatebroker = (brokrId, updatedBroker) =>{
  return axios.put(`${baseurl}/broker/update/${brokrId}`, updatedBroker); 
}
export const   deletebroker = (brokrId) =>{
  return axios.delete(`${baseurl}/broker/delete/${brokrId}`); 
}


export const addbuyers= (buyer) => {
  return axios.post(`${baseurl}/buyer/addBuyer`, buyer);
}
export const fetchbuyer= ()=>{
  return axios.get(`${baseurl}/buyer/fetch`);

}
export const fetchbybuyerid = (buyersId)=>{
  return axios.get(`${baseurl}/buyer/fetchbyid/` + buyersId);
}
export const deletebuyer= (buyersId)=> {
  return axios.delete(`${baseurl}/buyer/delete/${buyersId}`);
}
export const updateEstateBuyer =(buyersId,updatedBuyer) => {
  return axios.put(`${baseurl}/buyer/update/${buyersId}`, updatedBuyer);
}














export const addbrokerproperty =(brokerProperty)=> {
  return axios.post(`${baseurl}/broker/property/insert`,brokerProperty)
}


export const fetchall=()=>{
  return axios.get(`${baseurl}/broker/property/fetch`);
}

export const fetchbyid= (brokersPropertyId)=> {
  return axios.get(`${baseurl}/broker/property/fetchbyid/`+brokersPropertyId);
}


export const generateRandomBrokerProperty = () => {
  return axios.post(`${baseurl}/broker/property/generateRandomBrokerProperty`);
}
export const fetchDealDetails =(addId)=>{
  return axios.get(`${baseurl}/adds/fetchDealDetails/`+addId);
}

export const fetchalladds=()=>{
  return axios.get(`${baseurl}/adds/fetchall`);
}