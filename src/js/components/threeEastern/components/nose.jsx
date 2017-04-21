import React from 'react';

export default class Nose extends React.Component {
	render(){
		return(
			<div className="nose">
				<h1>hello </h1>	
				<h2>{this.props.character}</h2>
			</div>	
		)
	}
}