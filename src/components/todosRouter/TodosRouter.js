import React from "react";
// components
import Todos from "../todos/Todos";
// react- router
import { Routes, Route } from "react-router-dom";
// scss
import Styles from "./todosRouter.module.scss";

const todosRouter = () => {
  return (
    <div className={Styles.todosRouter}>
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
    </div>
  );
};

export default todosRouter;
