const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':   // Check for Add Item Case.
    console.log(state);
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {...state, todos: [...state.todos, newItem]};
      case 'TOGGLE_ITEM': // Check for toggled items
        return{ 
          ...state,
          todos: state.todos.map( todo => {
            if(todo.id === action.payload) {
              return {...todo, completed: !todo.completed}
            }  else {
              return todo;
            }
          })
        };
        case 'DELTE_ITEMS': // Check for delted items
        console.log('delete ran');
          return {...state, todos: state.todos.filter( todo => todo.completed === false)}
        default: 
          return state;
  }
}

export default reducer;
// const stateObject = {
//   todos: [{
//       item: 'Learn about reducers',
//       completed: false,
//       id: 3892987589
//     },
//   ],
// }

// exports = {
//     stateObject,
//     reducer,
// }
