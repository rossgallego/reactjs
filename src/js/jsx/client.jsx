var React = require('react');

var App2 = require('./client2.jsx');

var App1 = React.createClass({

	getInitialState: function(){
		return {
			username: "Dino",
			anyName: "Dino"
		}
	},
  render: function() {
    return (
    	<div>
      <h1>{this.state.username}
      </h1>
      <App2 anyName={this.state.username}/>
      </div>
    )
  }
});

module.exports = App1;