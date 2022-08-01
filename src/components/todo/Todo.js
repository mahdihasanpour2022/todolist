import React from "react";
// helper_functions
import { shorten_seentenses } from "../../helper_functions/helperFunctions";
// scss
import Styles from "./todo.module.scss";
// icons
import { AiFillSetting } from "react-icons/ai";

const Todo = ({ data }) => {
  // const { userId,id ,title , completed } = data;
  const { completed, title } = data;
  return (
    <div
      className={
        !!completed ? `${Styles.todo} ${Styles.uncompleted}` : Styles.todo
      }
    >
      <p>{shorten_seentenses(title, 2)}</p>
      <div className={Styles.iconDiv}>
      <AiFillSetting />
      </div>
    </div>
  );
};

export default Todo;
