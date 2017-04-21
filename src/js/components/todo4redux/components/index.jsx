import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { render } from 'react-dom'

// components
import  Add  from './add.jsx'
import DisplayTop from "./displaytop.jsx"
import SongList from "./songlist.jsx"
// actions
import { increaseAction } from '../actions/actions.jsx'
import { increaseAction2 } from '../actions/actions.jsx'
import { dosAction } from '../actions/actions.jsx'
import { addTodo }from '../actions/actions.jsx'
import { deleteSong }from '../actions/actions.jsx'
class Counter extends Component {
  constructor(props){
    super(props);

  }


  render() {
    // const { value, onIncreaseClick } = this.props
    return (
      <div className = "redux-todo3">
            <span>{this.props.value}</span>
            <div className="clearfix"> </div>  
            <span>{this.props.valuey}</span>

            <div className="clearfix"> </div>  

            <button onClick={this.props.onIncreaseClick}>Increaseasas</button>

            <Add value={this.props.value} addItem={this.props.addItem}/>

            <DisplayTop displaytop={this.props.dos} ChangeDos={this.props.ChangeDos}/>

            <SongList songlist={this.props.songlist} addTodo={this.props.addTodo} deleteSong={this.props.deleteSong}/>


      </div>
    )
  }
}


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.reducer2.count,
    dos: state.reducer2.dos,
    valuey: state.reducer2.tre,
    songlist: state.reducer1.todo
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    // onIncreaseClick: () => dispatch(increaseAction)
    onIncreaseClick: function() { dispatch(increaseAction) },

    addItem: function(inputt) { return dispatch(increaseAction2(inputt)) },

    ChangeDos: function(){ dispatch(dosAction) },

    addTodo: function(add){ return dispatch(addTodo(add))},
    deleteSong: function(indexID){ return dispatch(deleteSong(indexID))}

  }
}

// Connect Component
export default connect( mapStateToProps, mapDispatchToProps ) (Counter);


