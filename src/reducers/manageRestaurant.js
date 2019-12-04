
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch(action.type){
      case 'ADD_RESTAURANT':
          const newRestaurant = { text: action.text, id: cuidFn() }
          return { ...state, restaurants: [...state.restaurants, newRestaurant]}
      default:
          return state;
  }
}
