import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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
      .then(customers => this.setState({ customers }, () => console.log('Customers..', customers)));
  }
  handleClick = function (data) {
    window.location.href = "/customer-details/"+data;
    console.log(data);
  }
  renderTableHeader() {
    let col_head = [];
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
       <div class="page-title"><h2>Customers</h2></div>
       <span class="sub-title">Please click on the row to see customer details</span>
       <div class="table-responsive-lg">
        <table className="table table-hover tbl-wth-link">
          <thead className="thead-dark">{this.renderTableHeader()}</thead>
          <tbody>
            {this.state.customers.map(customer =>
              <tr key={customer.id} onClick={() => this.handleClick(customer.id)} data-item={'/customer-details/' + customer.id}><td>{customer.id}</td><td>{customer.first_name}</td>
                <td>{customer.last_name}</td><td>{customer.email}</td><td>{customer.active}</td>
                <td>{customer.account_manager_id}</td><td>{customer.reason_for_joining}</td>
                <td>{customer.created_date}</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Customers;
