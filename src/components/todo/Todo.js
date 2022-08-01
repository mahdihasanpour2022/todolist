import React from "react";
// scss
// import Styles from "./todo.module.scss";

const Todo = ({ data }) => {
  // const { userId,id ,title , completed } = data;
  const { title  } = data;
  return (
    <>
      <p>{title}</p>
    </>
  );
};

export default Todo;
