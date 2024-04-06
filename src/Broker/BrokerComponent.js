import { getbroker, updateEstatebroker,addbroker,findallbroker, } from "../EstateService";
import { useNavigate, useParams,Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const BrokerComponent = () => {
    const [broker, setBroker] = useState({
      
    brokerFirstName:"",
    brokerLastName :" ",
    brokerPhoneNo :" ",
    brokerMobileNo :" ",
    brokerEmail :" ",
    brokerAddress :" ",
    brokerCommission  :" "
    });
  
    const navigate = useNavigate();
    const { brokerId } = useParams();
  
    useEffect(() => {
      if (brokerId) {
        getbroker(brokerId)
          .then((response) => {
            setBroker(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [brokerId]);
  
    const handleChange = (e) => {
      setBroker({
        ...broker,
        [e.target.name]: e.target.value,
        id: brokerId,
      });
    };
  
    const saveOrUpdateEstateSeller = (e) => {
      e.preventDefault();
  
      const requiredFields = [
        "brokerFirstName",
        "brokerLastName", 
        "brokerPhoneNo",
        "brokerMobileNo", 
        "brokerEmail", 
        "brokerAddress", 
        "brokerCommission" 
      ];
  
      if (requiredFields.some((field) => !broker[field])) {
        alert("Please fill in all fields");
        return;
      }
  
      if (brokerId) {
        updateEstatebroker(brokerId, broker)
          .then(() => {
            console.log("Update successful:", broker);
            navigate("/ListBrokerComponent");
          })
          .catch((error) => {
            console.error("Update failed:", error);
          });
      } else {
        addbroker(broker)
          .then(() => {
            console.log("Insert successful:", broker);
            navigate("/ListBrokerComponent");
          })
          .catch((error) => {
            console.error("Insert failed:", error);
          });
      }
    };
  
    const deletebroker = (brokerId) => {
      if (window.confirm("Are you sure you want to delete this broker?")) {
        deletebroker(brokerId)
          .then(() => {
            console.log("Broker deleted successfully");
            findallbroker().then((response) => setBroker(response.data));
          })
          .catch((error) => {
            console.error("Delete failed:", error);
          });
      }
    };
  
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="container">
            <h2 className="text-center"><Link to='/BrokerComponent'>{brokerId ? "Update Broker  " : "Add Broker"}</Link></h2>
            <div className="container2">
              <form>
                <label className='form-label'> Broker First Name :</label>
                <input
                  type='text'
                  placeholder='Enter first name'
                  name='brokerFirstName'
                  className='form-control'
                  value={broker.brokerFirstName}
                  onChange={handleChange}
                />
    
                <label className='form-label'> Broker Last Name :</label>
                <input
                  type='text'
                  placeholder='Enter last name'
                  name='brokerLastName'
                  className='form-control'
                  value={broker.brokerLastName}
                  onChange={handleChange}
                />
    
                <label className='form-label'> Broker Phone No :</label>
                <input
                  type='text'
                  placeholder='Enter PhoneNo'
                  name='brokerPhoneNo'
                  className='form-control'
                  value={broker.brokerPhoneNo}
                  onChange={handleChange}
                />
    
                <label className='form-label'> Broker Mobile No :</label>
                <input
                  type='text'
                  placeholder='Enter MobileNo'
                  name='brokerMobileNo'
                  className='form-control'
                  value={broker.brokerMobileNo}
                  onChange={handleChange}
                />
    
                <label className='form-label'> Broker Address :</label>
                <input
                  type='text'
                  placeholder='Enter Address'
                  name='brokerAddress'
                  className='form-control'
                  value={broker.brokerAddress}
                  onChange={handleChange}
                />
    
                <label className='form-label'> Broker Email :</label>
                <input
                  type='text'
                  placeholder='Enter Email'
                  name='brokerEmail'
                  className='form-control'
                  value={broker.brokerEmail}
                  onChange={handleChange}
                />
    
                <label className='form-label'> Broker Commission :</label>
                <input
                  type='text'
                  placeholder='Enter Commission'
                  name='brokerCommission'
                  className='form-control'
                  value={broker.brokerCommission}
                  onChange={handleChange}
                />
    
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    saveOrUpdateEstateSeller(e);
                   navigate(`/ListBrokerComponent/${brokerId}`);
                  }}
                >
                  {brokerId ? "Update" : "Save"}
                </button>
    
                {brokerId && (
                  <button
                    className="btn btn-danger"
                    onClick={() => deletebroker(broker.id)}
                  >
                    Delete
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
    
        {/* Conditional rendering of UpdateSellerComponent */}
        {brokerId && <updateEstatebroker />}
      </div>
    );
                };
export default BrokerComponent;    