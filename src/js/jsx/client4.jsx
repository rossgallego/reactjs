var React = require('react');

var data = require('./sample-api.json');

var cubes = data.map(function(el){
	// <li key={player.championId}>{player.summonerName}</li>
  	
  	return <div className='col-md-3'><div className = "cube">
  				<img className='cube-thumb' src= {el.images.teaser}/>
  				<div className='clearfix'></div>{el.title}
  				<div className='clearfix'></div>{el.user.name}
  				<div className='clearfix'></div>{el.user.location}
  				<div className='clearfix'></div>
<a className="btn btn-primary" href={el.html_url}>visit profile</a>
  				
  				</div>
  			</div>
});
       
var App4 = React.createClass({
	getInitialState: function(){
		return {
			button: "Sign up",
			button2: "Sign up",
			button3: "asas",
			cube: cubes
		}
	},
	render: function(){
		return(
			<div>{this.state.cube} </div>		
		)			



	}

});

module.exports = App4;