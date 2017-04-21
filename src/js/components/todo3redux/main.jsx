import React, { Component, PropTypes } from 'react'


import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'


import  App  from "./components/index.jsx"
import   reducer1   from "./reducers/reducer-main.jsx"



// import { reducer1 } from "./reducer1.jsx"
// import  reducer1  from "./reducer1.jsx"
// import { increaseAction } from './actions.jsx'

// React component
// class Counter extends Component {
//   render() {
//     // const { value, onIncreaseClick } = this.props
//     return (
//       <div>
//         <span>{this.props.value}</span>
//         <button onClick={this.props.onIncreaseClick}>Increaseasas</button>
//       </div>
//     )
//   }
// }


// Action
// const increaseAction = { type: 'increase' }

// Store
const store = createStore(reducer1)

// // Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     // onIncreaseClick: () => dispatch(increaseAction)
//     onIncreaseClick: function() { dispatch(increaseAction) }
//   }
// }

// // Connected Component
// const App = connect( mapStateToProps, mapDispatchToProps ) (Counter)







let rootElement = document.getElementById('root')

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,

//   rootElement
// )



import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const App2 = () => <h1>Hello React redux</h1>

export default App2
