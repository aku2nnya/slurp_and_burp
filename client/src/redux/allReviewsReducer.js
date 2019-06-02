const initialState = {
  allReviews: [],
};

const allReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_REVIEWS':
      state = {
        ...state,
        allReviews: action.payload,
      };
      break;
    }
  return state;
};


export default allReviewsReducer;
