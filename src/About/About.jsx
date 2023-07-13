
import Container from 'react-bootstrap/Container';
import '../About/About.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import about1 from "../images/about_img.png"
import about2 from "../images/dog_food.png"
import about3 from "../images/cat_food.png"

function About() {
  return (
    <Container >
      <Row>
        <Col>
          <h3><b>Premium Pet Food Manufacturer</b></h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Voluptatum Sint, Dolore Perspiciatis Iure Consequuntur Eligendi Quaerat Vitae Shaikh Anas.</p>
        </Col>
        <Col>
          <Image fluid  src={about1} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Image fluid src={about2} />
        </Col>
        <Col >
          <h3><b>Air Dried Dog Food</b></h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Voluptatum Sint, Dolore Perspiciatis Iure Consequuntur Eligendi Quaerat Vitae Shaikh Anas.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3><b>Air Dried Cat Food</b></h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Voluptatum Sint, Dolore Perspiciatis Iure Consequuntur Eligendi Quaerat Vitae Shaikh Anas.</p>
        </Col>
        <Col>
          <Image fluid src={about3} />
        </Col>
      </Row>

    </Container>
  );
}

export default About;