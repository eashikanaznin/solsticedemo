const express = require('express');

const app = express();
var sols_customer_data = require('./initial/test.json');

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  //res.json(customers);
  res.json(sols_customer_data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);