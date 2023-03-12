const express = require('express');
const request = require('request');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(morgan('dev'))

app.get('/', (req, res) => {
  const url = process.env.API_URL;
  const options = {
    url: url,
    headers: {
      'Origin': 'http://localhost:5001'
    }
  };
  request.get(options).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});


