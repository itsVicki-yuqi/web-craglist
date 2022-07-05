import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Signin from './components/Signin';
import ProductDetails from './routes/productDetails';
import Profile from './components/Profile.js';
import NewProduct from './components/NewProduct';

function App() {

  return (
    <React.Fragment>
      <Container>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/productDetails/:id" element={<ProductDetails />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/newproduct" element={<NewProduct/>}  />
          </Routes>
        </Router>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
