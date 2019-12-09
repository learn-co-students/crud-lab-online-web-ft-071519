
import cuid from 'cuid';
import { combineReducers } from "redux";
export const cuidFn = cuid;

const manageRestaurantsAndReviews = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
});

export default manageRestaurantsAndReviews;

function manageRestaurants(state = [], action) {
    console.log(action)
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            console.log(restaurant)
            return [...state, restaurant]
            // return { restaurants: state.restaurants.concat(restaurant) }
        case "DELETE_RESTAURANT":
            return state.filter(restaurant => restaurant.id !== action.id)

        default:
            return state
    }
};

function manageReviews(state = [], action) {
    console.log(action)
    switch(action.type) {
        case "ADD_REVIEW":
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return [...state, review]
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.id)
        default:
            return state
    }
}; 
