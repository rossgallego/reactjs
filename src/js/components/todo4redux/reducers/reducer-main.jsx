import { combineReducers } from 'redux'
// Reducer

const initialState = {
		todo: [{
				title: "welcome to paradise"
			},
			{
				title: "when I come around"
			}
		]
};
function reducer1(state = initialState, action) {
		switch (action.type) {
			case 'ADD_TODO':
				return { 
					todo: [...state.todo, {title: action.title}]
			}
			case 'DELETE_SONG':
				return { 
					// todo: state.todo.filter((todo, index) => index !== 1)
					todo: state.todo.filter((todo, index) => index !== action.indexID)
			}
			case 'EDIT_SONG':
				return { 
					todo: [...state.todo, {title: action.title}]
			}
			default:
				return state
	}
}


const initialState2 = {
		count: 180,
		dos: "dos",
		tre: "cool",
};

function reducer2(state = initialState2, action) {
  		const count = state.count

		switch (action.type) {
			case 'dosaction':
				return { 
					count: 180,
					dos: "green",
					tre: "cool",
					todo: []
			}
			case 'increase':
				return { 
					count: count + 1,
					tre: "okok",
				}
			case 'add':
				return { 
					count: count + action.sett,
				}
			default:
				return state
	}
}



const reducer3 = combineReducers({
   reducer1,
   reducer2
})


export default reducer3


