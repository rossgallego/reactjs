import React from 'react';

class ninjaAdd extends React.Component {

	constructor(){
		super();
		this.state = {name: ""}

		this.onAdd = this.onAdd.bind(this);

	}
	onAdd(e){
		// this.props.addNinja(name)
		// alert(name)
		this.thisState ={name: event.target.value}
	}

	render() {
		return (
			<div>
				
				<input type="text" onChange={this.onAdd}/>
				
			</div>
		);
	}
}

export default ninjaAdd;