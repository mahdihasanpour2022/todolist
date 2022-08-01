import {todos_save_in_localStorage , fetch_todos_from_localStorage} from "../../localStorage/localStorage";

const initialTodosState = {
  loading: false,
  todos: !!fetch_todos_from_localStorage().length ? fetch_todos_from_localStorage() : [],
  error: null,
};

const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case "LOADING_TODOS":
      return { ...state, loading: action.payload };
    case "GET_TODOS":
      todos_save_in_localStorage(action.payload)
      return { ...state, todos: action.payload };
    case "ERROR_TODOS":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
