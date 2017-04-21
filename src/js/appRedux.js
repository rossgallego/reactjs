import { createStore } from 'redux'
import React from 'react';


import { connect } from 'react-redux';



 // one reducer
let reducer =  (state = 0, action) => {
  switch (action.type) {
    // case 'INCREASE': return state+1
    // case 'INCREASE': return alert("ok4")
    case 'INCREASE': return func1(state)
    case 'DECREASE': return state-1
    case 'HELLOREDUX': return hellowredux()
    default: return state
  }
}

  let func1 = function(state){
      alert(state)
  }
  let hellowredux = function(state){
      alert("hellow redux!")
  }
// actions
let oke = {
  type: 'INCREASE'
}
let helloredux = {
  type: 'HELLOREDUX'
}
// multiple action creators
const increaseCreator = () => {
  return oke;
}
const decreaseCreator = () => {
  return {type: 'DECREASE'}
}
// const testCreator = () => {
//   return {type: 'HELLOREDUX'}
// }
const testCreator = function()  {
  return {type: 'HELLOREDUX'}
}



// one store
let store = createStore(reducer)



let unsubscribe = store.subscribe(() =>{
  document.getElementById('state_container').innerHTML = store.getState()
})

// es6 playground
window.increase = function(e){
  store.dispatch(increaseCreator())
}
// window.increase = e => store.dispatch(increaseCreator())

// window.decrease = e => store.dispatch({
//   type: 'DECREASE'
// })
// window.decrease= function(){
//   store.dispatch(decreaseCreator())
// }
window.decrease = (e) => store.dispatch(decreaseCreator())

window.helloredux = function(e){
  store.dispatch(testCreator())
}

