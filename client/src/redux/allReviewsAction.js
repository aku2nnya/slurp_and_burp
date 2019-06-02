import axios from 'axios';


const getAllReviews = () => dispatch => axios.get('/allreviews')
  .then((response) => {
    dispatch({
      type: 'GET_ALL_REVIEWS',
      payload: response.data,
    });
  })
  .catch((error) => { throw (error); });


export default getAllReviews;
