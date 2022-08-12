const defaultState = {
  todos: []
};

export const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case 'FINISHED_TODO':
      return {
        ...state,
        todos: state.todos.map((el) => (el.id === action.payload ? { ...el, status: true } : el))
      };
    case 'UNFINISHED_TODO':
      return {
        ...state,
        todos: state.todos.map((el) => (el.id === action.payload ? { ...el, status: false } : el))
      };
    default:
      return state;
  }
};
