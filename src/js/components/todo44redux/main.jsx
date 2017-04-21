import React, { Component, PropTypes } from 'react'


import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'


import  App  from "./components/index.jsx"
import   reducer1   from "./reducers/reducer-main.jsx"


// Store
const store = createStore(reducer1)




// let rootElement = document.getElementById('root')

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,

//   rootElement
// )



import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const App2 = () => <h1>Hello React redux</h1>

export default App2
