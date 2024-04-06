import React from 'react';

const InvoiceDetails = ({ dealDetails }) => {
  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <div className="invoice-id">
          Invoice ID:{dealDetails.dealId} 
        </div>
        <div className="actions">
          <button className="print-button">Print</button>
          <button className="export-button">Export</button>
        </div>
      </div>
      <div className="invoice-details">
        <div className="to-name">To: John Lorem</div>
        <div className="to-address">
          Street, City<br />
          State, Country<br />
          123-456-789
        </div>
        <div className="invoice-logo">
          <img src="https://mdbootstrap.com/img/new/icons/pdf-file-logo.png" alt="logo" />
          MDB<br />
          MDBootstrap.com
        </div>
      </div>
      <div className="invoice-content">
        <div className="invoice-header-content">
          <div className="invoice-number">
            Invoice ID: <span>#123-456</span>
          </div>
          <div className="creation-date">Creation Date: Jun 23,2021</div>
          <div className="invoice-status">Status: <span>Unpaid</span></div>
        </div>
        <div className="invoice-table-container">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {dealDetails.map((deal, index) => (
                <tr key={index}>
                  <td>{deal.description}</td>
                  <td>{deal.qty}</td>
                  <td>{deal.unitPrice}</td>
                  <td>{deal.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="additional-notes">
          Add additional notes and payment information<br />
          Thank you for your purchase
        </div>
        <div className="invoice-totals">
          SubTotal <span>$1110</span><br />
          Tax (15%) <span>$111</span><br />
          Total Amount <span>$1221</span><br />
          <button className="pay-button">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
