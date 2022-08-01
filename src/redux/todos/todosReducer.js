const initialTodosReducer = {
  loading: false,
  todos: [],
  error: null,
};

const todosReducer=(state = initialTodosReducer , action){
    switch(action.type){
        case "LOADING_TODOS":
            return {...state , loading : action.payload};
            case "GET_TODOS":
                return {...state , todos : action.payload};
                case "ERROR_TODOS":
                    return {...state , error : action.payload};
                    default :
                    return state;
    }
};

export default todosReducer;