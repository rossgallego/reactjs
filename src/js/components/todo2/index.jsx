var React = require('react');

var TodoList = require('./todo-list.jsx');

var AddItem = require('./add-item.jsx');

var TMNT = React.createClass({
  getInitialState: function(){
      return{ ninjas: 
          [
              {
              name: "michaelangelo"
              },
              {
              name: "raphael"
              }
          ]
        }
  },
  render: function(){

      
      return(
        <div className="todo2">
           <TodoList ninjas={this.state.ninjas} deleteItem={this.deleteNinja} editItem={this.editNinja}/>
            <AddItem addItem={this.addNinja}/>
        </div>
      )
  }, 
  addNinja: function(ninja){
        var newArray = this.state.ninjas.slice();    
        newArray.push({name: ninja});   
        this.setState({ninjas:newArray})
  },
  deleteNinja: function(ninjaId){
        var newArray = this.state.ninjas;   
        newArray.splice(ninjaId,1); 
        this.setState({ninjas:newArray})
  },
  editNinja: function(ninja, keyid){
        // alert(keyid + "   " + ninja)
        // var ok = ninja;
        var newArray = this.state.ninjas;   
        newArray.splice(keyid,1, {name: ninja}); 
        this.setState({ninjas:newArray})
  } 

});
module.exports = TMNT