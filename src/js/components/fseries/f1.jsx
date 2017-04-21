import React from 'react';

class F1 extends React.Component {

	constructor(){
		super();
		this.state = {
			"jet" : "infantry wipeout",
			"range" : "low altitude"
		}

	}

	render() {

		var f = 10;
		var s = 2;
		return (
			<div className="col-md-6">
			{/*Hello World!!! 111 {f+s}*/}
			{this.props.jetProp} <br />
			{this.props.rangeProp}

			<button onClick = {this.props.funProp}>CLICK</button>
			</div>
		);
	}
}

export default F1;