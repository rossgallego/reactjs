import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'



// React component
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
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 140 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

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
    onIncreaseClick: function() { dispatch(increaseAction) }
  }
}

// Connected Component
const App = connect( mapStateToProps, mapDispatchToProps ) (Counter)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)

