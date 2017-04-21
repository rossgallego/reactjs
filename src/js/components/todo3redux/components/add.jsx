import React, { Component, PropTypes } from 'react'


export default class Add extends Component {

  constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
    }

  render() {
    // const { value, onIncreaseClick } = this.props
    return (
      <div>
     <h1> {this.props.value} </h1>

     <form onSubmit={this.addItem}>
     		<div className="text-center">
     			<label>Enter add</label>
	     		<input type="text" ref="addNew" required/>

	     		<button type="submit"> Submit </button>
	     		
     		 </div>
     </form>
      </div>
    )
  }

	addItem(e){
			e.preventDefault();
	  		// this.props.addItem(this.refs.addNew.value);

	  		// this.props.addItem(18);
	  		// let inputval = parseFloat(this.refs.addNew.value);
	  		let inputval = parseInt(this.refs.addNew.value);
	  		this.props.addItem(inputval);
        	// this.refs.newNinja.value = "";
	 }
}


