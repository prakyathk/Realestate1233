



import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const EnquiryForm = ({ onSubmit }) => {
  const [enquiryName, setEnquiryName] = useState('');
  const [enquirerPhoneNo, setEnquirerPhoneNo] = useState('');
  const [messageByEnquirer, setMessageByEnquirer] = useState('');

  // Extract propertyId from the URL using the useLocation hook
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const propertyId = searchParams.get('propertyId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        enquiryName,
        enquirerPhoneNo,
        messageByEnquirer,
        enquiryDate: new Date().toISOString(),
        propertyId: propertyId // Include propertyId in the form data
      };

      // Add propertyId as a hidden field in the form data
      const formDataWithPropertyId = {
        ...formData,
        propertyId: propertyId
      };

      const response = await fetch('http://localhost:8081/enquiry/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithPropertyId), // Send formDataWithPropertyId
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      const data = await response.json();
      console.log('Enquiry submitted:', data);

      onSubmit(formData);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            {/* Hidden input field for propertyId */}
            <input type="hidden" name="propertyId" value={propertyId} />
            <Form.Group controlId="enquiryName">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                type="text"
                value={enquiryName}
                onChange={(e) => setEnquiryName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="enquirerPhoneNo">
              <Form.Label>Your Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                value={enquirerPhoneNo}
                onChange={(e) => setEnquirerPhoneNo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="messageByEnquirer">
              <Form.Label>Your Message:</Form.Label>
              <Form.Control
                as="textarea"
                value={messageByEnquirer}
                onChange={(e) => setMessageByEnquirer(e.target.value)}
                rows="4"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Enquiry
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquiryForm;


