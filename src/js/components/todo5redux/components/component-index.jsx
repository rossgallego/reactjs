import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';


// components
import  NewTodo   from "./NewTodo.jsx"

// actions
// import { todos } from '../actions/action-index'
import { addTodo, deleteTodo } from '../actions/action-index'


// es5
// class Counter extends Component {
//   render() {
//     // const { value, onIncreaseClick } = this.props
//     return (
//       <div className = "redux-todo3">
            
//             <div className="clearfix"> </div>  
            

//             <div className="clearfix"> </div>  

//       </div>
//     )
//   }
// }



// es6
const Todos = ({todos,addTodo2,deleteNote}) => {
  return (
    <div className="todo5">
      <h1>Todos</h1>

      <NewTodo onChange={addTodo2}/>

      {/*  {todos.map((todo,index) => <p key={index}>{todo} <button onClick={deleteNote}>delete {index}</button></p>)}. */}

      {todos.map((todo,index) => <p key={index}>{todo}<button onClick={e => {deleteNote}}>X</button></p>)}
      
    </div>
  )
}
// const Todos = function({todos}){
//   return(
//   <div>
//     <h1>Todos</h1>
//       {todos.map(function(todo){
//         <p key={todo}>{todo}</p>
//       })}
//   </div>
//   )
// }




// Map Redux state to component props
function mapStateToProps(todos) {
  return {
    todos
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
       addTodo2: function(e){ dispatch(addTodo(e.target.value)) },
       // deleteNote:function(index){ dispatch(deleteTodo(index)) }
       // deleteNote:function(index){ console.log(index) }
       deleteNote:function(index){ dispatch(deleteTodo(index)) }
  }
}

// Connect Component
export default connect( mapStateToProps, mapDispatchToProps ) (Todos);
// export default connect( mapStateToProps) (Todos);


