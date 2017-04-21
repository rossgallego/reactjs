var React = require('react');

var AddItem = React.createClass({

  render: function(){
      return(
			<div>
				

	          <form onSubmit={this.addItem}>
	            <input ref="newNinja" placeholder="enter task">
	            </input>  
	          </form>  
				
			</div>
      )
  },  

	addItem: function(e){
			e.preventDefault();
	  		this.props.addItem(this.refs.newNinja.value);

        this.refs.newNinja.value = "";
	 }

});
module.exports = AddItem