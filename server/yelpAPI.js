const yelp = require('yelp-fusion');


const { YELP_API } = process.env;
const client = yelp.client(YELP_API);

const getYelpRestaurants = (req, res) => {
  client.search({
    term: req.body.restaurantName,
    location: req.body.restaurantLocation,
    categories: 'food,restaurants',
    limit: 10,
  })
    .then(response => res.send(response.jsonBody.businesses))
    .catch(err => console.log(err));
};

module.exports = { getYelpRestaurants };
