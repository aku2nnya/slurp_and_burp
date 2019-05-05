const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const { getAllReviews, postMyReview } = require('../database/index');

const app = express();
const { PORT } = process.env;

app.use(morgan('combined'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/allReviews', getAllReviews);
app.post('/allReviews', postMyReview);

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
