import React from "react";
// router
import { NavLink } from "react-router-dom";
// scss
import Styles from "./navbar.module.scss";
// icons
import { ImHome } from "react-icons/im";
import { RiTodoFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbar_item}>
        <NavLink
          to="/"
          className={(NavData) =>
            NavData.isActive
              ? `${Styles.navLink} ${Styles.active}`
              : Styles.navLink
          }
        >
          <ImHome />
        </NavLink>
      </div>
      <div className={Styles.navbar_item}>
        <NavLink
          to="/todosrouter"
          className={(NavData) =>
            NavData.isActive
              ? `${Styles.navLink} ${Styles.active}`
              : Styles.navLink
          }
        >
          <RiTodoFill />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
