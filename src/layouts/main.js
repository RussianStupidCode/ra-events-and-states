import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/common/navbar/navbar";
import { ROUTER_PATH } from "../helpers/path";

function MainLayout() {
  const navbarItems = [
    { title: "Filter (Task 1)", link: ROUTER_PATH.filter },
    { title: "Layouts (Task 2)", link: ROUTER_PATH.layouts },
  ];

  return (
    <div>
      <NavBar menuList={navbarItems} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
