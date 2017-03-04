require('bootstrap-loader');
require("../../style/main.scss");

var React = require('react');
var ReactDOM = require('react-dom');
var App1 = require('./client.jsx');
var App2 = require('./client2.jsx');
var App3 = require('./client3.jsx');
var App4 = require('./client4.jsx');
var SubHero = require('./subHero.jsx');
var SubHero2 = require('./subHero2.jsx');
var SubHero3 = require('./subHero3.jsx');

var App0 = React.createClass({
	getInitialState: function(){
		return {
			button: "fred",
			anyName: "flintstone"
		}
	},
  render: function() {
    return (
    	<div>
    		<App3 button33={this.state.button}/>
    	</div>
    )
  }
});


// ReactDOM.render(<App1 />, document.querySelector('#main'));
// ReactDOM.render(<App2 />, document.querySelector('#main2'));
// ReactDOM.render(<App0 />, document.querySelector('#main3'));

ReactDOM.render(<App4 />, document.querySelector('#main4'));

ReactDOM.render(<SubHero />, document.querySelector('#main'));
ReactDOM.render(<SubHero2 />, document.querySelector('#main2'));
ReactDOM.render(<SubHero3 />, document.querySelector('#main3'));
