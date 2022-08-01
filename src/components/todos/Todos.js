import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {fetchData}  from "../../redux/todos/todosActionCreators";
// import Styles from "./todos.module.scss";

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
        !!todos.length && todos.map((item)=> <p>{item.title}</p>)}
    </>
  );
};

export default Todos;
