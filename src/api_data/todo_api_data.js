import axios from "axios";

export const get_todos_data = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return res;
};
