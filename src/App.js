import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Home/Home'
import About from './About/About'
import Shop from './Shop/Shop'
import Services from './Services/Services'
import Plan from './Plan/Plan'
import Contact from './Contact/Contact'
import Error from './Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/home'} element={< Home/>} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/shop'} element={<Shop />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/plan'} element={<Plan />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/*'} element={<Error />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
