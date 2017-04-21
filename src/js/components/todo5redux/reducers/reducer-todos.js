import Immutable from "immutable"

// es6 
// export default (state = Immutable.List(["Code more"]),action) => {

export default function reducer2(state = Immutable.List(["Code more"]), action) {
	// export default function reducer2(state = ["aas"], action) {



	switch (action.type) {
		case "addTodo":
			return state.push(action.todo)
			// return state.unshift(action.todo)
    case 'deleteTodo':
      		// return state.filter((todo, index) => index !== action.index)
      		return state.filter((todo, index) => index !== action.index)
      		// return state.filter((elem, index, arr) => arr.indexOf(elem) !== action.index);

		default:
			return state
	}

}