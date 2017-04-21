import { combineReducers } from 'redux'
// Reducer

// reducer 1
const initialState = {
		songlist: [{
				title: "welcome to paradise"
			},
			{
				title: "when I come around"
			}
		]
};
function reducer1(state = initialState, action) {
		switch (action.type) {
			case 'add':
				return { 
					state
				}
				return state
			default:
				return state
	}
}

// reducer 2
const initialState2 = {
		songlist: [{
				title: "welcome to paradise2"
			},
			{
				title: "when I come around2"
			}
		]
};
 function reducer2(state = initialState2, action) {
		switch (action.type) {
			case 'add':
				return { 
					state
				}
				return state
			default:
				return state
	}
}


const reducer3 = combineReducers({
   reducer1,reducer2
})

export default reducer3


