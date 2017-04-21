import React from 'react';

import F1 from './f1.jsx';
import F2 from './f2.jsx';

class Fseries extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			"jet" : "infantry wipeout1",
			"range" : "low altitude2",
			funProp : function(){
				alert ("test")
			}
		}
		this.setStateHandler = this.setStateHandler.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	setStateHandler(){
		this.setState({"jet": "test infantry 2"
		})
	}
	handleChange(e) {
		this.setState({ jet: e.target.value });
	}
   render() {
      return (
         <div className="row">
         	<h1>{this.state.jet}</h1>	
         	{<button className="btn btn-primary" onClick = {this.setStateHandler}>CLICK</button>}
         	<input type="text" onChange={ this.handleChange } />

         	<div className="clearfix"></div>
         	
            <F1 jetProp ={this.state.jet} rangeProp ={this.state.range} funProp={this.state.funProp}/>
            <F2 />
         </div>
      );
   }
}

export default Fseries;