import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
  }

  renderTableHeader() {
    let col_head=[];
    for (var i in this.state.customers) {
      var key = i;
      var val = this.state.customers[i];
      for (var j in val) {
        var sub_key = j;
        col_head.push(sub_key);

      }
      break;
    }
    //console.log(col_head);
    let header = col_head
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase().replace(/_/g, ' ')}</th>
    })
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <table>
          <thead>{this.renderTableHeader()}</thead>
          <tbody>
            {this.state.customers.map(customer =>
              <tr key={customer.id}><td>{customer.id}</td><td>{customer.first_name}</td>
              <td>{customer.last_name}</td><td>{customer.email}</td><td>{customer.active}</td>
              <td>{customer.account_manager_id}</td><td>{customer.reason_for_joining}</td>
              <td>{customer.created_date}</td>
              <td> <li><a href="/customer-details/">View Details</a></li></td>
              </tr>
            )}
          </tbody>
        </table>
        <ul>
                    <li><a href="/test">React</a></li>
                </ul>
      </div>
    );
  }
}

export default Customers;
