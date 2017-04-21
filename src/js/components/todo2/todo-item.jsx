var React = require('react');

var Item = React.createClass({
  render: function(){

      return(
        <div className="todo-item">
            <span className="item-name" ref="thisItem">{this.props.ninja}</span>
            {/*<span>{this.props.keyid}</span>*/}
            <button onClick={this.deleteItem}>X</button>
            <form className="form-edit" onSubmit={this.editItem}>
              <sup>edit below </sup>
            	<input ref="editNinja" placeholder={this.props.ninja}/>
              <span className="clearfix"></span>
            </form>	
        </div>
      )
  },  

  deleteItem: function(){
  	// alert(this.props.keyid)
  	this.props.deleted(this.props.keyid)
  },
  editItem: function(e) {
    // this.setState({text: e.target.value});
    var number = parseInt(this.props.keyid);
    this.props.edited(this.refs.editNinja.value, number)
  }
});
module.exports = Item