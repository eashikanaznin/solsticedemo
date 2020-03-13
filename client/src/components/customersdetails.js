import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router";

const Customersdetails = () => {
  /*fetching user id from url*/
  const [allAccounts, setAccounts] = useState([]);
  const params = useParams();
  const currentCustomer=params.id;
  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch('/api/accounts');
      const Jresponse = await response.json();
      setAccounts(Jresponse);
      console.log(Jresponse);
    }
    getCustomers();
  }, []);
  return (
    <div>
      <h2>{params.id}</h2>
      <ul>
        {
          allAccounts.map((acc, index) => {
            //if(acc.id==currentCustomer){
            if(acc.customer_id==currentCustomer){
              return <li key={acc.id}>{acc.id}</li>
            }
          
          })
        }
      </ul>
    </div>
  );
};
export default Customersdetails;



//import React, { useState, useEffect } from 'react';
//import axios from 'axios';

// function Customersdetails() {
//   const params= useParams();
//   const [data, setData] = useState({ hits: [] });
//   useEffect(async () => {
//     const result = getContacts();
//     setData(result.data);
//   }, []);
//   return (
//      <h2>{params.id}</h2>
//      <ul>

//       { {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))} }
//     </ul>
//   );
// }

// export default function Customersdetails(){

//  const params= useParams();
//  //const response =  getContacts();
//  console.log("asas");
// //  fetch('/api/customers')
// //  .then(res => res.json())
// //  .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
//  //console.log(response);

//  let count = 3

//  const object = Object.assign({}, 
//    {count: count + 1}, 
//    {count: count + 2}, 
//    {count: count + 3}
//  );
// return <div><h1>{params.id}</h1><div></div> </div>
// },[]);

