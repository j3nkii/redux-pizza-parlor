import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Checkout from '../Checkout/Checkout'
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
            <Route exact path="/checkout">
              <Checkout />
            </Route>

          </div>
          
        </Router>

      </header>
      <Router>
        <Route path="/customerForm">
          <CustomerForm/>
        </Route>
      </Router>

  
    </div>
  );
}

export default App;
