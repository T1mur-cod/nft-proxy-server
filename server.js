const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/', (req, res) => {
  const url = 'https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json';
  const options = {
    url: url,
    headers: {
      'Origin': 'http://localhost:5001'
    }
  };
  request.get(options).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
