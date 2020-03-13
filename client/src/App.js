import React, { Component } from 'react';
import { useParams } from "react-router";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';


import Customers from './components/customers';
import Customersdetails from './components/customersdetails';
import Accounts from './components/accounts';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/customer-details/:id' component={<Customersdetails />}>
            <Header />
            <body>
              <div className="container">
                <Customersdetails />
              </div>
            </body>

          </Route>

          <Route exact path='/accounts'>
            <Header />
            <body>
              <div className="container">
                <Accounts />
              </div>
            </body>
          </Route>

          <Route exact path='/'>
            <Header />
            <body>
              <div className="container">
                <Customers />
              </div>
            </body>
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
