import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseurl = 'http://localhost:8081';


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

export const findbyproperty =(propertyId) => {
  return axios.get( `${baseurl}/property/fetchbyid/`+propertyId)
}