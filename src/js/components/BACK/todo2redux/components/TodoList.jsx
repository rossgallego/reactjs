import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends Component {
   render() {
      var vm = this;
      return (
         <ul>
            {/*{this.props.todos.map(todo => <Todo key = {todo.id} {...todo} />)}*/}
            {
               vm.props.todos.map(function(todo){
                  return <Todo key = {todo.id} {...todo} />
               }) 
            }
         </ul>
      )
   }
}