import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Take Your Pick' data={productData} />
      
    </Router>
  );
}

export default App;