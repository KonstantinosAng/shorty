const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    message: 'Piserver - short URLs'
  });
});

PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

