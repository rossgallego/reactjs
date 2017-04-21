require('bootstrap-loader');
require("../style/main.scss");

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


// start Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  App  from "./components/todo4redux/components/index.jsx"
import  reducer3   from "./components/todo4redux/reducers/reducer-main.jsx"
const store = createStore(reducer3 ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import  App  from "./components/todo44redux/components/index.jsx"
// import  reducer3   from "./components/todo44redux/reducers/reducer-main.jsx"
// const store = createStore(reducer3 ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import  App  from "./components/todo5redux/components/component-index.jsx"
// import  reducer   from "./components/todo5redux/reducers/reducer-todos"
// const store = createStore(reducer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// end redux




// Import routing components
// import {Router, Route} from 'react-router';

// import F1 from './components/f1.jsx';
// import F2 from './components/f1.jsx';
import Fseries from './components/fseries/index.jsx';
import Hseries from './components/hseries/index.jsx';
import Sseries from './components/sseries/index.jsx';
// import Rseries from './components/rseries/index.jsx';
import Todo from './components/todo/index.jsx';
import Todo2 from './components/todo2/index.jsx';
import Todo2r from './components/todo3redux/components/index.jsx';
import Todo4r from './components/todo4redux/components/index.jsx';
// import Todo44r from './components/todo44redux/components/index.jsx';
// import Todo5r from './components/todo5redux/components/component-index.jsx';
import threeDelta from './components/threeDelta/index.jsx';
import threeEastern from './components/threeEastern/index.jsx';


import Nav from './components/Nav.jsx';

// ReactDOM.render(<div id="root"><Fseries /></div>,
//   document.getElementById('Fseries')
// );

// ReactDOM.render(<div id="root"><Hseries /></div>,
//   document.getElementById('Hseries')
// );

// ReactDOM.render(<Hseries />, document.getElementById('Hseries'))
// ReactDOM.render(<Sseries />, document.getElementById('Sseries'))


const Routed = () => {
    return (
<Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Hseries} />
          <Route path='/s' component={Sseries} />
          <Route path='/f' component={Fseries} />
          <Route path='/t' component={Todo} />
          <Route path='/t2' component={Todo2} />
          <Route path='/t2r' component={Todo2r} />
          <Route path='/t4r' component={Todo4r} /> 
          {/*<Route path='/t44r' component={Todo44r} /> */}
          {/*<Route path='/t5r' component={Todo5r} /> */}
          <Route path='/threeDelta' component={threeDelta} />
          <Route path='/threeEastern' component={threeEastern} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
</Provider>
    )
}
const NotFound = () => (
  <h1>404.. This page is not found!</h1>
)

// const Nav = () => (
//   <div>
//     <Link to='/'>Home</Link>&nbsp;
//     <Link to='/s'>S series</Link>
//     <Link to='/f'>F series</Link>
//   </div>
// )
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>


// ReactDOM.render(<Hseries />, document.getElementById('root'))
ReactDOM.render(<Routed />, document.getElementById('root'))


