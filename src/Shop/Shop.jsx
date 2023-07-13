import React from 'react'
import '../Shop/Shop.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import p1 from "../images/product_01.jpg"
import p2 from "../images/product_02.jpg"
import p3 from "../images/product_03.jpg"
import p4 from "../images/product_04.jpg"
import p5 from "../images/product_05.jpg"
import p6 from "../images/product_06.jpg"


function Shop() {
    return (
        <>
            <Container  >
                <h2 style={{textAlign:'center' }}><b>OUR PRODUCTS</b></h2>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem' }} className='xxx'>
                            <Card.Img src={p1} />
                            <Card.Body>
                                <Card.Title>Air-Dried Food</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">₹250</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }} className='xxx'>
                        <Card.Img src={p2} />
                        <Card.Body>
                            <Card.Title>Air-Dried Food</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">₹250</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }} className='xxx'>
                        <Card.Img src={p3} />
                        <Card.Body>
                            <Card.Title>Air-Dried Food</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">₹250</Button>
                        </Card.Body>
                    </Card>
                    </Col>       
                    <Col>
                    <Card style={{ width: '18rem' }} className='xxx'>
                            <Card.Img src={p4} />
                            <Card.Body>
                                <Card.Title>Air-Dried Food</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">₹250</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }} className='xxx'>
                        <Card.Img src={p5} />
                        <Card.Body>
                            <Card.Title>Air-Dried Food</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">₹250</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }} className='xxx'>
                        <Card.Img src={p6} />
                        <Card.Body>
                            <Card.Title>Air-Dried Food</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">₹250</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Shop