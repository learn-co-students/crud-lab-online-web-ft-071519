import React, { Component } from 'react';
import Restaurant from '../../../../../../../../../Users/aabua/dev/flatiron/npm/crud-lab-online-web-ft-071519/src/components/restaurants/Restaurant';

// class Restaurants extends Component {
//   render() {
//     return (
//       <ul>
//         Restaurants Component
//         <li>{props.restaurant.restaurantName}</li>
//       </ul>
//     );
//   }
// };

// export default Restaurants;

const Restaurants = props => {


  return (

    <ul>
      {/* <Restaurant>{props.restaurant.restaurantName}</Restaurant> */}
      <li><Restaurant delete={props.delete} key={props.restaurant.id} restaurant={props.restaurant}></Restaurant> </li>
    </ul>
  )
};

export default Restaurants;