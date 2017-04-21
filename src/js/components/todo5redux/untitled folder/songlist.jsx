import React, {Component, Prototype} from "react";

export default class SongList extends Component{
	constructor(props){
		super(props);
		this.addTodo = this.addTodo.bind(this)
	}

	addTodo(e){
		// e.preventDefault();
		this.props.addTodo(this.input.value)
	}

	render(){
		return(
			<div className="songList"> 
				<h2>songlist </h2>
				{this.props.songlist.map(function(item, itemID) {
						return (<div>{item.title}</div>)
					}
				)}
				<form onSubmit={this.addTodo}>
					<input type="text" ref={node => {this.input = node}}/>
				</form>
				<div className="clearfix"> </div>
			</div>

		)
	}

}