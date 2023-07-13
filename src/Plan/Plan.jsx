import React from 'react'
import '../Plan/Plan.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Plan() {
  return (
    <>
      <Container  >
      <h2 style={{textAlign:'center' }}><b>CHOOSE A PLAN</b></h2>
            <Row className='ttt'>
                <Col >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title ><b>1 Day</b></Card.Title>
                            <Card.Text>                               
                                  <ul>
                                    <li>Pet Room </li>
                                    <li>Pet Grooming </li>
                                    <li>Pet Exercise </li>
                                    <li>Pet Meals </li>
                                  </ul>                           
                            </Card.Text>
                            <Button variant="primary">₹50</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title ><b>10 Days</b></Card.Title>
                            <Card.Text>                               
                                  <ul>
                                    <li>Pet Room </li>
                                    <li>Pet Grooming </li>
                                    <li>Pet Exercise </li>
                                    <li>Pet Meals </li>
                                  </ul>                           
                            </Card.Text>
                            <Button variant="primary">₹500</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title ><b>30 Days</b></Card.Title>
                            <Card.Text>                               
                                  <ul>
                                    <li>Pet Room </li>
                                    <li>Pet Grooming </li>
                                    <li>Pet Exercise </li>
                                    <li>Pet Meals </li>
                                  </ul>                           
                            </Card.Text>
                            <Button  variant="primary" >₹1500</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Plan