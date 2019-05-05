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
  ratingAtmosphere: Number,
  ratingPrice: Number,
  ratingService: Number,
  ratingFood: Number,
});
const MyReviews = mongoose.model('MyReviews', myReviewsSchema);

const getAllReviews = (req, res) => {
  MyReviews
    .find({})
    .exec((err, data) => {
      if (err) {
        console.log('GET all ERROR: ', err);
        res.status(400).send(err);
        throw (err);
      }
      res.status(200).send(data);
    });
};

const getRestaurantReview = (req, res) => {
  MyReviews
    .find({ restaurant: req.body.restaurant })
    .exec((err, data) => {
      if (err) {
        console.log('GET restuarant ERROR: ', err);
        res.status(400).send(err);
        throw (err);
      }
      res.status(200).send(data);
    });
};

const postMyReview = (req, res) => {
  MyReviews
    .create(req.body)
    .exec((err) => {
      if (err) {
        console.log('POST review ERROR: ', err);
        res.status(500).send(err);
        throw (err);
      }
      res.status(201).send('POST successful');
    });
};

module.exports = {
  db, getAllReviews, getRestaurantReview, postMyReview,
};
