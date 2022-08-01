export const todos_save_in_localStorage =data=>{
    return localStorage.setItem("todos" , JSON.stringify(data))
}