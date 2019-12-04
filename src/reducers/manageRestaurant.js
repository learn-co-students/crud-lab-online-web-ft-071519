
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews:[]}, action) {
  switch(action.type){
      case 'ADD_RESTAURANT':
          const newRestaurant = { text: action.text, id: cuidFn() }
          return { ...state, restaurants: [...state.restaurants, newRestaurant]}
      case 'DELETE_RESTAURANT':
        console.log('going to delete the restaurant');
        const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
        return { ...state, restaurants: filteredRestaurants}
      case 'ADD_REVIEW':
        console.log('going to add a review');
        const newReview = { text: action.text, restaurantId: action.restaurantId, id: cuidFn() }
        return { ...state, reviews: [...state.reviews, newReview]}
      default:
          return state;
  }
}
