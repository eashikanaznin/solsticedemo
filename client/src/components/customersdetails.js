import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router";

const Customersdetails = () => {
  /*fetching user id from url*/
  const [allAccounts, setAccounts] = useState([]);
  const [allCustomers, setCustomers] = useState([]);
  const params = useParams();
  const currentCustomer = params.id;
  useEffect(() => {
    const getAccounts = async () => {
      const response = await fetch('/api/accounts');
      const Jresponse = await response.json();
      setAccounts(Jresponse);
      console.log(Jresponse);
    }
    const getCustomers = async () => {
      const response = await fetch('/api/customers');
      const Jresponsecus = await response.json();
      setCustomers(Jresponsecus);
      console.log(Jresponsecus);
    }
    getAccounts();
    getCustomers();
  }, []);
  function accrenderHead() {
    let col_head = [];
    for (var i in allAccounts) {
      var key = i;
      var val = allAccounts[i];
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
  var countr = 0;
  var flag = 0;
  const longeur = allAccounts.length;
  return (
    <div>
      <div class="page-title"><h2>Customer's account details [ID: {params.id}]</h2></div>

      
        <h3>Profile</h3>
       
          {
            allCustomers.map((cus, index) => {
              if (cus.id == currentCustomer) {
                return<ul className="list-group list-group-flush"> <li className="list-group-item" key={cus.id}><b>ID:</b> {cus.id}</li><li className="list-group-item"><b>First name:</b> {cus.first_name}</li>
                <li className="list-group-item"><b>Last name:</b> {cus.last_name}</li><li className="list-group-item"><b>Email:</b> {cus.email}</li><li className="list-group-item"><b>Active:</b> {cus.active}</li>
                <li className="list-group-item"><b>Account manager id:</b> {cus.account_manager_id}</li><li className="list-group-item"><b>reason for joining:</b> {cus.reason_for_joining}</li>
                <li className="list-group-item"><b>Created date:</b> {cus.created_date}</li></ul>
              }

            })
          }
       
        <div class="acc-page-title"><h3>Accounts Information</h3></div>
        <div class="table-responsive-lg">
        <table className="table table-hover">
          <thead className="thead-dark">{accrenderHead()}</thead>
          <tbody>
            {
              allAccounts.map((acc, index) => {
                flag++;
                if (acc.customer_id == currentCustomer) {
                  countr++;
                  return <tr key={acc.id} ><td>{acc.id}</td><td>{acc.customer_id}</td>
                    <td>{acc.address}</td><td>{acc.city}</td><td>{acc.state}</td>
                    <td>{acc.zip_code}</td><td>{acc.solar_farm_id}</td>
                    <td>{acc.capacity_share}</td><td>{acc.created_date}</td>
                  </tr>
                }
                if (longeur == flag && countr == 0) {
                  return <tr><td colspan='9'>No results found</td></tr>
                }

              })
            }
          </tbody>
        </table>

      </div>
    </div>

  );
};
export default Customersdetails;

