import { combineReducers } from 'redux'
// Reducer

const initialState = {
		count: 180,
		dos: "dos",
		tre: "cool",
		todo: [{
				title: "welcome to paradise"
			},
			{
				title: "when I come around"
			}
		]
};


export default function reducer1(state = initialState, action) {
  		const count = state.count

		switch (action.type) {
			case 'increase':
				return { 
					count: count + 1,
					tre: "okok",
				}
			case 'add':
				return { 
					count: count + action.sett,
				}
			case 'dosaction':
				return { 
					count: 180,
					dos: "green",
					tre: "cool",
					todo: []
				}
			case 'ADD_TODO':
				return { 
					todo: [...state.todo, {title: action.title}]
			}
			default:
				return state
	}
}


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


