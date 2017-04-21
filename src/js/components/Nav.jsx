import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


const Nav = () => {
	return (
<nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
          <li><Link to='/'>Home</Link>&nbsp; </li>
          <li className="port-link"><Link to='/s'>S series</Link> </li>
          <li><Link to='/f'>F series</Link> </li>
  			
<li><Link to='/t'>Todo</Link> </li>
<li className="port-link"><Link to='/t2'>Todo 2</Link> </li>
<li><Link to='/t2r'>Todo redux</Link> </li>
 <li className="port-link"><Link to='/t4r'>Todo redux4</Link> </li> 
<li><Link to='/t44r'>Todo redux44</Link> </li>
{/*<li><Link to='/t5r'>Todo redux5</Link> </li>  */}
<li className="port-link"><Link to='/threeDelta'>Delta</Link> </li>
<li><Link to='/threeEastern'>Eastern</Link> </li>

          </ul>
          {/*
          <ul className="nav navbar-nav navbar-right">
            <li><a href="../navbar/">Default</a></li>
            <li><a href="../navbar-static-top/">Static top</a></li>
            <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
          </ul>
          */}
        </div>
      </div>
    </nav>
	)
};
export default Nav
