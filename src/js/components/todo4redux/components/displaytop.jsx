import React, { Component, Prototype } from "react";

export default class DisplayTop extends Component{

	constructor(props){
		super(props);

		this.ChangeDos = this.ChangeDos.bind(this)
	}

	ChangeDos(){
		this.props.ChangeDos()
	}
	render(){
		return(
			<div> 
				<div>display:  {this.props.displaytop}</div>
				<div> <button onClick={this.ChangeDos}> change dos </button></div>
			</div>

		)

	}

}