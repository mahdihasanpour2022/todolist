import React from "react";
import Store from "./redux/Store";
import { Provider } from "react-redux";
// react-router
import { Routes, Route } from "react-router-dom";
// component
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import TodosRouter from "./components/todosRouter/TodosRouter";

const App = () => {
  return (
    <>
      <Navbar />
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todosRouter/*" element={<TodosRouter />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
