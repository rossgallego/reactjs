import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = { term: '' }
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onTermChange(term);
	}
	
	render() {
		var vm = this;
		return(
		<div className="search">
			{/*<input onChange={event => this.onInputChange(event.target.value)} />*/}
			{/*<input onChange={function(event){vm.onInputChange(event.target.value)}}/>*/}

		 <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
		</div> 
		)

	}
}

export default SearchBar;