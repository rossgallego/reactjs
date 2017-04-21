import React, { Component } from 'react'
import { connect } from 'react-redux';


// class App2 extends Component {

class Counter extends Component {
  render() {
    // const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={this.props.onIncreaseClick}>Increaseasas</button>
      </div>
    )
  }
}

export default Counter;