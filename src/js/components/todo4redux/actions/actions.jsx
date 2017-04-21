// export const increase = 'increase'
export const increaseAction = { type: 'increase' }


export const addAction = { type: 'add', sett: 1000 };

// let nextTodoId = 0;
export const dosAction = {type: "dosaction"}

export function increaseAction2(inputt) {
   return {
      type: "add",
      sett: inputt
   };
}

export function addTodo(add) {
   return {
      type: "ADD_TODO",
      title: add
   };
}

export function deleteSong(indexID) {
   return {
      type: "DELETE_SONG",
      indexID: indexID
   };
}

export function editSong(indexID,song) {
   return {
      type: "EDIT_SONG",
      indexID: indexID,
      title: song
   };
}

// let increaseAction2 = { type: 'increase' }

// export const increaseAction = () => {
// 	return increaseAction2
// }


