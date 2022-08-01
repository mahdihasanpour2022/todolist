export const todos_save_in_localStorage =data=>{
    return localStorage.setItem("todos" , JSON.stringify(data))
}

export const fetch_todos_from_localStorage =()=>{
    return JSON.parse(localStorage.getItem("todos"))
}