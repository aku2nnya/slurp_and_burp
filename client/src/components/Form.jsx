import React from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Toshi',
      restaurantName: '',
      restaurantLocation: '',
      restaurant: '',
      formality: '',
      ratingAtmosphere: '',
      ratingPrice: '',
      ratingService: '',
      ratingFood: '',
      comment: '',
      searchResults: [],
      formDisplay: false,
    };
    this.getYelpRestaurants = this.getYelpRestaurants.bind(this);
    this.postReview = this.postReview.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
  }

  getYelpRestaurants() {
    const { restaurantName, restaurantLocation } = this.state;
    const restaurantInfo = { restaurantName, restaurantLocation };
    axios.post('/yelpRestaurants', restaurantInfo)
      .then(response => this.setState({ searchResults: response.data }))
      .catch((error) => { throw (error); });
  }

  postReview() {
    axios.post('/allReviews', this.state)
      .then(response => console.log(response))
      .catch((error) => { throw (error); });
  }

  handleSearch() {
    const { restaurantName, restaurantLocation } = this.state;
    if (restaurantName && restaurantLocation) {
      this.getYelpRestaurants();
    }
  }

  handleInput(e) {
    const targetKey = e.target.name;
    this.setState({
      [targetKey]: e.target.value,
    });
  }

  handleSubmit() {
    const { getAllReviews } = this.props;
    const {
      username, restaurant, formality, ratingAtmosphere,
      ratingPrice, ratingService, ratingFood,
    } = this.state;
    if (username && restaurant && formality && ratingAtmosphere
      && ratingPrice && ratingService && ratingFood) {
      this.postReview();
      getAllReviews();
    }
  }

  handleRestaurantClick(e) {
    const { formDisplay } = this.state;
    this.setState({
      restaurant: e.target.value,
      formDisplay: !formDisplay,
    });
  }

  render() {
    const { searchResults, restaurant, formDisplay } = this.state;
    const toggleDisplay = formDisplay ? 'show' : 'hide';
    return (
      <>
        <form>
          <h2>Search Restaurant</h2>
          <input name="restaurantName" placeholder="Restaurant Name" onChange={this.handleInput} required />
          <input name="restaurantLocation" placeholder="Restaurant City" onChange={this.handleInput} required />
          <button type="button" onClick={this.handleSearch}>Search</button>
        </form>
        <SearchResults
          searchResults={searchResults}
          handleRestaurantClick={this.handleRestaurantClick}
        />
        <form className={toggleDisplay}>
          <h2>Restaurant</h2>
          <div required>{restaurant}</div>
          <h3>Formality:</h3>
          <select name="formality" onChange={this.handleInput} required>
            <option defaultValue="" />
            <option>Fast Food</option>
            <option>Casual</option>
            <option>Fine Dining</option>
            <option>Michelin</option>
          </select>
          <h3>Ratings:</h3>
          <span>Atmosphere: </span>
          <select name="ratingAtmosphere" onChange={this.handleInput} required>
            <option defaultValue="" />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <span> Price: </span>
          <select name="ratingPrice" onChange={this.handleInput} required>
            <option defaultValue="" />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <span> Service: </span>
          <select name="ratingService" onChange={this.handleInput} required>
            <option defaultValue="" />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <span> Food: </span>
          <select name="ratingFood" onChange={this.handleInput}>
            <option defaultValue="" />
            <option value="1">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <h4>Comments:</h4>
          <textarea name="comment" placeholder="Any comments?" onChange={this.handleInput} />
          <br />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
