import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

// components
// import  Add  from './add.jsx'

// actions
// import { increaseAction } from '../actions/actions.jsx'

class Counter extends Component {
  render() {
    // const { value, onIncreaseClick } = this.props
    return (
      <div className = "redux-todo3">
            {/*<span>{this.props.songlist}</span>*/}
            <span>{this.props.songlist}</span>

      </div>
    )
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    songlist: state.reducer2.songlist[1].title
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    // onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connect Component
export default connect( mapStateToProps, mapDispatchToProps ) (Counter);


