const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));


app.get('/url/:id', (req, res) => {
  // TODO: get a short url by id
});

app.get('/:id', (req, res) => {
  // TODO: redirect to url
});


app.post('/url', (req, res) => {
  // TODO: create a short url
});


PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

