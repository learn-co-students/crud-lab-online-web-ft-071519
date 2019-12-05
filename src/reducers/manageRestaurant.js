
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews:[]}, action) {
  switch(action.type){
      case 'ADD_RESTAURANT':
          const newRestaurant = { text: action.text, id: cuidFn() }
          return { ...state, restaurants: [...state.restaurants, newRestaurant]}
      case 'DELETE_RESTAURANT':
        const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
        return { ...state, restaurants: filteredRestaurants}
      case 'ADD_REVIEW':
        const newReview = { text: action.text, restaurantId: action.restaurantId, id: cuidFn() }
        return { ...state, reviews: [...state.reviews, newReview]}
      case 'DELETE_REVIEW':
        const filteredReviews = state.reviews.filter(review => review.id !== action.id)
        return {...state, reviews: filteredReviews }
      default:
          return state;
  }
}
