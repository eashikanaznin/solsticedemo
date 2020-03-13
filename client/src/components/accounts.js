import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router";

const Accounts = () => {
  /*fetching user id from url*/
  const [allAccounts, setAccounts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch('/api/accounts');
      const Jresponse = await response.json();
      setAccounts(Jresponse);
      console.log(Jresponse);
    }
    getCustomers();
  }, []);
  function renderHead() {
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
  return (
    <div>

      <div>
        <div class="page-title"><h2>Accounts</h2></div>

        <div class="table-responsive-lg">
          <table className="table table-hover">
            <thead className="thead-dark">{renderHead()}</thead>
            <tbody>
              {
                allAccounts.map((acc, index) => {

                  return <tr key={acc.id} ><td>{acc.id}</td><td>{acc.customer_id}</td>
                    <td>{acc.address}</td><td>{acc.city}</td><td>{acc.state}</td>
                    <td>{acc.zip_code}</td><td>{acc.solar_farm_id}</td>
                    <td>{acc.capacity_share}</td><td>{acc.created_date}</td>
                  </tr>


                })
              }

            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};
export default Accounts;

