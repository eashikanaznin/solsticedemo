import React, { Component } from 'react';
import { useParams} from "react-router";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import Customers from './components/customers';
import Customersdetails from './components/customersdetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path='/customer-details/:id'  component={<Customersdetails />}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Customer Details</h1>
              </header>
              <Customersdetails />
            </div>
          </Route>
          <Route exact path='/'>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Eashika's Assignmennt for Solstice</h1>
              </header>
              <Customers />
            </div>
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
