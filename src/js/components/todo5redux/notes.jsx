


// main app
require('bootstrap-loader');
require("../style/main.scss");

import React, { Component } from 'react' // 3
import ReactDOM from 'react-dom'; // 4
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { createStore } from 'redux' // 1
import { Provider } from 'react-redux' // 5
import  App  from "./components/todo5redux/components/component-index.jsx" // 6
import  reducer   from "./components/todo5redux/reducers/reducer-todos"  // 2
const store = createStore(reducer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
<Provider store={store}></Provider> // 7

// Index component
import React, { Component, PropTypes } from 'react' // 9
import { connect } from 'react-redux'; // 8
import { addTodo }from '../actions/actions.jsx'  // 11
export default connect( mapStateToProps, mapDispatchToProps ) (Counter); // 10

// ross above
// =================================
// them below


// store
import { createStore } from 'redux';  // 1
import todos from './reducers/todos'  // 2
     export default createStore(todos)
// main app
import React from 'react'  // 3
import { render } from 'react-dom'   // 4
import { Provider } from 'react-redux' // 5
import store from '../store'
import Todos from './todos' // 6
<Provider store={store}><Todos /></Provider> // 7
 
// Index componnent
import React from 'react' // 9
import { connect } from 'react-redux' // 8
import { addTodo, deleteTodo } from '../actions' // 11
export default connect(mapStateToProps)(Todos) // 10
















// ===================
// import export 
 // components

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
VS
import React from 'react'
import { connect } from 'react-redux'







// A functional component using an ES2015 (ES6) arrow function:
var Aquarium = (props) => {
  var fish = getFish(props.species);
  return <Tank>{fish}</Tank>;
};

// Or with destructuring and an implicit return, simply:
var Aquarium = ({species}) => (
  <Tank>
    {getFish(species)}
  </Tank>
);

// Then use: <Aquarium species="rainbowfish" />

