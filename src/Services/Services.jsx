import React from 'react'
import { Container, Row } from 'react-bootstrap'

import Col from 'react-bootstrap/Col'

import "../Services/Services.css";
function Services() {
  return (
    <>
      <Container >
      <h2 style={{textAlign:'center' }}><b>OUR SERVICES</b></h2>
       <Row>
       <Col className='ctt'>
          <h2 >Cat Boarding</h2>
          <h2>Spa & Grooming</h2>
          <h2>Healthy Meal</h2>
          <h2>Activity Exercise</h2>
          <h2>Health Care</h2>
        </Col>

       </Row>
      </Container>
    </>
  )
}

export default Services