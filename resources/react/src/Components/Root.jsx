import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Root = (props) => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet></Outlet>
      </main>
     
    </>
  );
};

export default Root;
