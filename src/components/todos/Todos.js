import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {fetchData}  from "../../redux/todos/todosActionCreators";
// import Styles from "./todos.module.scss";

const Todos = () => {

  const dispatch =useDispatch();
  const { todos ,loading} = useSelector(state => state.todosState);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
        here is todos
    </div>
  );
};

export default Todos;
