import React, {Component, Prototype} from "react";

export default class SongList extends Component{
	constructor(props){
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
	}

	addTodo(e){
		// e.preventDefault();
		this.props.addTodo(this.input.value)
	}
	deleteSong(itemID){
		this.props.deleteSong(itemID)
	}
	render(){
		return(
			<div className="songList container"> 
				<h2>songlist </h2>
				{/*
					this.props.songlist.map(function(item, itemID) {
						return (
							<div key={itemID}>
								{item.title} {itemID}
								<button onClick={this.deleteSong}> delete </button>
							</div>
						) 
					})
				*/}

				{

					this.props.songlist.map(
						(item, itemID) =>
						<div className="row">
						<div className="col-md-4">
							<h3>{item.title} {itemID} </h3>
						</div>	
							{/*
							<button onClick={function(e){
								return this.deleteSong(itemID)
							}}> delete </button>
							*/}

							<div className="col-md-4">
							<input type="text" placeholder={itemID}/> 

							</div>
							<div className="col-md-1">
							<button className="btn btn-primary" onClick={e => {this.deleteSong(itemID)}}>delete </button>
							</div>

						</div>)
				}

				<div className="clearfix"></div>
				<div className="row">
				<div className="col-md-4">
				<h3>Add new items below </h3>
				<form onSubmit={this.addTodo}>
					<input type="text" ref={node => {this.input = node}}/>
				</form>
				</div>
				</div>
				<div className="clearfix"> </div>
			</div>

		)
	}

}

