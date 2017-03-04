var React = require('react');

var data = require('./sample-api.json');

var arrayR = data.map(function(item,index){
	return item;
})

var subHero2 = React.createClass({
	getInitialState: function(){
		return {
			button: "Sign up",
			button2: "Sign up",
			button3: "asas",
			arraye: arrayR
		}
	},
	render: function(){
		return(
					//	<div>
						// <h2>Heading from class e</h2>
						// <p>{this.state.arraye[0].description}</p>
						// </div>

						// <div>

			        <div>
				          
				          <img className='cube-thumb' src= {this.state.arraye[3].images.normal}/>
				          <h3>{this.state.arraye[3].title}</h3>
				          
				          <p><a className="btn btn-primary" href={this.state.arraye[3].html_url}>more Info</a></p>
				          
			
			        </div>
			)
	}

});

module.exports = subHero2;