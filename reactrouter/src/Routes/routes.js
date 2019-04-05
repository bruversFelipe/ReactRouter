import React from "react";
import Home from "../Pages/Home";
import SubMenu1 from "../Pages/SubMenu1";
import SubMenu2 from "../Pages/SubMenu2.jsx";
import Item1 from "../Pages/SubMenu2.jsx/Item1";
import Item2 from "../Pages/SubMenu2.jsx/Item2";
import Container from "../Pages/SubMenu2.jsx/Container";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/sub-menu1",
    component: SubMenu1
  },
  {
    name: "SubRoutes",
    path: "/sub-menu2",
    component: SubMenu2,
    routes: [
      {
        path: "/sub-menu2",
        component: Container,
        exact: true,
      },
      {
        path: "/sub-menu2/item1",
        component: Item1
      },
      {
        path: "/sub-menu2/item2",
        component: Item2
      }
    ]
  }
];

export default routes;
