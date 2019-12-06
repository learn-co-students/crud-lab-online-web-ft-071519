import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    console.log(this.state)
    console.log(this.props)
    event.preventDefault()
    this.props.addReview(this.state);
    this.setState({
      text: ""
    })

  }

  render() {
    console.log(this.props)
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
