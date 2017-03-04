var React = require('react');

var App3 = require('./client3.jsx');

var App2 = React.createClass({
  // render: function() {
  //   return (
  //     <h3>rendered yoo test; too</h3>
  //   )
  // }


	getInitialState: function(){
		return {
			button: "Sign up yeah from 2",
			button3: "from app2",
		}
	},
	myClick: function(){
		// alert ("clicked ")
		console.log("clcii")
	},
	render: function(){
	    return (
	        <div>
	          <h2>Heading from class e</h2>
	          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
	          <p><a className="btn btn-default" href="#" role="button" onClick={this.myClick}>View details &raquo;</a></p>
	          {this.state.button3}
	          <div className="clearfix"></div>
	        </div>
	    )
}





});

module.exports = App2;