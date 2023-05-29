import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-center container">
      <h1 className="header__logo">كليه الحاسبات والمعلومات</h1>
      <ul className="d-flex ">
        <li className="nav__link px-2">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            الرئيسية
          </NavLink>
        </li>
        <li className="nav__link px-2">
          <NavLink
            to={"/activities"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            الأنشطه
          </NavLink>
        </li>
        <li className="nav__link px-2">
          <NavLink
            to={"/achevment"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            الانجازات
          </NavLink>
        </li>
        <li className="nav__link px-2">
          <NavLink
            to={"/contact-us"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            تواصل معنا
          </NavLink>
        </li>
      </ul>
      <div className="login__holder">
        <Link to={"/login"}>تسجيل الدخول</Link>
      </div>
    </header>
  );
};

export default NavBar;
