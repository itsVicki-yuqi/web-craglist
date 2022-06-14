import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Signin from './components/Signin';
import ProductDetails from './routes/productDetails';
import Profile from './components/Profile.js';

function App() {

  return (
    <React.Fragment>
      <Container>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/productDetails" element={<ProductDetails />}/>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
