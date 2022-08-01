import { get_todos_data } from "../../api_data/todo_api_data";


const loading_todos =data=>{
    return{type:"LOADING_TODOS",payload :data}
}

const get_todos = data=>{
    return{type : "GET_TODOS", payload :data}
}

const errors_todos =message=>{
    return{type:"ERROR_TODOS",payload :message}
}

export const fetchData =()=>{
    return async dispatch=>{
        try{
            dispatch(loading_todos(true));
            const res = await get_todos_data();
            console.log(res.data);
            dispatch(loading_todos(false));
            dispatch(get_todos(res.data));
            dispatch(errors_todos(""));
        }catch(error){
            dispatch(loading_todos(false));
            dispatch(get_todos([]));
            dispatch(errors_todos(error.message));
        }
    }
}

