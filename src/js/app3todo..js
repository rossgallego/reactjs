require('bootstrap-loader');
require("../style/main.scss");

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



// Import routing components
// import {Router, Route} from 'react-router';

// import F1 from './components/f1.jsx';
// import F2 from './components/f1.jsx';
import Fseries from './components/fseries/index.jsx';
import Hseries from './components/hseries/index.jsx';
import Sseries from './components/sseries/index.jsx';
import Rseries from './components/rseries/index.jsx';
import Todo from './components/todo/index.jsx';
import Todo2 from './components/todo2/index.jsx';

import Nav from './components/sseries/Nav.jsx';

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
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Hseries} />
          <Route path='/s' component={Sseries} />
          <Route path='/f' component={Fseries} />
          <Route path='/r' component={Rseries} />
          <Route path='/t' component={Todo} />
          <Route path='/t2' component={Todo2} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
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


