import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {fetchData}  from "../../redux/todos/todosActionCreators";
// scss 
import Styles from "./todos.module.scss";
// component 
import Todo from "../todo/Todo";

const Todos = () => {

  const dispatch =useDispatch();
  const { loading , todos , error } = useSelector(state => state.todosState);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <>
        {!!loading ? <p>loading ... </p> :
        !!error ? <p>{error}</p> : 
        !!todos.length && 
        <div className={`${Styles.todos} container-fluid`}>
        <div className="row">
        { todos.map((item)=> <Todo key={item.id} data={item} />)}
        </div>
        </div> }
    </>
  );
};

export default Todos;
