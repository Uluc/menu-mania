import React from 'react';
import { GlobalStyle } from './globalStyles';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <GlobalStyle/>    
      <Route exact path='/' render={(props) => (
          <div>
            <Hero />
            <Products heading='Take Your Pick' data={productData} />      
          </div>
        )}/>
      <Route exact path='/Menu' exact component={Menu} />       
    </div>      
  );
}

export default App;