var React = require('react');

var Item = require('./todo-item.jsx');

var List = React.createClass({
  render: function(){


   var gg = this;
      return(
        <div>
        <h1>To Do List</h1>
            {this.props.ninjas.map(function(ninja,key){
                return <div>
                    <Item ninja={ninja.name} keyid={key} deleted={gg.props.deleteItem} edited={gg.props.editItem}/>
                </div>
            })}
        </div>
      )
  }
});
module.exports = List