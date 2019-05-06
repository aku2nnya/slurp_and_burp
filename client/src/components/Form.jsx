import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Toshi',
      restaurant: '',
      formality: '',
      ratingAtmosphere: '',
      ratingPrice: '',
      ratingService: '',
      ratingFood: '',
      comment: '',
    };
    this.postReview = this.postReview.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  postReview() {
    axios.post('/allReviews', this.state)
      .then(res => console.log(res))
      .catch(err => console.log('POST ERROR: ', err));
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
      username, restaurant, formality, ratingAtmosphere, ratingPrice, ratingService, ratingFood
    } = this.state;
    if (username && restaurant && formality && ratingAtmosphere
      && ratingPrice && ratingService && ratingFood) {
      this.postReview();
      getAllReviews();
    }
  }

  render() {
    return (
      <form>
        <div>Restaurant</div>
        <input name="restaurant" placeholder="Enter Restaurant Name" onChange={this.handleInput} required />
        <div>Formality</div>
        <select name="formality" onChange={this.handleInput} required>
          <option defaultValue="" />
          <option>Fast Food</option>
          <option>Casual</option>
          <option>Fine Dining</option>
          <option>Michelin</option>
        </select>
        <div>Ratings</div>
        <div>Atmosphere</div>
        <select name="ratingAtmosphere" onChange={this.handleInput} required>
          <option defaultValue="" />
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div>Price</div>
        <select name="ratingPrice" onChange={this.handleInput} required>
          <option defaultValue="" />
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div>Service</div>
        <select name="ratingService" onChange={this.handleInput} required>
          <option defaultValue="" />
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div>Food</div>
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
        <div>Comments</div>
        <input name="comment" placeholder="Any comments?" onChange={this.handleInput} />
        <br />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
