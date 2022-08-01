import React from "react";
// scss
import Styles from "./todo.module.scss";

const Todo = ({ data }) => {

const shorten_seentenses =text=>{
  return text.split(" ").slice(0,3).join(" ")
}

  // const { userId,id ,title , completed } = data;
  const { title  } = data;
  return (
   <div className={Styles.todo}>
    <p>{shorten_seentenses(title)}</p>
   </div>
  );
};

export default Todo;
