import { combineReducers } from 'redux'
// Reducer


// export const reducer1 = (state = { count: 140 }, action) => {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }




// function counter(state = { count: 140 }, action) {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }

// const reducer1 = combineReducers({
//    counter
// })

// export default counter



export default(state = { count: 142 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'add':
      return { count: count + action.sett  }
    default:
      return state
  }
}







