import React, { Component, PropTypes } from 'react'


export default class Add extends Component {

  constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
  }

  addItem(e){
       e.preventDefault();
        let inputval = parseInt(this.refs.addNew.value);
        this.props.addItem(inputval);
   }

  render() {
    return (
      <div>
     <h1> {this.props.value} </h1>

     <form onSubmit={this.addItem}>
     		<div className="text-center">
              <label>Enter number (integers only)</label>
              <input ref="addNew" required type="number"/>

              <button type="submit"> Submit </button>
     		 </div>
     </form>
      </div>
    )
  }


}


