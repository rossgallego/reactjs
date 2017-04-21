import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
   render() {
      var vm = this;
      return (
         <div>
            <input type = 'text' ref = 'input2' />
				
            {/*<button onClick = {(e) => this.handleClick(e)}>*/}
            <button onClick ={
                  function(e){
                     vm.handleClick(e)
                  }
            }>

               Add
            </button>
				
         </div>
      )
   }

   handleClick(e) {
      const node = this.refs.input2
      const text = node.value.trim()
      this.props.onAddClick(text)
      node.value = ''
   }
}