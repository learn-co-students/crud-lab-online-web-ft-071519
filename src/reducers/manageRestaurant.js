
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch(action.type){
      case 'ADD_RESTAURANT':
          console.log('going to add a restaurant!')
          //update state 
          /* falls through */
      default:
          return state;
  }
}
