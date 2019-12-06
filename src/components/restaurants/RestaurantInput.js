import React, { Component } from 'react';

class RestaurantInput extends Component {

state = {
  text: ""
}

handleOnChange = (event) => {
  console.log(this.state)
  this.setState({
    text: event.target.value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  this.props.addRestaurant(this.state.text)
  this.setState({
    text: ""
  })
}

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
