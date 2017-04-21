import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { render } from 'react-dom'

// components
import  Add  from './add.jsx'

// actions
import { increaseAction } from '../actions/actions.jsx'
// import { addAction } from '../actions/actions.jsx'

import { increaseAction2 } from '../actions/actions.jsx'

class Counter extends Component {
  render() {
    // const { value, onIncreaseClick } = this.props
    return (
      <div className = "redux-todo3">
        <span>{this.props.value}</span>
        <button onClick={this.props.onIncreaseClick}>Increaseasas</button>

        <Add value={this.props.value} addItem={this.props.addItem}/>
      </div>
    )
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    // onIncreaseClick: () => dispatch(increaseAction)
    onIncreaseClick: function() { dispatch(increaseAction) },
    // addItem: function() { dispatch(addAction) }

    addItem: function(inputt) { return dispatch(increaseAction2(inputt)) }
    
  }
}

// Connected Component
// const App = connect( mapStateToProps, mapDispatchToProps ) (Counter)

export default connect( mapStateToProps, mapDispatchToProps ) (Counter);


