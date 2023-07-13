import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';
import '../Home/Home.css';
import mainimg from '../images/home_bg_img.jpg';

import About from '../About/About';
import Shop from "../Shop/Shop";
import Services from "../Services/Services";
import Plan from "../Plan/Plan"
import Contact from "../Contact/Contact"

function Home() {
  return (
    <Container >
      <Image fluid src={mainimg} />

      <section>
        <About />
      </section>
      <section>
        <Shop />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Plan />
      </section>
      <section>
        <Contact />
      </section>
    </Container>



  );
}

export default Home;