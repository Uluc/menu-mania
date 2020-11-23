import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products';
import { productData } from './components/Products/data';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Route exact path='/' render={(props) => (
        <div>
          <Hero />
          <Products heading='Take Your Pick' data={productData} />      
        </div>
      )}/>
      <Route exact path='/Menu' exact component={Menu} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
