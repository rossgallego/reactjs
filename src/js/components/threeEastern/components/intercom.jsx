import React from "react"

export default class Intercom extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}

		this.newCharacter = this.newCharacter.bind(this)
	}

	newCharacter(e) {
		e.preventDefault();
		this.props.newCharacter =  event.target.value;		
	}

	render(){
		return(
			<div>
				<form onSubmit={this.newCharacter}>
					<input type="text" />
				</form>
			</div>
		)
	}
}