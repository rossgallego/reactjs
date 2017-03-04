var React = require('react');

var App3 = React.createClass({
	getInitialState: function(){
		return {
			button: "Sign up",
			button2: "Sign up",
			button3: "asas"
		}
	},
	render: function(){
		return(
        <div>
          <h2>Heading from class e</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
          {this.state.button3}
          <div className="clearfix"></div>
          {this.props.button33}
        </div>
			)
	}

});

module.exports = App3;