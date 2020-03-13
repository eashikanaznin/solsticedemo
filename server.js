const express = require('express');

const app = express();


app.get('/api/customers', (req, res) => {
const customers = require('./initial/customers.json');
  //res.json(customers);
  res.json(customers);
});

app.get('/api/accounts', (req, res) => {
 const accounts = require('./initial/account.json');
   //res.json(customers);
   res.json(accounts);
 });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);