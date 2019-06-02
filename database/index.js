const mongoose = require('mongoose');
require('dotenv').config();


const { DB_USER, DB_PW } = process.env;
mongoose.connect(`mongodb://${DB_USER}:${DB_PW}@localhost/slurpandburp`, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

const myReviewsSchema = mongoose.Schema({
  username: String,
  restaurant: String,
  formality: ['Fast Food', 'Casual', 'Formal', 'Michelin'],
  ratingAtmosphere: ['1', '2', '3', '4', '5'],
  ratingPrice: ['1', '2', '3', '4', '5'],
  ratingService: ['1', '2', '3', '4', '5'],
  ratingFood: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  comment: String,
});
const MyReviews = mongoose.model('allreviews', myReviewsSchema);

const getAllReviews = (req, res) => {
  MyReviews
    .find({}, null, { sort: { restaurant: 1 } })
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send('GET all ERROR: ', err));
};

const getRestaurantReview = (req, res) => {
  MyReviews
    .find({ restaurant: req.body.restaurant })
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send('GET restaurant ERROR: ', err));
};

const postMyReview = (req, res) => {
  MyReviews
    .create(req.body)
    .then(() => res.status(201).send('POST successful'))
    .catch(err => res.status(500).send('POST review ERROR: ', err));
};

module.exports = {
  db, getAllReviews, getRestaurantReview, postMyReview,
};
