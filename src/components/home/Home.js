import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// action creator
import { fetchData } from "../../redux/todos/todosActionCreators";
// scss
import Styles from "./home.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <div className={Styles.home}>here is home</div>;
};

export default Home;
